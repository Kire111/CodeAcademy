let names ="Kire";
let age = 27;
let job = "Geodetic Engineer";
let gender = "male";
let residence = "Skopje";


let kire={
    name : names,
    kireAge:age,
    kireJob:job,
    kireGender:gender,
    kireResidence:residence,
 }
   console.log(kire)
   

    let element = document.getElementById("btn")
    // Napraviv varijabla element da mi bide id od html i na taa varijabla i staviv alert 
    
    element.addEventListener('click',function(){
        alert(JSON.stringify(kire, null, 4));
    })
    //  Go iskoristiv ova JSOn.strigfy za da mi go prikaze na alert cel object