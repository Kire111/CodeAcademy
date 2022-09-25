// Zadaca 1 
const user = {
    name : "Stefan",
    lastName : "Stefanov",
    age : 33,
    fullName : function(){
        return this.name + " " + this.lastName;
    }
}


    
   let niza = []
   function toArray (){
   for(let x in user){
   niza += user[x] + " ";};
 
   }

   toArray()
   console.log(niza)
   


// Zadaca 2
let arr = ["kire","ilija","petar"]
var obj = {}; 
function toObject() {
       for (var i = 0; i < arr.length; ++i)
      obj[i] = arr[i];
    return obj;
  }
  toObject()
  console.log(obj)

  //   Zadaca 3
const isEqual = (object1, object2) =>{
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);

    for (let objKey of object1Keys){
        if (object1[objKey] !== object2[objKey])
        return false;
    }
    return true
};


const object1 = {
    firstName: 'Maksim',
    lastName: 'Iliev',
    age: 24
};

const object2 = {
    firstName: 'Kire',
    lastName: 'Iliev',
    age: 24
};
console.log(isEqual(object1, object2));