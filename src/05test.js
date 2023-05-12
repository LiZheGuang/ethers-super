// 钱包交易

// 发送eth-创建钱包

const { ethers } = require("ethers");
// glob
const { KEY, SUPER_PASSWORD } = require("../glob.js");

// key http
const ALCHEMY_MAINNET_URL = KEY;
// RPC
const provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL);

const main = async () => {
  // 利用私钥和provider创建wallet对象
  const privateKey = SUPER_PASSWORD;
  // metakMask
  const wallet1 = new ethers.Wallet(privateKey, provider);
  // 随机
  const wallet2 = new ethers.Wallet(
    "0x79077c65cb80361462062202fce04c80de1c3ebd1033de231b9b595b59b3967c",
    provider
  );

  const address1 = await wallet1.getAddress();
  const address2 = await wallet2.getAddress();
  console.log(`1. 获取钱包地址`);
  console.log(`钱包1地址: ${address1}`);
  console.log(`钱包2地址: ${address2}`);

  // const txCount1 = await provider.getTransactionCount(address1);
  // const txCount2 = await provider.getTransactionCount(address2);

  // console.log(`钱包1发送交易次数: ${txCount1}`);
  // console.log(`钱包2发送交易次数: ${txCount2}`);

    const getBalance1 = await provider.getBalance(address1);
    const getBalance2 = await provider.getBalance(address2);
      console.log(`i. 发送前余额`);
    console.log(`钱包1: ${ethers.formatEther(getBalance1)} ETH`);
    console.log(`钱包2: ${ethers.formatEther(getBalance2)} ETH`);

  // 构造交易请求
  const tx = {
    to: address2,
    value: ethers.parseEther("0.001"),
  };
  console.log(`\nii. 等待交易在区块链确认（需要几分钟）`);
  const receipt = await wallet1.sendTransaction(tx);
  await receipt.wait(); // 等待链上确认交易
  console.log(receipt); // 打印交易详情

  // iv. 打印交易后余额
  console.log(`\niii. 发送后余额`);
  console.log(
    `钱包1: ${ethers.formatEther(await provider.getBalance(address1))} ETH`
  );
  console.log(
    `钱包2: ${ethers.formatEther(await provider.getBalance(address2))} ETH`
  );
};

main();
