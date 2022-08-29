let common = {
    selector: function (name) {
        return document.querySelector(name);
    },
}

// function Btn(color, title) {
//     this.color = color;
//     this.title = title;
// }
// Btn.prototype.toHtml = function () {
//     return '<div class="btn btn-' + this.color + '">' + this.title + '</div>';
// }
function Btn(btn) {
    this.color = btn.getAttribute("color");
    this.title = btn.getAttribute('title');
}
Btn.prototype.toHtml = function () {
    return '<div class="btn btn-' + this.color + '">' + this.title + '</div>';
}