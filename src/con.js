// 导入ethers包
// import { ethers } from "ethers";
const { ethers } = require("ethers");
// playcode免费版不能安装ethers，用这条命令，需要从网络上import包（把上面这行注释掉）
// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.2.3/ethers.js";

// 利用ethers默认的Provider连接以太坊网络
// const provider = new ethers.getDefaultProvider()
const ALCHEMY_MAINNET_URL =
  "https://eth-mainnet.g.alchemy.com/v2/ox17p6UGctKVzjsaPkmZMFaxgaEsFL8h";
const providerETH = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL);

const main = async () => {
    console.log("\n2. 查询provider连接到了哪条链");
    const network = await providerETH.getNetwork();
    console.log(network.toJSON());

  //   // 4. 查询 vitalik 钱包历史交易次数
  //   console.log("\n4. 查询 vitalik 钱包历史交易次数");
  //   const txCount = await providerETH.getTransactionCount("vitalik.eth");
  //   console.log(txCount);
  // 7. 给定合约地址查询合约bytecode，例子用的WETH地址
//   console.log("\n7. 给定合约地址查询合约bytecode，例子用的WETH地址");
//   const code = await providerETH.getCode(
//     "0xc778417e063141139fce010982780140aa0cd5ab"
//   );
//   console.log(code);
};
main();
