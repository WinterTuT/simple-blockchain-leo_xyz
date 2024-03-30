# Simple Blockchain NPM Package  
  
[<img src="https://badge.fury.io/js/simple-blockchain-npm-package.svg">](https://badge.fury.io/js/simple-blockchain-npm-package)  
  
这是一个简单的区块链实现的npm包示例。它提供了基本的区块链功能，允许你创建区块，验证区块链的完整性，以及进行其他基本操作。  
  
## 安装  
  
使用npm安装这个包：  
  
```bash  
npm install simple-blockchain-npm-package
使用
在你的JavaScript文件中导入并使用这个包：

const Blockchain = require('simple-blockchain-npm-package');  
  
// 创建一个新的区块链实例  
const blockchain = new Blockchain();  
  
// 添加区块到区块链  
blockchain.addBlock({ data: 'First block data' });  
blockchain.addBlock({ data: 'Second block data' });  
  
// 验证区块链的完整性  
console.log('Is blockchain valid?', blockchain.isValid());  
  
// 获取区块链中的最新区块  
const latestBlock = blockchain.getLatestBlock();  
console.log('Latest block:', latestBlock);
功能
创建新的区块链实例
向区块链中添加新的区块
验证区块链的完整性（检查每个区块的哈希是否正确链接）
获取区块链中的最新区块
（可选）其他自定义功能，如查看区块链中的所有区块，获取特定区块等
测试
这个包包含测试，以确保代码的正确性。你可以使用Jest运行测试：

npm test

贡献
欢迎为这个项目做出贡献！你可以通过提交issue或pull request来报告bug、提出改进建议或添加新功能。

许可证
这个项目使用MIT许可证。有关详细信息，请参阅 LICENSE 文件。


