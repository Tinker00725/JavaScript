//1.引入express 
// const { application, request, response } = require('express');
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 请求报文的封装
//response 相应报文的封装
app.get('/server', (request, response) => {

    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    response.send('HELLO AJAX - s')
})
app.post('/server', (request, response) => {

    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    response.send('HELLO AJAX POST')
})

app.all('/json-server', (request, response) => {

    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    let person = {
        name: 'Tinker',
    }
    let str = JSON.stringify(person)
    //设置响应
    response.send(str);
})
app.get('/ie', (request, response) => {

    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应
    response.send("HELLO IE");
})
app.get('/delay', (request, response) => {

    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        response.send("HELLO DELAY");
    }, 1000)
    //设置响应

})
app.all('/jsonp-server', (request, response) => {
    const person = {
        username: "Tinker",
        age: 21
    }
    let str = JSON.stringify(person)
    //设置响应头   设置允许跨域
    response.send(str)

    //设置响应
})
//4.监听端口启动服务
app.listen(8000,()=>{
    console.log('8000端口监听中')
});


let app2 = express();
app2.get("/",function(require,response){
    let funcname = require.query.callback;//解析出URL中的callback
    response.send(funcname+"('你好')")
});
app2.listen(90,()=>{
    console.log('90端口监听中')
})
