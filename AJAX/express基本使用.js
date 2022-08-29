//1.引入express 
const { application, request, response } = require('express');
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 请求报文的封装
//response 相应报文的封装
app.get('/',(request,response)=>{
    //设置响应
    response.send('HELLO EXPRESS')
})

//4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经起动，8000 端口监听中...')
})
