let library =[
    {author:'Bill Gates', title:'The road ahead', libraryId:1254},
    {author:'Steve Jobs', title:'Walter Isaacson', libraryId:4264},
    {author:'Suzanne Collins', title:'Mockingjay', libraryId:3245},
];

function compareTitle(a, b) {

    
    const title1 = a.title.toUpperCase();
    const title2 = b.title.toUpperCase();

    let comparison = 0;

    if (title1 > title2) {
        comparison = 1;
    } else if (title1 < title2) {
        comparison = -1;
    }
    return comparison;
}


console.log(library.sort(compareTitle))

    // Ednostaven nacin so .map da gi prikazeme avtorite. 
    let author = library.map(a => a.author);
    console.log(author)
     // Inaku moze i vaka 

function avtori(niza, property) {
    let nizaAvtori = [];
    for (let i=0; i < niza.length ; ++i)
        nizaAvtori.push(niza[i][property]);
    return nizaAvtori;
}

let result = avtori(library, "author");
console.log(result)
// Eden nacin na resavanje
let libraryId = library.filter(function(niza){
    return niza.libraryId === 1254;
})
console.log(libraryId)
// Vtor nacin na resavanje
function id (nizaa){
    let newArray=[]
    for(let i = 0 ;i<nizaa.length; i++){
        if(nizaa[i].libraryId === 1254){
            newArray.push(nizaa[i])
        }
        
    }
    return  newArray;
}
console.log(id(library))

class Car {
    constructor(brand,year,horsepower){
        this.brand = brand;
        this.year = year;
        this.horsepower = horsepower;
    }
    carAge(){
        let date = new Date ();
        return date.getFullYear()- this.year ;
    }
    usersAge(){
            for (let i = 0 ; i<users.length;i++){
            if(users[i].age > 25){
                console.log(`${users[i].fullName} can drive any car`)
            }if (users[i].age < 25 && users[i].age > 18 ){
                console.log( `${users[i].fullName} can only drive cars with max of 105hp`)
            }else 
            console.log( `${users[i].fullName} doesn't have driver license , he can't drive any car !!!`)
        }
    }
    
    }
    // How old is my car ...
    let myCar = new Car ('Passat', 2006);
    console.log(myCar.carAge());
    
    let users =[
            {fullName:'Kire Zlatkovski', age:'29'},
            {fullName:'Goran Apostolov', age:'28'},
            {fullName:'Maks Stefanov', age:'13'},
            {fullName:'Dario Jovanovski', age:'20'},
            {fullName:'Dragan Simeonov', age:'33'},
            {fullName:'Stefan Pandev', age:'23'},
         ];
        //  Users age check ...
        let ageCheck = new Car (users);
        ageCheck.usersAge();


