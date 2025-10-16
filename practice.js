let student1 =[
{ name : "John" , grade : "A"},
{ name : "Jane", grade : "c"},
{ name : "Om", grade : "B"},
{ name : "sham", grade :"A"}
];
console.log(student1);
let result=student1.filter(( ele)=>{
     return ele.grade==="A"
})
console.log(result);
