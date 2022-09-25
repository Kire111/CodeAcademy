
// function kicka (a,b,c,d){
// let nedelivi = 0 ;

// for(let i = a ; i<=b;i++){
// if (i%c != 0 && i%d != 0){
//     nedelivi++;
// } 
// }
// // return nedelivi;
// // }
// // console.log(kicka(10,18,4,5));


// function kiree (a,b,niza){
// let kolkuNeSeDelatSoNiza = 0 ;
// niza = [2,5];
// a= 5;
// b= 15;
// for (let i = 0; i <niza.length; i++) {
//        for (let j = a; j<=b ; j++) {
//         if (j % niza[i] != 0 ) {
//             // kolkuNeSeDelatSoNiza++;
//             console.log(niza[i])
//         }
//     }
      
//       }
//    return kolkuNeSeDelatSoNiza;
// }
// console.log(kiree());


// const nov = document.createElement("div");
// nov.setAttribute("style","background-color: red; height:50px ; width:50px");
// document.body.appendChild(nov);
// // function goBack() {
// //     window.history.back()}
// //     history.go(-1);
// //     function goForward() {
// //         window.history.forward()
//       }
 // https://fakestoreapi.com/products
const apiUrls = {
  // here I get all the products
  products: `https://fakestoreapi.com/products`,
  // here i get all the categorys
  category: "https://fakestoreapi.com/products/categories",
};
const div = document.getElementById("apiInfo");

const title = document.getElementById("title");
const image = document.getElementById("image");
const desc = document.getElementById("desc");
const rating = document.getElementById("rating");

async function getData(url) {
  let result = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return result;
}

function renderScreen() {
  getData(apiUrls.products).then((res) => {
    res.forEach((element) => {
      //   let elem = document.createElement("div");
      //   elem.innerHTML = element.title;
      //   div.appendChild(elem);

      //main div
      let elem = document.createElement("div");
      elem.classList.add("container", "display-f-c-c");

      //title div
      let titleNew = document.createElement("div");
      titleNew.classList.add("title", "margin-15-auto", "display-f-c-c");
      titleNew.innerHTML = element.title;
      elem.appendChild(titleNew);

      //image
      let imageNew = document.createElement("img");
      imageNew.classList.add(
        "image",
        "margin-15-auto",
        "height-200-width-300",
        "display-f-c-c"
      );
      imageNew.src = element.image;
      elem.appendChild(imageNew);

      //final step
      console.log("tuka sum ");
      div.appendChild(elem);
    });
  });
  //   getData(apiUrls.category).then((res) => {
  //     res.forEach((element) => {
  //       let elem = document.createElement("div");
  //       elem.innerHTML = element;
  //       div.appendChild(elem);
  //     });
  //   });
}

renderScreen();