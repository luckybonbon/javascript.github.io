// let body = document.querySelector("body");
// console.log(body.children[5]);
// console.log(body.childNodes);

// let myP=document.querySelector("p.second");
// console.log(myP.parentElement);


///////////////////////////////////////////////
// let body = document.querySelector("body");
// console.log(body.children[5].children[0].children.item(0).href);  //有問題
// console.log(body.childNodes); 

// let myP=document.querySelector("ul > li > a");
// console.log(myP.parentElement.parentElement.children[2].children.item(0).href);


///////////////////////////////////////////////
// let myh1 = document.querySelector("h1#myh1");
// // myh1.innerText="<s>Hello</s>";          //新增/取代標籤內容
// myh1.innerHTML="<s>Hello</s>";             //新增標籤

// let body = document.querySelector("body");
// console.log(body.children[1].innerText);   //查詢標籤內容


/////////////////////////////////////////////
let body = document.querySelector("body");

//<h1>test</h1>
let myH1 = document.createElement("h1");
myH1.innerText = "test";

body.appendChild(myH1);