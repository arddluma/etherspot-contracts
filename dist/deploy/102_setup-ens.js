"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const func = async (hre) => {
    var _a;
    const { deployments: { get, log, execute, read }, network: { name }, config: { typedData, ens, knownContracts }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    if (await read('ENSController', 'isInitialized')) {
        log('ENSController already initialized');
        return;
    }
    const ensController = await get('ENSController');
    const gateway = await get('Gateway');
    let ensRegistryAddress = (_a = knownContracts === null || knownContracts === void 0 ? void 0 : knownContracts[name]) === null || _a === void 0 ? void 0 : _a.ENSRegistry;
    let ensRegistry;
    if (!ensRegistryAddress) {
        ensRegistry = await get('ENSRegistry');
        ({ address: ensRegistryAddress } = ensRegistry);
    }
    await execute('ENSController', {
        from,
        log: true,
    }, 'initialize', ensRegistryAddress, [], gateway.address, ethers_1.utils.id(typedData.domains.ENSController.name), ethers_1.utils.id(typedData.domains.ENSController.version), typedData.domainSalt);
    if (ensRegistry && ens && Array.isArray(ens.internalTopLevelDomains)) {
        for (const name of ens.internalTopLevelDomains) {
            await execute('ENSRegistry', {
                from,
                log: true,
            }, 'setSubnodeOwner', ethers_1.constants.HashZero, ethers_1.utils.id(name), from);
            await execute('ENSRegistry', {
                from,
                log: true,
            }, 'setOwner', ethers_1.utils.namehash(name), ensController.address);
            await execute('ENSController', {
                from,
                log: true,
            }, 'addNode', ethers_1.utils.namehash(name));
        }
    }
};
func.tags = ['setup', 'ens'];
module.exports = func;
