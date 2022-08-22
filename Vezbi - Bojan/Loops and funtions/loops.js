// 1 . Da se napravi funkcija koja kje presmetuva zbir od elementi vo niza
// da raboti za bilo koja niza
// nizata e [1,5, 7, 12 ,10 ,]
// pr 35
// hit : for loop
function sobiranje (niza){
    let sum = 0;
    for(let i = 0 ; i<niza.length;i++){
        sum += niza[i];
    }
    return sum
}
console.log(sobiranje([1,5, 7, 12 ,10]))

// 2 . Da se napravi funkcija koja kje ni dade koi broevi se duplikati vo niza
// da raboti za bilo koja niza
// niza [ 1 ,2 ,3 ,1, 5, 6,2 ]
// pr : [1 ,2 ]
// Ova e eden nacin so includes 
function duplikati (broevi){
let niza = []
let duplikatNiza = []
    for (let i of broevi){
        if (niza.includes (i*1)){
            duplikatNiza.push(i*1);
        }
        else{
            niza.push(i*1)
        }
     }
     return duplikatNiza;
    }

console.log(duplikati([1 ,2 ,3 ,1, 5, 6,2]))    
// // Ova e drug nacin so dva for loops, namesto includes pravime funkcija sto ja povikuvame podocna .
function include(niza, broj) {
    for (let i = 0 ; i<niza.length;i++){
        if(broj===niza[i]){
            return true;
        }
    }
    return false
}

function duplikat(niza){
    let duplikatNiza =[]
    for (let i = 0 ; i<niza.length; i++){
        for(let j = i+1 ; j<niza.length; j++){
            if(niza[i] === niza[j] && !include(duplikatNiza, niza[j])) {
                duplikatNiza.push(niza[j])
                break
            }
        }
    }
    return duplikatNiza;
}
console.log(duplikat([1 ,2 ,3 ,1, 5, 6,2]))

// 3 . Da se podredat po redosled elementite vo nizata
// da raboti za bilo koja niza
// niza [ 5,3,3,2,1,0]
// pr : [0,1,2,3,3,5]
// posle toa da se izbrisat duplikatite...
// pr [0,1,2,3,5]
// Ovaa zadaca ja resiv so selection sort , pravime funkcija kade sto go barame najmaliot i od ostanatite elementi najmaliot
//  i gi menjaat mestata . Dodeka za brisenje na duplikatite napraviv nova fukcija koja ke mi gi printa samo elementite sto ne se 
//  isti eden do drug , bidejki veke se podredeni logicki e ako imame duplikati da bidat eden do drug .
function selectionSort(niza) {
    for (let i = 0; i<niza.length;i++){
        let najmal = niza[i]
        let najmalJ = i
        for (let j = i; j<niza.length; j++ ){
            if(najmal>niza[j]){
                najmal=niza[j];
                najmalJ=j
            }
        }
        let c = niza[i]
        niza[i] = niza[najmalJ]
        niza[najmalJ] = c
    }
    return niza
}

function sortITrgniDuplikati(niza) {
    niza = selectionSort(niza)
    let nizaBezDuplikati = []
    nizaBezDuplikati.push(niza[0])
    for (let i = 1; i < niza.length; i++) {
        if (niza[i] !== niza[i-1]) {
            nizaBezDuplikati.push(niza[i])
            
        }
    }
        return nizaBezDuplikati
}

console.log(sortITrgniDuplikati([ 5,3,3,2,1,0]))



