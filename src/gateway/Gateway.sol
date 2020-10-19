pragma solidity 0.5.15;
pragma experimental ABIEncoderV2;

import "../account/AccountOwnerRegistry.sol";
import "../common/libs/SafeMathLib.sol";
import "../common/libs/SignatureLib.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/typedData/TypedDataContainer.sol";
import "../personal/PersonalAccountRegistry.sol";


/**
 * @title Gateway
 */
contract Gateway is Initializable, TypedDataContainer {
  using SafeMathLib for uint256;
  using SignatureLib for bytes32;

  struct DelegatedBatch {
    uint256 nonce;
    address[] to;
    bytes[] data;
    uint256 gasPrice;
  }

  bytes32 private constant DELEGATED_BATCH_TYPE_HASH = keccak256(
    "DelegatedBatch(uint256 nonce,address[] to,bytes[] data,uint256 gasPrice)"
  );

  AccountOwnerRegistry public accountOwnerRegistry;
  PersonalAccountRegistry public personalAccountRegistry;

  mapping(address => uint256) private accountNonces;

  /**
   * @dev public constructor
   */
  constructor() public Initializable() {}

  // external functions

  function initialize(
    AccountOwnerRegistry accountOwnerRegistry_,
    PersonalAccountRegistry personalAccountRegistry_,
    bytes32 typedDataDomainNameHash,
    bytes32 typedDataDomainVersionHash,
    bytes32 typedDataDomainSalt
  )
    external
    onlyInitializer
  {
    accountOwnerRegistry = accountOwnerRegistry_;
    personalAccountRegistry = personalAccountRegistry_;

    // TypedDataContainer
    _initializeTypedDataContainer(
      typedDataDomainNameHash,
      typedDataDomainVersionHash,
      typedDataDomainSalt
    );
  }

  // public functions

  function sendBatch(
    address[] memory to,
    bytes[] memory data
  )
    public
  {
    _sendBatch(
      msg.sender,
      msg.sender,
      to,
      data
    );
  }

  function sendBatchFromAccount(
    address account,
    address[] memory to,
    bytes[] memory data
  )
    public
  {
    _sendBatch(
      account,
      msg.sender,
      to,
      data
    );
  }

  function delegateBatchFromAccount(
    address account,
    address[] memory to,
    bytes[] memory data,
    bytes memory senderSignature
  )
    public
  {
    address sender = _hashPrimaryTypedData(
      _hashTypedData(
        accountNonces[account],
        to,
        data,
        tx.gasprice
      )
    ).recoverAddress(senderSignature);

    accountNonces[account] = accountNonces[account].add(1);

    _sendBatch(
      account,
      sender,
      to,
      data
    );
  }

  // public functions (views)

  function hashDelegatedBatch(
    DelegatedBatch memory delegatedBatch
  )
    public
    view
    returns (bytes32)
  {
    return _hashPrimaryTypedData(
      _hashTypedData(
        delegatedBatch.nonce,
        delegatedBatch.to,
        delegatedBatch.data,
        delegatedBatch.gasPrice
      )
    );
  }

  // external functions (views)

  function getAccountNonce(
    address account
  )
    external
    view
    returns (uint256)
  {
    return accountNonces[account];
  }

  // private functions

  function _sendBatch(
    address account,
    address sender,
    address[] memory to,
    bytes[] memory data
  )
    private
  {
    require(
      account != address(0)
    );

    require(
      to.length > 0
    );
    require(
      data.length == to.length
    );

    if (account != sender) {
      require(
        personalAccountRegistry.verifyAccountOwner(account, sender) ||
        accountOwnerRegistry.verifyAccountOwner(account, sender)
      );
    }

    bool succeeded;

    for (uint256 i = 0; i < data.length; i++) {
      require(
        to[i] != address(0)
      );

      // solhint-disable-next-line avoid-low-level-calls
      (succeeded,) = to[i].call(abi.encodePacked(data[i], account, sender));

      require(
        succeeded
      );
    }
  }

  // private functions (pure)

  function _hashTypedData(
    uint256 nonce,
    address[] memory to,
    bytes[] memory data,
    uint256 gasPrice
  )
    private
    pure
    returns (bytes32)
  {
    bytes32[] memory dataHashes = new bytes32[](data.length);

    for (uint256 i = 0; i < data.length; i++) {
      dataHashes[i] = keccak256(data[i]);
    }

    return keccak256(abi.encode(
      DELEGATED_BATCH_TYPE_HASH,
      nonce,
      keccak256(abi.encodePacked(to)),
      keccak256(abi.encodePacked(dataHashes)),
      gasPrice
    ));
  }
}
