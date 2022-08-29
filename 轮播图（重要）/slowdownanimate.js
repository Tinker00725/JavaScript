function animate(obj, end, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(() => {
        let step = (end - obj.offsetLeft >= 0) ? Math.ceil((end - obj.offsetLeft) / 10) : Math.floor((end - obj.offsetLeft) / 10);
        if (obj.offsetLeft == end) {
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + step + "px";
        }
    }, 15);
}
