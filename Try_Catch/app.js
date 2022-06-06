// const user={email:'unknown@gmail.com'}
// try {
//     if(!user.name){
//         throw new SyntaxError("user has no name")
       
//     }
    
// } catch (error) {
//     console.log(error);
// }
let re;

re=/hello/
// re=/hello/i; //i=case insensitive
// re=/hello/g; //g=Global search
// console.log(re.source);
// const result=re.exec('hello world')
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// const result1=re.test("hello")
// console.log(result1);

// //Match
// const str="hello world"
// const res=str.match(re)
// console.log(res);
// //Search() return index of first match if not found return 1
// const str1=" Brands  hello World"
// const res1=str1.search(re)
// console.log(res1);
// //replace
const str=''
const result=re.exec(str)
console.log(result);

function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`);
    }
    else{
        console.log(`${str}does Not matched ${re.source}`);
    }
}

console.log(reTest("hello","salam"));