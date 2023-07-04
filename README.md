# crypto-whale-tracker
This repository contains a script that tracks large transfers of USDC tokens on the Ethereum blockchain. It uses Ethers.js to interact with the blockchain and plays a sound notification whenever a large transfer occurs. The script provides a link to the transaction details on Etherscan for easy monitoring.

# Detailed Description
This repository includes a JavaScript script designed to track large transfers of USDC (USD Coin) tokens on the Ethereum blockchain. The script utilizes the Ethers.js library, which provides a convenient way to interact with the Ethereum network.

The script connects to the Ethereum network using a JSON-RPC provider with the specified URL. It then instantiates a Contract object, representing the USDC token contract, using the contract address and ABI (Application Binary Interface) provided. The ABI includes function definitions and the event definition for the 'Transfer' event.

When executed, the script starts by playing a sound notification to indicate that the whale tracker has been initiated. It retrieves the name of the USDC token using the 'name' function of the contract and displays a message indicating that the tracker is listening for large transfers on that token.

To track the transfers, the script utilizes the event listener provided by Ethers.js. It listens specifically for the 'Transfer' event emitted by the USDC token contract. When a 'Transfer' event is detected, the script plays a sound notification and checks if the transferred amount is equal to or greater than the predefined transfer threshold. If it exceeds the threshold, it logs a message indicating a new whale transfer and provides a link to the transaction details on Etherscan.

The script employs 6 decimal places for USDC amounts (in wei), as specified by the token's standard. It also demonstrates an alternative approach to query filters using the event listener, instead of using Ethers.js query filters.

This repository serves as a starting point for developers interested in building their own whale tracking functionality for USDC tokens on Ethereum. It provides a clear code structure and showcases the integration of Ethers.js with event tracking and sound notifications for enhanced user experience.

Inspired by https://github.com/dappuniversity/whale_tracker
