const { ethers, Contract } = require('ethers');
const sound = require('sound-play');

const rpcURL = 'https://cloudflare-eth.com/';
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const CONTRACT_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const CONTRACT_ABI = [
  // Existing function definitions...
  // Add the Transfer event definition below
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    type: 'function',
  },
];

const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

// Note: USDC uses 6 decimal places
const TRANSFER_THRESHOLD = 100000000000; // 100,000 USDC (in wei)

const playSound = () => {
  sound.play('ding.mp3').catch(error => {
    console.error('Error playing sound:', error);
  });
};

const main = async () => {
  playSound();
  const name = await contract.name();
  console.log(`Whale tracker started!\nListening for large transfers on ${name}`);

    // Note: not all ERC-20 Tokens index `amount`
    // Use this insted of Ethers.js query filters
    // https://docs.ethers.io/v5/concepts/events/

    contract.on('Transfer', (from, to, amount, data) => {
    playSound();
    if (amount.toNumber() >= TRANSFER_THRESHOLD) {
      console.log(`New whale transfer for ${name}: https://etherscan.io/tx/${data.transactionHash}`);
    }
    console.log(from, to, amount, data);
  });
};

main();
