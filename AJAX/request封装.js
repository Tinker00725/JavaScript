function Http() {
    let xhr = new XMLHttpRequest();
    let url = 'http://127.0.0.1:8000'
    return {
        request: function (method, _url, data, callback, error) {
            xhr.open(method, url + _url);
            if (method == 'GET') {
                xhr.send()
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(data)
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback()
                } else {
                    error()
                }
            }
        }
    }
}