// 七.Event Bubbling
// let a = document.querySelector("div.a");
// let b = document.querySelector("div.b");

// a.addEventListener("click", () =>{
//     alert("a");
// });
// b.addEventListener("click", e =>{
//     e.stopPropagation();
//     alert("b");
// });


// 七.Storage 僅可儲存字串型態資料////////////
// setItem 新增資料存入Storage
// localStorage.setItem("name", "Thor");
// localStorage.setItem("age", 30);
// localStorage.setItem("add", "台中市");

// sessionStorage.setItem("name", "Thor");
// sessionStorage.setItem("age", "25");
// sessionStorage.setItem("add", "台中市");

// getItem 取得Storage 內指定資料
// console.log(localStorage);
// let myName = localStorage.getItem("name");
// console.log(myName);
// let myAge = localStorage.getItem("age");
// console.log(myAge);

// document.write(localStorage.getItem("add"));
// console.log(myAge);
// console.log(typeof myAge);

// let names = ["Thor", "John", "Tom", "Gavin"];
// localStorage.setItem("myNames", names);

// let myName2 = localStorage.getItem("myNames");
// console.log(myName2);
// console.log(typeof myName2);

////////////////////////////////////////////////
// removeItem 刪除Storage 內指定資料
// clear 清空Storage 清空後Storage程式碼應刪除
// localStorage.removeItem("add");
// localStorage.clear();
// sessionStorage.clear();


////////////////////////////////////////////////
let names1 = ["Thor", "John", "Tom", "Gavin"];

/** 1.轉成字串型態 */
let names2 = JSON.stringify(names1);

/** 2.存資料到localStorage */
localStorage.setItem("names", names2);

/** 2.存資料到localStorage & 轉成字串型態 */
// localStorage.setItem("names", JSON.stringify(names1));

/** 3.從localStorage取得資料 */
let myNames1 = localStorage.getItem("names");
console.log(myNames1);
console.log(typeof myNames1);

/** 4.轉成陣列型態 */
let myName2 = JSON.parse(myNames1);
console.log(myName2);

/** 3.&4.myName1轉成陣列型態("names"取得資料) */
// let myNames1 = JSON.parse(localStorage.getItem("names"));
// console.log(myNames1);