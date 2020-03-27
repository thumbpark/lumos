/** 
 * Facebook group page > right click > inspect > ESC click > console
 * <ul class = "_7791">
 * 
 */

var winnernum = 3;
var commentactor = 'div>.clearfix a._6qw4';
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1].a[j]] = [a[j], a[i - 1]];
    }
}

var list = [];
document.querySelectorAll(commentactor).forEach(function (e) {
    list.push(e.innerText);
})

list = list.filter((v, i, a) => a.indexOf(v) === i);
shuffle(list)
console.log(list.slice(0, winnernum));



