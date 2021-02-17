let editorialsOptions = [];

let selectorEditorials = document.getElementById("editorialBookSelector");

// add editorials into selector of Editorials
function addEdit(event) {
  event.preventDefault();

  let newEdit = document.getElementById("newEdit").value;

  var option = document.createElement("option");
  var att = document.createAttribute("value");

  editorialsOptions.push(newEdit);

  att.value = "='" + newEdit + "'";

  option.setAttribute("option", newEdit);

  option.innerText = newEdit;

  selectorEditorials.appendChild(option);
}

// add ubications of libraries from the city
let ubicationsLibraries = ["Barcelona", "Madrid", "Murcia", "LLeida"];
let ubicationsList = document.getElementById("ulUbications");
let counterClicks = 0;
let addUbication = function (event) {
  event.preventDefault();
  //dont enable to add more libraries than the array has
  counterClicks++;
  if (
    counterClicks > ubicationsLibraries.length &&
    ubicationsList.childElementCount == ubicationsLibraries.length
  )
    alert("no hay mas direciones");
  else {
    let liElement = document.createElement("li");

    let nIdsListUbcations = 0;
    if (ubicationsList.hasChildNodes())
      nIdsListUbcations = ubicationsList.childElementCount;
    //incrementing ids to avoid id = 0 or same id as lentgh of elements
    nIdsListUbcations++;

    liElement.setAttribute("id", nIdsListUbcations);

    let nLibraries = Math.floor(Math.random() * ubicationsLibraries.length);

    //avoiding repiting same libraries
    let repetead = false;
    if (ubicationsList.hasChildNodes()) {
      let listOfAddedLibraries = ubicationsList.children;
      
      for (let index = 0; index < listOfAddedLibraries.length; index++   ) {
        if (
          listOfAddedLibraries[index].innerText == ubicationsLibraries[nLibraries]) {
          //listOfAddedLibraries[index].remove();
          console.log(ubicationsLibraries[nLibraries]);
         
          nLibraries = Math.floor(Math.random() * (ubicationsLibraries.length - 0) +0);
          console.log("nuevoValorRandom" + nLibraries);
          repetead == true;
          index=0;
        }
      }

    }
      liElement.innerText = ubicationsLibraries[nLibraries];
      ubicationsList.append(liElement);
    }
  }

// delete ubications of libraries from the city
let deleteUbication = function (event) {
  event.preventDefault();
  if (ubicationsList.childNodes.length > 0) {
    ubicationsList.lastChild.remove();
    counterClicks--;
  }
  else alert("No hi han direccions de libreries!");
};
