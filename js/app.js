// function reqListener () {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.google.com");
// oReq.send();


let oReq = new XMLHttpRequest();
// eventListener attached to events and when request is loaded to reqListener
oReq.addEventListener('load', reqListener);
// open the request
oReq.open('GET', 'https://swapi.co/api/people/4/');
// send the request
oReq.send();

// declare function for new reqListener
function reqListener() {
  // console.log(this);
  console.log(this.responseText) // log response
  let person4Name = JSON.parse(this.responseText);
  document.getElementById('person4Name').innerText = person4Name.name;

  // must include second request in first function, as you need to fetch info first
  let oReq2 = new XMLHttpRequest();
  oReq2.addEventListener('load', reqListener2);
  oReq2.open('GET', person4Name.homeworld); //person4Name.homeworld will lead to the OG link
  oReq2.send();
}

function reqListener2() {
  console.log(this.responseText)
  let person4HomeWorld = JSON.parse(this.responseText);
  document.getElementById('person4HomeWorld').innerText = person4HomeWorld.name;
}



// function reqListener() {
//   console.log(this.responseText);

//   let testName = JSON.parse(this.responseText); //converts from string
//   document.getElementById('person4Name').innerText = testName.name;
  
//   var test2 = new XMLHttpRequest();
//   test2.onload = reqListener;
//   test.open('GET', testName.homeworld);
//   test2.send();

// }

// //function getData() {
//   var test = new XMLHttpRequest();
//   test.onload = reqListener;
//   test.open('GET', 'http://swapi.co/api/people/4/');
//   test.send()
// // }

// function reqListener2 () {
//   let testName2 = JSON.parse(this.responseText);
//   document.getElementById('person4HomeWorld').innerText = testName2.name;
// }