// // Prva zadaca (staveni mi se so dve == bidejki taka go zanemaruva tipot dali e string ili brojka , funkcijata gleda samo dali se ednakvi)
function equalityFunction(parametar1, parametar2, parametar3) {
  if (
    parametar1 == parametar2 ||
    parametar1 == parametar3 ||
    parametar2 == parametar3
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(equalityFunction(9, 4, "4"));

// Vtora zadaca
function daysInMonth(month) {
  month = prompt(`Please enter a month`) * 1;
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return `30 days`;
  } else if (month <= 12 && month !== 2) {     
    // Tuka staviv neednakvo so dva bidejki ke mi go dava 2 mesec deka ima 31 den i nema da mi raboti poseledniot if.
    return `31 days`;
  }
  if (month === 2) {
    let years = prompt(`Please enter  year`) * 1;
    if (years % 4 === 0) {
      return `28 days`;
    } else {
      return `29 days`;
    }
  }
  else{
    return `Your number is invalid , please try again !!!`
  }
}
console.log(daysInMonth());
