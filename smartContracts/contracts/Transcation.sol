// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Transcation {
    uint256 transcationCount = 0;

    event Transfer(
        address sender,
        address reciever,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address reciever;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transcations;

    function addToBlockchain(
        address payable reciever,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transcationCount += 1;
        transcations.push(
            TransferStruct(
                msg.sender,
                reciever,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );

        emit Transfer(
            msg.sender,
            reciever,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTranscations()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transcations;
    }

    function getTranscationsCount() public view returns (uint256) {
        return transcationCount;
    }
}
