// 钱包交易

// 发送eth-创建钱包

const { ethers } = require("ethers");
// glob
const { KEY, SUPER_PASSWORD, SUPER_PASSWORD_ONE_USER } = require("../glob.js");

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
  const wallet2 = new ethers.Wallet(SUPER_PASSWORD_ONE_USER, provider);

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
  function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Timeout exceeded."));
      }, ms);
    });
  }
  // 构造交易请求
  const tx = {
    to: address2,
    value: ethers.parseEther("0.001"),
  };
  console.log(`\nii. 等待交易在区块链确认（需要几分钟）`);

  // 等待 receipt 的同时，限制等待时间为 5 分钟
  try {
    const receipt = await Promise.race([
      wallet1.sendTransaction(tx),
      timeout(5 * 60 * 1000),
    ]);
    await receipt.wait();
    console.log(receipt); // 打印交易详情
  } catch (error) {
    console.log(error);
  }
  //   const receipt = await wallet1.sendTransaction(tx);
  //   await receipt.wait(); // 等待链上确认交易
  //   console.log(receipt); // 打印交易详情

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
