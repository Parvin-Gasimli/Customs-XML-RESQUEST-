const Jokes = document.querySelector(".get-jokes");
Jokes.addEventListener("click", GetJokes);

function GetJokes(e) {
  e.preventDefault();
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
  
      let output = "";
      if (response.type === "success") {
        response.value.forEach((element) => {
          output += `<li>${element.joke}</li>`;
       
        });
      } else {
        output += `
            <li>Someting went Wrong</li>
            `;
      }
      document.querySelector('.jokes').innerHTML=output
    }
  };
  xhr.send();
}
