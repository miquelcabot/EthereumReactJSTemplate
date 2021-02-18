// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

// Factory contract for eDelivery
contract EDeliveryFactory {
    mapping(address => EDelivery[]) public senderDeliveries;
    mapping(address => EDelivery[]) public receiverDeliveries;
    EDelivery[] public deliveries;

    function createDelivery(address[] memory _receivers, string memory _message) public payable {
        EDelivery newDelivery = new EDelivery{value: msg.value}(msg.sender, _receivers, _message);
        deliveries.push(newDelivery);
        senderDeliveries[msg.sender].push(newDelivery);
        for (uint i = 0; i<_receivers.length; i++) {
            receiverDeliveries[_receivers[i]].push(newDelivery);
        }
    }

    function getSenderDeliveries(address _sender) public view returns (EDelivery[] memory) {
        return senderDeliveries[_sender];
    }

    function getSenderDeliveriesCount(address _sender) public view returns (uint) {
        return senderDeliveries[_sender].length;
    }

    function getReceiverDeliveries(address _receiver) public view returns (EDelivery[] memory) {
        return receiverDeliveries[_receiver];
    }

    function getReceiverDeliveriesCount(address _receiver) public view returns (uint) {
        return receiverDeliveries[_receiver].length;
    }

    function getDeliveries() public view returns (EDelivery[] memory) {
        return deliveries;
    }

    function getDeliveriesCount() public view returns (uint) {
        return deliveries.length;
    }
}

// eDelivery
contract EDelivery {
    // Parties involved
    address public sender;
    address[] public receivers;

    // Message
    string public message;

    // Constructor funcion to create the delivery
    constructor (address _sender, address[] memory _receivers, string memory _message) payable {
        sender = _sender;
        receivers = _receivers;

        message = _message;
    }
}
