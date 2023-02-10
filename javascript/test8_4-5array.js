//array
let Nums=[10,20,5,3,15];
console.log(Nums);

// for(let i=0;i<Nums.length;i++){
//     if(Nums[i]>5){
//         console.log(Nums[i]);
//     }
// }
// Nums.forEach(function checkNums(num){
//     if(num>5){
//         console.log(num);
//     }
// })

// //簡化function checkNums(num) > function (num) >
// //    (num)=>  >  num=>
// Nums.forEach(num=>{
//     if(num>5){
//         console.log(num);
//     }
// })

// function checkNums(num){
//     if(num>5){
//         console.log(num);
//     }
// }

// Nums.forEach((n, index, arr)=>{
//     if(n>5){
//         console.log(n);
//         console.log(n + "的索引鍵" + index);
//         console.log(arr[2]);
//         //n -> Nums[]值
//         //index -> Nums[index]
//         //arr[]=Nums[index]:arr[0]=10,arr[1]=20,arr[2]=15
//     }
// })

////////////////////////////////////////////////////
// //HTMLCollection
// let myP1=document.getElementsByClassName("second");
// console.log(myP1);

// //NodeList
// let myP2=document.querySelectorAll(".second");
// console.log(myP2);

// //lengh, index,
// //phsh(), pop(), shift(), unshift()

// // Nums.phsh(25);
// console.log(Nums);

// // Nums.phsh(25);
// console.log(myP1);

// // Nums.phsh(25);
// console.log(myP2);


////////////////////////////////////////////////////
// //HTMLCollection
// let myP1=document.getElementsByClassName("second");
// console.log(myP1);
// myP1.forEach(n =>{
//     //getElementsByClassName 不能使用forEach讀取
//     console.log(n);
// })

//NodeList
let myP2=document.querySelectorAll(".second");
console.log(myP2);
myP2.forEach(n =>{
    //forEach讀取
    console.log(n);
})