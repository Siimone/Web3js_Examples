pragma solidity ^0.4.17;

contract WastingGas {
    function pay() public payable {
        msg.sender.send(msg.value);
    }
}