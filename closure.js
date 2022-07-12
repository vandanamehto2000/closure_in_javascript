// 3 scope in closure
// local scope, global scope, function scope


// var i = 10;
// function show() {
//     var j = 20;
//     document.write(j + "<br>");
//     document.write(i + "<br>")
// }
// show();



function show() {
    var j = "j is a local variable of outer fucntion";
    document.write(j + "<br>");

    function innerFun() {
        var k = "i is a local variable of inner function";
        document.write(k + "<br>");
        document.write(j + "<br>")
    }
    innerFun();
}
show()