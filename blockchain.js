// src/blockchain.js  
  
class Block {  
  constructor(timestamp, data, previousHash = '') {  
    this.timestamp = timestamp;  
    this.data = data;  
    this.previousHash = previousHash;  
    this.hash = this.calculateHash();  
  }  
  
  calculateHash() {  
    // 简单的哈希计算示例，实际应用中应使用更安全的哈希算法  
    return this.timestamp.toString() + this.data.toString() + this.previousHash.toString();  
  }  
}  
  
class Blockchain {  
  constructor() {  
    this.chain = [this.createGenesisBlock()];  
  }  
  
  createGenesisBlock() {  
    return new Block(Date.now(), 'Genesis Block');  
  }  
  
  getLatestBlock() {  
    return this.chain[this.chain.length - 1];  
  }  
  
  addBlock(data) {  
    const latestBlock = this.getLatestBlock();  
    const newBlock = new Block(Date.now(), data, latestBlock.hash);  
    this.chain.push(newBlock);  
  }  
  
  validateChain() {  
    // 简单的验证示例，检查每个区块的哈希是否连续  
    for (let i = 1; i < this.chain.length; i++) {  
      const currentBlock = this.chain[i];  
      const previousBlock = this.chain[i - 1];  
      if (currentBlock.hash !== currentBlock.calculateHash()) {  
        return false;  
      }  
      if (currentBlock.previousHash !== previousBlock.hash) {  
        return false;  
      }  
    }  
    return true;  
  }  
}  
  
module.exports = Blockchain;