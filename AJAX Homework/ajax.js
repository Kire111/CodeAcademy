// Zadaca 2
function ajaxXML() {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts");
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4) {
        document.getElementById("fetchData").innerHTML = "You made this";
      }
    };
    ajax.send();
  }

//   Zadaca 1
let xmlData = "";
  let tableData = document.getElementById("tableData");
  function fetchXML(){
  fetch("gethint.xml")
    .then((response) => response.text())
    .then((xml) => {
      xmlData = xml;
      let parser = new DOMParser();
      let xmlExtract = parser.parseFromString(xmlData, "application/xml");
      let artist = xmlExtract.getElementsByTagName("ARTIST");
      let title = xmlExtract.getElementsByTagName("TITLE");

      for (let i = 0; i < artist.length; i++) {
        let tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerHTML = artist[i].childNodes[0].nodeValue;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = title[i].childNodes[0].nodeValue;
        tr.appendChild(td);

        tableData.children[1].appendChild(tr);
      }
    })}

    