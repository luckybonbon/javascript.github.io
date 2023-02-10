// let student = ["David","Lily","Perry","Lucky"];
// document.write("<table border='1'><tr><td>編號</td><td>姓名</td></tr>");
// for(let i=0;i<student.length;i++){
//     document.write("<tr><td>"+(i+1)+"</td><td>"+student[i]+"</td></tr>");
// }
// document.write("</table>");

// document.write("<table border='1'><tr><td>編號</td><td>姓名</td></tr>");
// // i in student -> i起始為0字串 轉數字 Number(i) -> 才可以計算 (i+1)
// for(i in student){
//     document.write("<tr><td>"+(Number(i)+1)+"</td><td>"+student[i]+"</td></tr>");
// }
// document.write("</table>");
////////////////////////////////////////////////////

// let student = new Array();
// student[0]=["David","95","80"];
// student[1]=["Lily","82","85"];
// student[2]=["Perry","90","92"];
// document.write("<table border='1'><tr><td>座號</td><td>姓名</td><td>國文</td><td>英文</td></tr>");
// for(i in student){
//     document.write("<tr><td>"+ (Number(i)+1) + "</td>");
//     for(j in student){
//         document.write("<td>"+ student[i][j] + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");

////////////////////////////////////////////////////

let student=["David","Lily","Perry","Lucky"];
console.log(student);
console.log(student.length);

// student.pop();
// console.log(student);

// student.push("Tom");
// console.log(student);

// student.shift();
// console.log(student);

// student.unshift("Lucky");
// console.log(student);

// console.log(student.slice(0,3));
// console.log(student);

// //            起始 刪除數 新增內容1 新增內容2
// student.splice(1, 2, "dd", "ee");
// // student.splice(2);  //保留數
// console.log(student);


// let students = {
//     name1: "David",
//     name2: "Leo",
//     name3: "John",

//     //sayHi() = sayHi:function() 簡寫
//     sayHi(){
//         console.log("Hi!");
//     },
//     sayHello: function(){
//         console.log("Hello!");
//     }
// }
// document.write(students.name1+ "<br>"+ students.name2+ "<br>");
// document.write(students["name1"]);

// students.sayHi();
// students.sayHello();


function Person(name,age,height,weight){
    this.name=name;
    this.age=age;
    this.height=height;
    this.weight=weight;
    this.sayHi = function(){
        return "你好，我是" + name + "今年" + age + "歲，身高" + height + "公分，體重" + weight + "公斤。";
    }
};
person1=new Person("David", 30, 180, 80);
document.write(person1.sayHi() + "<br>");
person2=new Person("Lily", 25, 175, 60);
document.write(person2.sayHi() + "<br>");
person3=new Person("John", "60", 171, 70);
document.write(person1.sayHi() + "<br>" + person2.sayHi() + "<br>" + person3.sayHi());