// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    struct EscrowTransaction {
        address payer;
        address payee;
        uint256 amount;
        bool isPaid;
    }

    mapping(uint256 => EscrowTransaction) public escrows;
    mapping(uint256 => uint256) public escrowBalances;
    uint256 public escrowCount;
    address public appWallet;

    event EscrowStarted(uint256 indexed escrowId, address payer, address payee, uint256 amount);
    event EscrowReleased(uint256 indexed escrowId, address payee, uint256 amount);
    event FundsReturned(uint256 indexed escrowId, address payer, uint256 amount);

    constructor() {
        appWallet = msg.sender;
        escrowCount = 0;
    }

    // Function to start an escrow transaction
    function startEscrow(address _payee, uint256 _amount) external payable {
        require(_amount > 0, "Escrow amount should be greater than zero");
        require(msg.value == _amount, "Sent value does not match the specified amount");
        
        uint256 escrowId = escrowCount;
        escrows[escrowId] = EscrowTransaction({
            payer: msg.sender,
            payee: _payee,
            amount: _amount,
            isPaid: false
        });

        // Store the sent amount in the escrow balance
        escrowBalances[escrowId] = _amount;

        escrowCount++;

        emit EscrowStarted(escrowId, msg.sender, _payee, _amount);
    }

    // Function to release ETH from escrow to the payee
    function releaseEscrow(uint256 escrowId) external {
        EscrowTransaction storage escrow = escrows[escrowId];
        require(msg.sender == appWallet, "Only app wallet can release funds");

        uint256 amount = escrowBalances[escrowId];
        require(amount > 0, "No funds in escrow");
        require(address(this).balance >= amount, "Insufficient contract balance");

        // Transfer funds from contract to payee
        (bool success, ) = payable(escrow.payee).call{value: amount}("");
        require(success, "Transfer success");
        escrowBalances[escrowId] = 0;
        escrow.isPaid = true;
        
        emit EscrowReleased(escrowId, escrow.payee, amount);
    }

    // Function to return ETH from escrow to the payer
    function returnFunds(uint256 escrowId) external {
        EscrowTransaction storage escrow = escrows[escrowId];
        
        require(msg.sender == appWallet, "Only app wallet can return funds");
        require(!escrow.isPaid, "Funds already released");
        
        uint256 amount = escrowBalances[escrowId];
        require(amount > 0, "No funds in escrow");

        escrowBalances[escrowId] = 0;

        // Transfer funds from contract to payer
        (bool success, ) = payable(escrow.payer).call{value: amount}("");
        require(success, "Transfer failed");

        emit FundsReturned(escrowId, escrow.payer, amount);
    }

    // Function to get escrow details
    function getEscrowDetails(uint256 escrowId) external view returns (address, address, uint256, bool) {
        EscrowTransaction storage escrow = escrows[escrowId];
        return (escrow.payer, escrow.payee, escrowBalances[escrowId], escrow.isPaid);
    }

    // Function to allow the contract to receive ETH
    receive() external payable {}
}
