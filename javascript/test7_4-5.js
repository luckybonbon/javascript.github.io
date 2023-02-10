// function sayHi(){
//     console.log("Hi");
// }
//setTimeout(sayHi, 3000);  //延遲3s
//setInterval(sayHi, 3000);
// let myInterval = window.setInterval(sayHi, 3000);
// function stop(){
//     clearInterval(myInterval);
// }
// console.log("test");
// console.error("test");
// console.warn("test");


/////////////////////////////////////////////////////////
// let myH1=document.getElementById("first");
// let myH1=document.querySelector("ul");

// console.log(myH1);

// let myP1=document.getElementsByClassName("second");
// let myP2=document.querySelectorAll("#first, .second, a");

// console.log(myP1);
// console.log(myP2);

/////////////////////////////////////////////////////////
// let myA1=document.getElementsByTagName("a");
// for(let i=0;i<myA1.length;i++){
//     console.log(myA1[i].href);
// }
// console.log(myA[2].href);


// querySelectorAll 不是陣列 正確顯示加.item()//////////
// let myA2=document.querySelectorAll("ul > li > a");
// for(let i=0;i<myA2.length;i++){
//     console.log(myA2.item(i).href);
// }
// console.log(myA2.item(3).href);   //myA2.item(3)在ul li外，所以找不到


//////////////////////////////////////////////////////
// querySelectorAll 不是陣列 正確顯示加.item()
// let myA3=document.querySelectorAll("a[target='_blank']");
// for(let i=0;i<myA3.length;i++){
//     console.log(myA3.item(i).href);
// }
// console.log(myA3.item(1).href);


/////////////////////////////////////////////////////
// sayHi("Gavin");

// function sayHi(name){
//     console.log("Hi," + name);
// }

///////////////////////////////////
// Arrow function箭頭函數
let sayHi = (name) =>{
    console.log("Hi," + name);
}

sayHi("Gavin");


////////////////////////////////////////////////////
// let TCNR={
//     name: "勞動部勞動力發展署中彰投分屬",
//     myName(){
//         console.log(this);
//         console.log("TCNR是" + this.name + "。");
//     },
//     address:()=>{
//         console.log(this);
//         console.log(this.name +"是台中市西屯區工業一路100號");
//     }
// }
// TCNR.myName();
// TCNR.address();


