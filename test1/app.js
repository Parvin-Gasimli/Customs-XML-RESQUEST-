// document.getElementById("button").addEventListener("click", LoadData);

// function LoadData() {
//   const xhr = new XMLHttpRequest();

// //   xhr.onprogress=function (){
// //       //processing request
// //   }
//   xhr.open("GET", "data.txt", true);
//   xhr.onload = function () {
//     if (this.status === 200) {
//      document.getElementById("output").innerHTML= `<h1>${this.responseText}</h1>`
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
       <li>Name:${customer.name}</li>
       <li>SURNAME:${customer.surname}</li>
       <li>COMPANY:${customer.company}</li>
       <li>PHONE:${customer.phone}</li>
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
