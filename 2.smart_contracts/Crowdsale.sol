pragma solidity ^0.6.0;

import"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol"
//import"https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol"
import"./ERC20.sol";

contract Crowdsale {
    using SafeMath for uint256;
    
    address public owner; // test owner of the contract
    address payable public wallet; //wallet to collect raised ETH
    uint256 public SavedBalance = 0; //total amount raised in ETH
    ERC20 public token; // token to sale 
    uint256 public rate; // to initialize
    mapping (address => uint256) investisments; // balances in incoming ether
    
    //Events to record new contributions
    event Contribution (
        address _contibutor
        ,uint256 indexed _value
        ,uint256 indexed _tokens
    );
    
    //Events to record 
    event PayEther(
        address indexed _receiver
        ,uint256 indexed _value
        ,uint256 indexed _timestamp
    );
    
    //initilization
    constructor(address payable _wallet) public{
        owner = msg.sender;
        // deploy new instance of ERC20 from Crowdsale
        token = new ERC20();
        // adress of the specific contract
        wallet = _wallet;
    }
    
    //fallback function to receive
    fallback() payable external {
        investisments[msg.sender] = balances[msg.sender].add(msg.value);
        // should tranfer the equivalent token
        token.tranfer(msg.sender)
        //wallet.tranfer(msg.,msg.value*rate);
        //emit.PayEther(wallet,msg.value,now);
    }
    
    //refund investisor
    function withdrawPayments () public {
        address payable payee = msg.sender;
        uint256 payment = investisments[payee];
        
        require(payment !=0);
        require(address(this).balance >=payment);
        
        SavedBalance = SavedBalance.sub(payment);
        balance[payee] = 0;
        
        payee.tranfer(payment);
    }
}
