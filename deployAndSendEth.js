/**
 * Deploy WastingGas.sol and call 'pay' function
 */

var Web3 = require("web3")
let web3 = new Web3()
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))

var abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "pay",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
];
var helloContract = web3.eth.contract(abi);
var hello = helloContract.new(
    {
        from: web3.eth.accounts[0],
        data: '0x60606040523415600e57600080fd5b60b08061001c6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631b9265b8146044575b600080fd5b604a604c565b005b3373ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050505600a165627a7a7230582051532ae6b874ac533dba922430ca2aa9b31894aa0d65896dbcb71a1b970dbf8e0029',
        gas: '4700000'
    }, function (error, contract) {
        if (error)
            console.log("Errore: " + error)
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + '\nTransactionHash: ' + contract.transactionHash)
            contract.pay({
                from: web3.eth.accounts[0],
                value: web3.toWei(10, "ether")
            }, function (err, result) {
                if (err)
                    console.log("Error: " + err);
                else
                    console.log("TX Hash: " + result);
            });
        }
    })