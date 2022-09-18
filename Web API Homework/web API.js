// function validation() {
//     let text = "";
//     let a = document.getElementById("name");
//     let b = document.getElementById("lastname");
//     let c = document.getElementById("email");
//     let d = document.getElementById("phone");
//     let e = document.getElementById("password");
    
   
//     if(a.validity.patternMismatch){
//         text = 'Pattern is not matched';
//         document.getElementById("na").innerHTML = text;
//     }else{
//         document.getElementById("na").innerHTML = "Input is OK"
//     }
    
    
//     if(b.validity.patternMismatch){
//         text = 'You miss something';
//         document.getElementById("ln").innerHTML = text;
//     }else{
//         document.getElementById("ln").innerHTML = "Input is OK"
//     }
    
    
//      if(c.validity.patternMismatch){
//         text = 'You miss something';
//         document.getElementById("em").innerHTML = text;
//     }else{
//         document.getElementById("em").innerHTML = "Input is OK"
//     }
    
    
//      if(d.validity.patternMismatch){
//         text = 'Pattern is not matched';
//         document.getElementById("ph").innerHTML = text;
//     }else{
//         document.getElementById("ph").innerHTML = "Input is OK"
//     }
    
    
//      if(e.validity.patternMismatch){
//         text = 'Pattern is not matched';
//         document.getElementById("pas").innerHTML = text;
//     }else{
//         document.getElementById("pas").innerHTML = "Input is OK"
//     }
    
   
  
// } 
// function submit(){
// validation()}
// Za pomalku kod zadacava mislam deka moze da ja resime i so loop , bi izgledalo vaka =>
function validation (){
    let a = document.getElementsByTagName('input');
    let b = document.getElementsByTagName('div');
    for(let i = 0 ; i <= a.length;i++ ){
        if (a[i].validity.paternMismatch){
            b[i].innerHTML= "Input OK" 
        }else{b[i].innerHTML= "Not OK"}
    }
}
function submit(){
    validation()}
    //  Zadaca 2 
    function storage() {
        let godini = prompt("Enter your age");
        let ime = prompt("Your full name");
        localStorage.setItem("age", godini);
        sessionStorage.setItem("name", ime);
      }
    //   Zadaca 3 
      async function Fetchtext (){
        let text1 = await fetch("wikipedia1.txt") .then ((text1) => text1.text());
        let text2 = await fetch("wikipedia2.txt") .then ((text2) => text2.text());
        if(text1>text2){
            console.log(text1)
        }else{console.log(text2)}
      }
      Fetchtext();