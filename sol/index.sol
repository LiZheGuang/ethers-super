// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Counter {
    uint256 public count;

    string public _string = "Hello Web3!";

    // Function to get the current count
    function get() public view returns (uint256) {
        return count;
    }

    // Function to increment count by a given amount
    function inc(uint256 amount) public {
        count += amount;
    }

    // Function to decrement count by a given amount
    function dec(uint256 amount) public  {
        count -= amount;
    }

    function printString() public view returns (string memory) {
        return _string;
    }

    // Function to set a new value for _string
    function setString(string memory newString) public {
        _string = newString;
    }

    // Function to get the current value of _string
    function getString() public view returns (string memory) {
        return _string;
    }
}