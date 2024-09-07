// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Escrow is ReentrancyGuard {
    struct EscrowTransaction {
        address payer;
        address payee;
        uint256 amount;
        string order_id;
        bool isPaid;
        bool isFailed; // Track if the escrow has failed
    }

    mapping(uint256 => EscrowTransaction) public escrows;
    mapping(uint256 => uint256) public escrowBalances;
    mapping(string => uint256) public orderIdToEscrowId; // Mapping from order_id (string) to escrowId
    uint256 public escrowCount = 0;

    event EscrowStarted(
        uint256 indexed escrowId,
        address payer,
        address payee,
        uint256 amount
    );
    event EscrowReleased(
        uint256 indexed escrowId,
        address payee,
        uint256 amount
    );
    event FundsReturned(
        uint256 indexed escrowId,
        address payer,
        uint256 amount
    );

    // Function to start an escrow transaction
    function startEscrow(
        address _payee,
        uint256 _amount,
        string memory _order_id
    ) external payable returns (uint256 _escrowId) {
        require(_amount > 0, "Escrow amount should be greater than zero");
        require(
            msg.value == _amount,
            "Sent value does not match the specified amount"
        );
        require(bytes(_order_id).length > 0, "Order ID cannot be empty");

        escrowCount++;

        escrows[escrowCount] = EscrowTransaction({
            payer: msg.sender,
            payee: _payee,
            amount: _amount,
            order_id: _order_id,
            isPaid: false,
            isFailed: false // Initialize as false
        });

        // Map the order_id to the newly created escrowId
        orderIdToEscrowId[_order_id] = escrowCount;

        // Store the sent amount in the escrow balance
        escrowBalances[escrowCount] = _amount;

        emit EscrowStarted(escrowCount, msg.sender, _payee, _amount);
        return escrowCount;
    }

    // Function to release ETH from escrow to the payee
    function releaseEscrow(uint256 escrowId) external nonReentrant {
        EscrowTransaction storage escrow = escrows[escrowId];
        require(msg.sender == escrow.payee, "Only payee can release funds");

        uint256 amount = escrowBalances[escrowId];
        require(amount > 0, "No funds in escrow");

        escrowBalances[escrowId] = 0;
        escrow.isPaid = true;

        (bool success, ) = payable(escrow.payee).call{value: amount}("");
        require(success, "Transfer failed");

        emit EscrowReleased(escrowId, escrow.payee, amount);
    }

    // Function to return ETH from escrow to the payer
    function returnFunds(uint256 escrowId) external nonReentrant {
        EscrowTransaction storage escrow = escrows[escrowId];

        require(
            msg.sender == escrow.payee || msg.sender == escrow.payer,
            "Only payee or payer can return funds"
        );
        require(!escrow.isPaid, "Funds already released");
        require(!escrow.isFailed, "Funds already returned to payer");

        uint256 amount = escrowBalances[escrowId];
        require(amount > 0, "No funds in escrow");

        escrowBalances[escrowId] = 0;
        escrow.isFailed = true; // Mark the escrow as failed

        (bool success, ) = payable(escrow.payer).call{value: amount}("");
        require(success, "Transfer failed");

        emit FundsReturned(escrowId, escrow.payer, amount);
    }

    // Function to get escrow details
    function getEscrowDetails(
        uint256 escrowId
    )
        external
        view
        returns (address, address, uint256, string memory, bool, bool)
    {
        EscrowTransaction storage escrow = escrows[escrowId];
        return (
            escrow.payer,
            escrow.payee,
            escrowBalances[escrowId],
            escrow.order_id,
            escrow.isPaid,
            escrow.isFailed
        );
    }

    // Function to get escrowId based on order_id
    function getEscrowIdByOrderId(
        string memory order_id
    ) external view returns (uint256) {
        uint256 escrowId = orderIdToEscrowId[order_id];
        require(escrowId != 0, "Escrow not found for the given order ID");
        return escrowId;
    }

    // Add this function to the Escrow contract
    function getLatestEscrowId() public view returns (uint256) {
        return escrowCount;
    }

    // Function to allow the contract to receive ETH
    receive() external payable {}

    fallback() external payable {}
}
