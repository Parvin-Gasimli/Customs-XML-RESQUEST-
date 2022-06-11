// document.getElementById("button1").addEventListener("click", getText);
// document.getElementById("button2").addEventListener("click", getJson);
// document.getElementById("button3").addEventListener("click", getExternal);

// function getText() {
//   fetch("test.txt")
//     .then(function (res) {
//       return res.text();
//     })
//     .then(function (data) {
//       console.log(data);
//       document.getElementById("output").innerHTML = data;
//     })
//     .catch((err) => console.log(err));
// }

// function getJson() {
//   fetch("https://api.github.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       let output = "";
//       data.forEach((element) => {
//         output += `<img style="width:200px;height:200px;border-radius:12px;margin:10px" src=${element.avatar_url}/>`;
//       });
//       document.getElementById("output").innerHTML = output;
//     })
//     .catch((err) => console.log(err));
// }

// function getExternal() {
//   fetch("https://api.github.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       let outputs = "";

//       data.forEach((element) => {
//         outputs += `<li>${element.login}</li>`;
//       });
//       document.getElementById("output").innerHTML = outputs;
//     })
//     .catch(err=>console.log(err))
// }

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(response=>response.json())
// .then(data=>data)
// .catch(err=>console.log(err))

document.getElementById("button1").addEventListener("click", getData);
function getData() {

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.forEach((data) => {
        output += `

    <li style="color:red"> Name :${data.name}</li>   
    <li style="color:blue"> email ${data.email}</li>
    
    `;
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
