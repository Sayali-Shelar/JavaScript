// Q1
let num=[50,60,70,80];
let square=num.map((ele)=>{
    return ele*10
})
console.log(square);

// Q2
// let no=[100,200,300];

// Q3
let ele=[1,2,3,4,5,6];
let even=ele.filter((num)=>{
    return num%2==0;
})
console.log(even);

// Q4
let stud=["Rahul","Amit","Zoya","Priya"]
stud.sort();
console.log(stud);

// Q5
let fru=["Apple","Banana","Mango","Orange"]
console.log(fru.indexOf("Mango"));

// Q6
var car=["Audi","BMW","Mercedes","Toyota"]
console.log(car.includes("BMW"));

// Q7
let numb=[1000,2000,3000,4000]
let sum=numb.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(sum);

// Q8
let Boys=["Rahul","Amit"]
let Girls=["Priya","Zoya"]
let merged=Boys.concat(Girls);
console.log(merged);

// Q9
let str=["Hello","World","Javascript"]
let result=str.join(" ")
console.log(result);

// Q10
let task=["Task1","Task2","Task3"]
let del=task.pop();
let news=task.push("NewTask");
console.log(task);

// Q11
let shif=[10,20,30]
shif.shift();
shif.unshift(5);
console.log(shif);

// Q12
let no1=[10,20,30,40,60]
let res=no1.some((ele)=>{
    return ele > 50
})
console.log(res);

// Q13
let no2=[10,20,30,40]
let res1=no2.every((ele)=>{
    return ele > 0
})
console.log(res1);

// Q14











