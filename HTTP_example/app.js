const http = new esayHTTP();
http.get("https://jsonplaceholder.typicode.com/posts", function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

const data = {
  title: "salam",
  body: "I'm WEB DEVELOPER IS AZE",
 
};
// http.post(
//   `https://jsonplaceholder.typicode.com/posts`,
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// http.update("https://jsonplaceholder.typicode.com/posts/1",data,function(err,update){
//     if(err){console.log(err)}
//     else{console.log(update)}
// })

http.delete("https://jsonplaceholder.typicode.com/posts/1",function(err,update){
    if(err){console.log(err)}
    else{console.log(update)}
})

