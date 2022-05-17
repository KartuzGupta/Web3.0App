// https://eth-ropsten.alchemyapi.io/v2/njqxKiVA8rOHGV842U5uaPsf1FNoZ7Eg

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks :{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/njqxKiVA8rOHGV842U5uaPsf1FNoZ7Eg',
      accounts: ['6d2cbc2aafbaf3226778283d76566a3d6720986c5fa0784024da7d66838e495f']

    }
  }
}