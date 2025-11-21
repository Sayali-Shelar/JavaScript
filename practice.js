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

let tempCelsius = 30;
if (tempCelsius < 0) {
    console.log("It's freezing!");
} else if (tempCelsius >= 0 && tempCelsius <= 20) {
    console.log("It's cold.");
} else if (tempCelsius > 20 && tempCelsius <= 30) {
    console.log("It's warm.");
} else {
    console.log("It's hot.");
}




let char = 'E';

if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' ||
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(char + " is a vowel.");
} else {
