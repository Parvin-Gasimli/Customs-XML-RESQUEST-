const posts = [
  {
    title: "post one",
    body: "this is one post",
  },
  {
    title: "post2 two",
    body: "this is one post two",
  },
];

function createPost(post,callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  },2000);
}

function getPosts() {
    setTimeout(function(){
        let output=''
        posts.forEach(element=>{
            output+=`<li>${element.title}</li>`
        })
        document.body.innerHTML=output
    },1000)
}
createPost({title:"post three",body:"this is 3 posts"},getPosts)
createPost({title:"post four",body:"this is 4 posts"},getPosts)