// document.getElementById("button").addEventListener("click", LoadData);

// function LoadData() {
//   const xhr = new XMLHttpRequest();

// //   xhr.onprogress=function (){
// //       //processing request
// //   }
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//   xhr.onload = function () {
//     if (this.status === 200) {
//       const data=JSON.parse(this.responseText)
//      document.getElementById("output").innerHTML= `<li>${data.title}</li>`
//     }
//   };

// //   xhr.onreadystatechange=function(){
// //       if(this.status===200&&this.readyState===4){
// //           console.log(this.responseText);
// //       }
// //   }
// xhr.onerror=function (){
//     console.log("request error...");
// }
//   xhr.send()
// }

document.getElementById("button1").addEventListener("click", getData);
function getData(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customer.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = `
       <ul>
       <li>ID:${customer.id}</li>
       <li>Name:${customer.title}</li>
       <li>SURNAME:${customer.body}</li>
      
       </ul>`;
      document.getElementById("customer").innerHTML = output;
    }
  };
  xhr.send();
}

document.getElementById("button2").addEventListener("click", getDatas);
function getDatas(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customers.js", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let outputs =""
      customers.forEach(customers => {
          outputs+=`
            
          <ul>
          <li>NO ${customers.id} </li>
          <li>NAME ${customers.name} </li>
          <li>SUERNAMECOMPANY ${customers.company} </li>
          <li>PHONE ${customers.phone} </li>
          </ul>
          
          `;
      });
      const data =document.querySelector("#customers")
      data.innerHTML=outputs
    
    
    }
  };
  xhr.send();
}



// document.getElementById("button").addEventListener("click",GetData)
// function GetData(){
//   const xhr=new XMLHttpRequest()
//   xhr.onprogress=function(){
//     xhr.open('GET',"data.txt",true)

//     xhr.onload=function(){
//       if(this.status==200){
//       document.getElementById('output').innerHTML=`<h3>${this.responseText}} </h3>`

//       }
//     }

//   }
//   xhr.send()
// }








