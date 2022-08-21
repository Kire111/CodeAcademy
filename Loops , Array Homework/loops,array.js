// Vo ovoj slucaj koga sakame da izbrisime element od niza bez indeks , ja koristime funkcijata indexOf , ja staiv vo variabla za
//  da moze i da go smenime brojot da se izbrise toj broj sto ke go napiseme.
niza = [111,222,333,444,555,666]
broj = 333
function removeNumber(niza, broj) {
    let brisi = niza.indexOf(broj);
    niza.splice(brisi, 1);
    return niza;
  }
  console.log(removeNumber(niza, broj));
// Vo ovaa zadaca za da izbroime kolku cifri ima eden broj go delime so 10 , fakticki so toa sekogas kakov i da e brojot pri
//  delenjeto mu se namaluva po edna cifra .
// Nie ustvari vo ovoj sluca so loop broime kolku pati ke se izvrsi taa operacija koga ke prestane , znaeme kolku cifri ima brojot
const numberOfDigits = (n) => {
    let result = 0;
  
    while (n > 0) {
      n = Math.floor(n / 10);
      result++;
    }
  
    return result;
  }
  console.log(numberOfDigits(123365))

// // Kreirame nova varijabla ednakva na nula , i zadavame ako e pomalo od elementot vo nizata ,
//  togas vrednosta na elementot od nizata stavi go vo taa nova varijabla
let niza1 = [22, 453, 2221, 1233, 745, 556, 2236];
let najgolemBroj = 0;
for (let i = 0; i < niza1.length; i++) {
  if (najgolemBroj < niza1[i]) {
    najgolemBroj = niza1[i];
  }
}
console.log(najgolemBroj);



