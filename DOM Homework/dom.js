// Zadaca 1
function addRow() {
    
    let table = document.getElementById("myTable");
    let row = table.insertRow(-1); // We are adding at the end
 
    // Create table cells
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
   
    c1.innerText = "4"
    c2.innerText = "Stefan"
    c3.innerText = "Skopje"
    c4.innerText = "35"
 }
 addRow();

 // Zadaca 2

let list = document.querySelector(".first");
let second = list.nextElementSibling;
second.style.color = "pink";
let third = second.nextElementSibling;
third.style.color = "blue";


// Zadaca 3
let x = document.querySelectorAll("li");
for (let i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "green";
}

// Zadaca 4 
let nameValue = document.getElementById("name");
let lastNameValue = document.getElementById("lastName");
document.querySelector("#form").addEventListener("submit", function (a) {
  a.preventDefault();
  console.log(nameValue.value, lastNameValue.value);
});
   

// ????????
// document.querySelector("button").addEventListener("click", function () {
//     let x = document.getElementById("name").value;
//     let y = document.getElementById("lastName").value;
//     document.getElementsById("first").innerHTML = `${x} ${y}`;
//   });
