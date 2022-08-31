//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract KaiKeBa is ERC20 {
    address owner;
    bytes32[] public whiteListSymbles;
    mapping(bytes32 => address) public whiteListedTokens;
    mapping(address => mapping(bytes32 => uint256)) public balances;

    event Log(address indexed sender, string message);

    constructor() ERC20("KaiKeBa", "ZGL") {
        owner = msg.sender;
        _mint(msg.sender, 100000 * 10**decimals());
    }

    function whiteListToken(bytes32 symbol, address tokenAddress) external {
        require(msg.sender == owner, "This function is no public");

        whiteListSymbles.push(symbol);
        whiteListedTokens[symbol] = tokenAddress;
    }

    function getWhiteListedToken(bytes32 symbol)
        public
        view
        returns (bytes32)
    {}
}
