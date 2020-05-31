pragma solidity 0.5.12; //au lieu de pragma solidity ^0.5.12;
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Crowdsale {
	using SafeMath for uint256;
	
	address public owner; // the owner of the contract
	address payable public escrow; // wallet to collect raised ETH
	
	uint256 public savedBalance = 0; // Total amount raised in ETH
	//address payable public escrow au lieu de address  public escrow
	mapping (address => uint256) public balances; // Balances in incoming Ether
	
	// Initialization
	//function Crowdsale(address _escrow) public{ 
	constructor(address payable _escrow) public { //c'est un constructeur et non une fonction
		owner = smg.sender  //owner = tx.origin; => owner = smg.sender
		// add address of the specific contract
		escrow = _escrow;
	}
	
	// fallback function to receive ETH
	function() payable  public external {
		balances[msg.sender] = balances[msg.sender].add(msg.value);
		savedBalance = savedBalance.add(msg.value);
		//Eviter.send() car il faut ajouter des vérifications au cas où la fonction fail 
		//escrow.send(msg.value);
		escrow.transfer(msg.value);

	}
	
	// refund investisor
	function withdrawPayments() public{
		address payee = msg.sender;
		uint256 payment = balances[payee];
		//Eviter .send() car il faut ajouter des vérifications au cas où la fonction fail
		//payee.send(payment);		
		savedBalance = savedBalance.sub(payment);
		balances[payee] = 0;
		//il faut faire le transfer en dernier
		payee.transfer(payment);
	}
}
