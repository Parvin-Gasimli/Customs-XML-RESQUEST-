// async function myFunc() {
//   const promise = new Promise((reslove, rejected) => {
//     setTimeout(() => reslove("hello"), 1000);
//   });
//   const error = true;
//   if (!error) {
//     return res;
//   } else {
//     await Promise.reject(new Error("something went wrong"));
//   }
//   const res = await promise;
//   return res;
// }

// myFunc()
// .then((res) => console.log(res))
// .catch(err=>console.log(err))

async function getUsers(){
  const response=await fetch("https://jsonplaceholder.typicode.com/posts")
  const data=await response.json()
  return data
}
getUsers().then(user=>console.log(user))