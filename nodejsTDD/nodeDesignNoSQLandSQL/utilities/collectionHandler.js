const a = "helloWorld";
const b = a.split("");
const reverseB = b.reverse().join("");

const myMap = new Map();
myMap.set('name', 'ChatGPT');
myMap.set('language', 'JavaScript');
myMap.set('year', 2025);

const mySet = new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add('cherry');
mySet.add('cherry');
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray =[...new Set(array)];

const newB = array.reduce((a,b)=>{
  return a*b;
},1);
console.log(newB);

const concactB = array.concat([21,22]);
const sortArray = array.sort((a,b)=>{return b-a;});
