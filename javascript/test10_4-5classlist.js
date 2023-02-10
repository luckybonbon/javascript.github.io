let myP = document.querySelector("p");

// 新增、刪除class ////////////
// myP.classList.add("red");
// myP.classList.add("blue");
// myP.classList.add("red");
// myP.classList.remove("blue");
// myP.classList.remove("bold");
/////////////////////////////


// 新增或移除class ///////////
// myP.classList.toggle("bold");

// let red = () =>{
//     myP.classList.toggle("red");
// }
/////////////////////////////


// console.log查詢class
// console.log(myP.classList);
// console.log(myP.classList.contains("red"));
// console.log(myP.classList.contains("blue"));


// console.log查詢指定屬性
// let a = document.querySelector("a");
// console.log(a.getAttribute("title"));
// console.log(a.getAttribute("target"));

// let img = document.querySelector("img");
// console.log(img.getAttribute("width"));


// console.log查詢 document section 範圍資料
let section = document.querySelector("section");
let redP1 = document.querySelectorAll("p.red");
let redP2 = section.querySelectorAll("p.red");

console.log(redP1);
console.log(redP2);

// js設定屬性 
let myH1 = document.querySelector("h1");
myH1.style.color = "red";
myH1.style.backgroundColor = "yellow";
myH1.style = "background-color: blue; color: yellow;";
// window.addEventListener console.log瀏覽網頁時觸發事件
// 六.Event
window.addEventListener("click", e => {
    console.log(e);
});

