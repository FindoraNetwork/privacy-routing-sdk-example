const { exec } = require('child_process');

exec(`abi-types-generator './src/abis/Erc20.json' --output='./src/contracts' --name=Erc20 --provider=web3`);
exec(`abi-types-generator './src/abis/Bridge.json' --output='./src/contracts' --name=Bridge --provider=web3`);
exec(`abi-types-generator './src/abis/Relayer.json' --output='./src/contracts' --name=Relayer --provider=web3`);
