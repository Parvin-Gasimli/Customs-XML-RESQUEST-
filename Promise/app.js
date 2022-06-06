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

function createPost(post) {
  return new Promise(function (reslove, rejected) {
    setTimeout(function () {
      posts.push(post);
    //   const error = true;
      if (!error) {
        reslove();
      } else {
        rejected("ERROR:SOMETHING WENT WRONG");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach((element) => {
      output += `<li>${element.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
createPost({ title: "post four", body: "this is 3 posts" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
