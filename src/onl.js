// 声明只读合约的规则：
// 参数分别为合约地址`address`，合约ABI `abi`，Provider变量`provider`
// const contract = new ethers.Contract(`address`, `abi`, `provider`);

const { ethers } = require("ethers");
const { KEY } = require("../glob.js");

// 利用Alchemy的rpc节点连接以太坊网络
// 准备 alchemy API 可以参考https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL04_Alchemy/readme.md
const ALCHEMY_MAINNET_URL = KEY;
const provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL);
console.log(ALCHEMY_MAINNET_URL);

// 第1种输入abi的方式: 复制abi全文
// WETH的abi可以在这里复制：https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code
const abiWETH = [
  {
    inputs: [],
    name: "_string",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "dec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "inc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "printString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newString",
        type: "string",
      },
    ],
    name: "setString",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const addressWETH = "0x7107Ea302676cE12d57b91fd6D93604A43c3891b"; // WETH Contract
const contractWETH = new ethers.Contract(addressWETH, abiWETH, provider);

// // 第2种输入abi的方式：输入程序需要用到的函数，逗号分隔，ethers会自动帮你转换成相应的abi
// // 人类可读abi，以ERC20合约为例
// const abiERC20 = [
//   "function name() view returns (string)",
//   "function symbol() view returns (string)",
//   "function totalSupply() view returns (uint256)",
//   "function balanceOf(address) view returns (uint)",
// ];
// const addressDAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract
// const contractDAI = new ethers.Contract(addressDAI, abiERC20, provider);

const main = async () => {
  
  console.log(await contractWETH.printString());
  console.log(await contractWETH.get());


  return;
  // 1. 读取WETH合约的链上信息（WETH abi）
  //   const nameWETH = await contractWETH.name();
  //   const symbolWETH = await contractWETH.symbol();
  //   const totalSupplyWETH = await contractWETH.totalSupply();
  //   console.log("\n1. 读取WETH合约信息");
  //   console.log(`合约地址: ${addressWETH}`);
  //   console.log(`名称: ${nameWETH}`);
  //   console.log(`代号: ${symbolWETH}`);
  //   console.log(`总供给: ${ethers.formatEther(totalSupplyWETH)}`);
  //   const balanceWETH = await contractWETH.balanceOf(
  //     "0x720eA831f6e3785e6d7975f546Bdd79B696937f5"
  //   );
  console.log(`Vitalik持仓: ${ethers.formatEther(balanceWETH)}\n`);

  // 2. 读取DAI合约的链上信息（IERC20接口合约）
  //   const nameDAI = await contractDAI.name();
  //   const symbolDAI = await contractDAI.symbol();
  //   const totalSupplDAI = await contractDAI.totalSupply();
  //   console.log("\n2. 读取DAI合约信息");
  //   console.log(`合约地址: ${addressDAI}`);
  //   console.log(`名称: ${nameDAI}`);
  //   console.log(`代号: ${symbolDAI}`);
  //   console.log(`总供给: ${ethers.formatEther(totalSupplDAI)}`);
  //   const balanceDAI = await contractDAI.balanceOf("vitalik.eth");
  //   console.log(`Vitalik持仓: ${ethers.formatEther(balanceDAI)}\n`);
};

main();
