// // const user={email:'unknown@gmail.com'}
// // try {
// //     if(!user.name){
// //         throw new SyntaxError("user has no name")

// //     }

// // } catch (error) {
// //     console.log(error);
// // }
// let re;

// re=/hello/
// // re=/hello/i; //i=case insensitive
// // re=/hello/g; //g=Global search
// // console.log(re.source);
// // const result=re.exec('hello world')
// // console.log(result);
// // console.log(result[0]);
// // console.log(result.index);
// // console.log(result.input);

// // const result1=re.test("hello")
// // console.log(result1);

// // //Match
// // const str="hello world"
// // const res=str.match(re)
// // console.log(res);
// // //Search() return index of first match if not found return 1
// // const str1=" Brands  hello World"
// // const res1=str1.search(re)
// // console.log(res1);
// // //replace
// const str=''
// const result=re.exec(str)
// console.log(result);

// function reTest(re,str){
//     if(re.test(str)){
//         console.log(`${str} matched ${re.source}`);
//     }
//     else{
//         console.log(`${str}does Not matched ${re.source}`);
//     }
// }

// console.log(reTest("hello","salam"));

//Form BLUR EVENTS
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName(e) {
    e.preventDefault();
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}
function validateZip(e) {
  e.preventDefault();
  const zip = document.getElementById("zip");
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}
function validateEmail(e) {
  e.preventDefault();
  const email = document.getElementById("email");
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}
function validatePhone(e) {
  e.preventDefault();
  const phone = document.getElementById("phone");
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
