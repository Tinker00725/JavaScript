const express = require('express')//引入express 加载依赖包
const app = express();//创建服务器
const port = 3000;//定义端口

app.get('/', (request, response) => {
    response.send('Hello world')
})

app.listen(port, () => {//监听端口
    console.log('正在监听:' + port)
})