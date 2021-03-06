const Web3 = require ('web3')
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
const solc = require ('solc')
const fs = require ('fs')

var compileSource = {
  'Store.sol' : fs.readFileSync('./contracts/Store.sol', 'utf8'),
  'Migration.sol' : fs.readFileSync('./contracts/Migrations.sol', 'utf8'),
  'ProductOwner.sol' : fs.readFileSync('./contracts/Productowner.sol', 'utf8')
}

let compiledContract = solc.compile({sources: compileSource}, 1)
console.log(compiledContract)
let abi = compiledContract['Store.sol:Store'].interface;
let StoreContract = web3.eth.contract(abi)
let byteCode = compiledCode.contracts['Store.sol:Store'].bytecode
let deployedContract = StoreContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
let address = deployedContract.address
console.log("Store Contract Address: %s" %address)
let contractInstance = StoreContract.at(0x32b24383ca3f03b5a0a650c6c87b6ac100958376)
