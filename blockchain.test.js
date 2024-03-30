// __tests__/blockchain.test.js  
  
const Blockchain = require('../src/blockchain');  
  
describe('Blockchain', () => {  
  let blockchain;  
  
  beforeEach(() => {  
    blockchain = new Blockchain();  
  });  
  
  it('should initialize with a genesis block', () => {  
    expect(blockchain.chain.length).toBe(1);  
    expect(blockchain.getLatestBlock().data).toBe('Genesis Block');  
  });  
  
  it('should add a new block to the chain', () => {  
    const data = 'New block data';  
    blockchain.addBlock(data);  
    expect(blockchain.chain.length).toBe(2);  
    expect(blockchain.getLatestBlock().data).toBe(data);  
  });  
  
  it('should validate a valid chain', () => {  
    expect(blockchain.validateChain()).toBe(true);  
  });  
});