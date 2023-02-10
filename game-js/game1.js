/**
 * Math.PI
 * Math.pow(a,b) a的b次方
 * Math.random() 0-1之間的數字
 * Math.sqrt(x)  x的平方根
 * Math.abs(-x)  絕對值
 * Math.floor()  取整數(無條件捨去)
 * Math.ceil()   取整數(無條件進位)
 * Math.round()  取整數(四捨五入)
 */

// console.log(Math.PI);
// console.log(Math.pow(2,4));
// console.log(Math.random());
// console.log(Math.sqrt(64));
// console.log(Math.abs(-5));
// console.log(Math.floor(3.54));
// console.log(Math.ceil(3.14));
// console.log(Math.round(3.54));

/**
 * let myButton = document.querySelector("#myButton");
 * myButton.addEventListener("click", () =>{})
 * =================================================>簡化
 * document.querySelector("#myButton").addaddEventListener("click", () =>{})
 * =================================================>簡化
 * document.querySelector("#myButton").onclick = function(){}
 */
document.querySelector("#myButton").onclick = function(){
    let x = Math.random();
    x = x * 4;
    x = Math.floor(x);
    if(x == document.querySelector("#myInput").value){
        alert("恭喜，您猜對了! 這個數字是" + x);
    }
    else{
        alert("您猜錯了，這個數字是" + x);
    }
}