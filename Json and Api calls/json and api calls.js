// Zadaca 1
let postObj = { 
    id: 1, 
    name: "Kire", 
    lastname: "Zlatkovski"
}
 
let post = JSON.stringify(postObj)
 
const url = "https://jsonplaceholder.typicode.com/posts"
let xhr = new XMLHttpRequest()
 
xhr.open('POST', url, true)
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
xhr.send(post);
 
xhr.onload = function () {
    if(xhr.status === 201) {
        console.log("Post successfully created!") 
    }
}

// Zadaca 2 

const firstTable = document.getElementById("postFirstTen");


fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("tr");
      row.innerHTML = JSON.stringify(data[i]);
      firstTable.appendChild(row);
      console.log(data[i]);
                 
    }
  })
  .catch(function (err) {
    console.warn("Request didn't work.", err);
  });
// Zadaca 3
const lastTable = document.getElementById("postLastTen");
function getLastTen() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        lastTen(request.responseText);
      }
    };
    request.send();
  }
  
  function lastTen(data) {
    let objects = JSON.parse(data);
      for (let i = objects.length - 1; i > objects.length - 11; i--) {
      let lastRow = document.createElement("tr");
      lastRow.innerText = objects[i].id;
      lastTable.appendChild(lastRow);
    }
  }
  getLastTen()
  