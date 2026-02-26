const express = require('express');
const app = express();
const port = 3000;

// 允许跨域访问
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// 测试接口
app.get('/api/gujie', (req, res) => {
  res.send('蛊界服务器运行正常！');
});

app.listen(port, () => {
  console.log(`蛊界服务器运行在 http://localhost:${port}`);
});

