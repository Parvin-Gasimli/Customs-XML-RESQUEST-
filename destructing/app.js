let a,b;
// [a,b]=[10,20]
// [a,b,c,...rest]=[10,20,30,40,50,60]
// ({a,b}={a:100,b:200,c:300,d:400})
// ({c,d, ...rest}={c:1,d:2,e:4,f:5})
// console.log(c);
////array destructing
// const people=["John","Mike","Bane"]
// const[person1,person2,person3]=people;
// console.log(person1,person2,person3);

// function getPeople(){
//     return ['johns',"mike","Don"]
// }

// let person,person4,person5;
// [person,person4,person5]=getPeople()
// console.log(person,person4,person5);


//OBject Destructing

// const person={
//     name:"john Doe",
//     age:34,
//     city:"Miami",
//     gender:"male"
// }
// // //ES 5
// // const name=person.name,
// //                     age=person.age,
// //                     city=person.city,
// //                     gender=person.gender;

// //ES6
//  const  {name,age,city,gender}=person
//  console.log(name,age,city,gender);


//Map ES 6


const map1=new Map()
const key1="some String",key2={},key3= function(){};


map1.set(key1,"value of key1")
map1.set(key2,"value of key2")
map1.set(key3,"value of key3")
console.log(map1.get(key1),map1.get(key2),map1.get(key3));


console.log(map1.size);

//Interating Maps
//lop using for to get key and values
// for (let [key,value] of map1) {
//     console.log(`${key}=${value}`);
// }
// for (let key of map1.keys()) {
//     console.log(`${key}`);
// }
// for (let key of map1.values()) {
//     console.log(`${key}`);
// }


//SETS -Store uniq value of any type
const set1= new Set()
set1.add(100)
set1.add("a string")
set1.add({name:"ali"})
set1.add(true)
set1.add(100)
set1.add(200)
console.log(set1);