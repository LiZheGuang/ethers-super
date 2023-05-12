// 发送eth-创建钱包
/**
 * 该 示例 创建随机钱包与助记词并提取秘钥
 */

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
  const wallet2 = ethers.Wallet.createRandom();
  const wallet1WithProvider = wallet2.connect(provider);
  const mnemonic = wallet2.mnemonic; // 获取助记词

  // 随机+助记词
  // 从助记词创建wallet对象
  const wallet3 = ethers.Wallet.fromPhrase(mnemonic.phrase);

  const address1 = await wallet1.getAddress();
  const address2 = await wallet2.getAddress();
  const address3 = await wallet3.getAddress(); // 获取地址
  console.log(`1. 获取钱包地址`);
  console.log(`钱包1地址: ${address1}`);
  console.log(`钱包2地址: ${address2}`);
  console.log(`钱包3地址: ${address3}`);

  // 获取助记词

  console.log(`钱包2助记词: ${wallet2.mnemonic.phrase}`);
  console.log(`钱包2私钥: ${wallet2.privateKey}`);
};

main();

/**
 *
 *
 * timber tonight globe result swallow acid discover light senior ranch winner celery
 */
