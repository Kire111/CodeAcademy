

function validationForm() {
    let form = document.getElementById("form");
  
    document.getElementById("button").addEventListener("click", function () {
      if (
        document.querySelector(
          ".name",
          ".lastname",
          ".email",
          ".phone",
          ".adress",
        ).value == ""
      ) {
        alert("Please Fill All Required Field");
      } else {
        alert("OK");
      }
      form.submit();
    });
  }
  validationForm();
  
  // 2
  
  
  document.querySelector(".name").onblur = function () {
    if (document.querySelector(".name").value == "") {
      document.querySelector(".eventName").innerHTML = "Please fill fields";
    }
  };
  
  document.querySelector(".name").onfocus = function () {
    if (document.querySelector(".name").value == "") {
      document.querySelector(".eventName").innerHTML = "Please fill fields";
    }
  };
  document.querySelector(".name").addEventListener("keydown", function () {
    document.querySelector(".eventName").innerHTML = "";
  });
  
  // Tuka mora da napravime globalna funkcija bidejki onblur i onfocus se za eden element
  function blur() {
    if (document.querySelector(".name").value == "") {
      document.querySelector(".eventName").innerHTML = "Please fill fields";
    }
    if (document.querySelector(".lastname").value == "") {
      document.querySelector(".eventLastname").innerHTML = "Please fill fields";
    }
    if (document.querySelector(".email").value == "") {
      document.querySelector(".eventEmail").innerHTML = "Please fill fields";
    }
    if (document.querySelector(".phone").value == "") {
      document.querySelector(".eventPhone").innerHTML = "Please fill fields";
    }
    if (document.querySelector(".adress").value == "") {
      document.querySelector(".eventAdress").innerHTML = "Please fill fields";
    }
  }
 //   Pri trganje od fokus da se brise eventot 
  document.querySelector(".name").addEventListener("focus", function () {
    document.querySelector(".eventName").innerHTML = "";
  });
  document.querySelector(".lastname").addEventListener("focus", function () {
    document.querySelector(".eventLastname").innerHTML = "";
  });
  document.querySelector(".email").addEventListener("focus", function () {
    document.querySelector(".eventEmail").innerHTML = "";
  });
  document.querySelector(".phone").addEventListener("focus", function () {
    document.querySelector(".eventPhone").innerHTML = "";
  });
  document.querySelector(".adress").addEventListener("focus", function () {
    document.querySelector(".eventAdress").innerHTML = "";
  });
  
   //   Pri pisuvanje vo poleto da se brise eventot .
  function key() {
    document.querySelector(".eventName").innerHTML = "";
    document.querySelector(".eventLastname").innerHTML = "";
    document.querySelector(".eventAddress").innerHTML = "";
    document.querySelector(".eventGender").innerHTML = "";
    document.querySelector(".eventEmail").innerHTML = "";
  }
  
  // 3
  
  let count = 0;
  
  document.querySelector(".name").addEventListener("click", function () {
    count++;
    console.log(count);
  });
  
  document.querySelector("#reset").addEventListener("click", function () {
    count = 0;
  });
  console.log(count);