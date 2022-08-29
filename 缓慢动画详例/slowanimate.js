function animate(obj, end,callback) {
    clearInterval(obj.timer);//为了防止疯狂点击带来的多个定时器
    obj.timer = setInterval(function () {
        //使用对象属性的方法给setInterval存入对象中，不开辟新的内存
        if (obj.offsetLeft == end) {
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
            // callback && callback();
        } else {
            let step = (end - obj.offsetLeft) / 10
            if ((end - obj.offsetLeft) / 10 >= 0) {
                obj.style.left = obj.offsetLeft + Math.ceil((end - obj.offsetLeft) / 10) + "px";
            } else {
                obj.style.left = obj.offsetLeft + Math.floor((end - obj.offsetLeft) / 10) + 'px';
            }
            //原来的位置（加了步长之后的）加上步长值 加入向上取整函数保证超过目标值
        }
    }, 15)
}