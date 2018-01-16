// THIS IS THE TEMPLATE CODE FOR XML
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
  console.log(this.responseText); // log response
  let person4Name = JSON.parse(this.responseText);
  document.getElementById('person4Name').innerText = person4Name.name;

  // must include second request in first function, as you need to fetch info first
  let oReq2 = new XMLHttpRequest();
  oReq2.addEventListener('load', reqListener2);
  oReq2.open('GET', person4Name.homeworld); //person4Name.homeworld will lead to the OG link, if sharing same link
  oReq2.send();
}

function reqListener2() {
  console.log(this.responseText);
  let person4HomeWorld = JSON.parse(this.responseText);
  document.getElementById('person4HomeWorld').innerText = person4HomeWorld.name;
}

// instantiate request for person14Name
let oReq3 = new XMLHttpRequest();
oReq3.addEventListener('load', reqListener3);
oReq3.open('GET', 'https://swapi.co/api/people/14/');
oReq3.send();

function reqListener3() {
  console.log(this.responseText);
  let person14Name = JSON.parse(this.responseText);
  document.getElementById('person14Name').innerText = person14Name.name;

  let oReq4 = new XMLHttpRequest();
  oReq4.addEventListener('load', reqListener4);
  oReq4.open('GET', person14Name.species);
  oReq4.send();
}

function reqListener4() {
  console.log(this.responseText);
  let person14Species = JSON.parse(this.responseText);
  document.getElementById('person14Species').innerText = person14Species.name;

}

//get all films
let oReq5 = new XMLHttpRequest();
oReq5.addEventListener('load', reqListener5);
oReq5.open('GET', 'https://swapi.co/api/films/');
oReq5.send();

function reqListener5() {
  console.log(this.responseText);

}

let film = document.createElement('li');
film.className = 'film';
document.getElementById('filmList').appendChild(film);

let filmTitle = document.createElement('h2');
filmTitle.className = 'filmTitle';
document.getElementById('film').appendChild(filmTitle);

let filmPlanets = document.createElement('ul');
filmPlanets.class


