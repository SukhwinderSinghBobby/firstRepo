let editorialsOptions = [];

let selectorEditorials = document.getElementById("editorialBookSelector");

console.log(newEdit);
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
let addUbication = function (event) {
  event.preventDefault();

  let liElement = document.createElement("li");

  let nIdsListUbcations = 0;
  if(ubicationsList.hasChildNodes()) nIdsListUbcations = ubicationsList.childElementCount;
  //incrementing ids to avoid id = 0 or same id as lentgh of elements
  nIdsListUbcations++;
  
  liElement.setAttribute('id',nIdsListUbcations);
  
  let nLibraries = Math.floor(Math.random() * ubicationsLibraries.length);
  let repeatedLibrary = false;
  //avoiding repiting same libraries
  if (ubicationsList.hasChildNodes()) {
  let listOfAddedLibraries = ubicationsList.children;
  
  //document.getElementsByTagName().innerText;
  
    for (let index = 0; index <= listOfAddedLibraries.length; index++) {
      for (let sub_index = 0; sub_index < index; sub_index++) {
        if (listOfAddedLibraries[index].innerText == ubicationsLibraries[sub_index])


        
        {
          console.log("valor anterior LIBRERIA; "+ubicationsLibraries[nLibraries]);
          index=2
subindex =0

prier li posicio 1 texto = madrid == array 0 == bcn
	  pos 2	texto) == bcn == array 1 == bcn 			
				  
          let valorAnterior = nLibraries;
          //Repeated library ubication, make a new random select
          while(valorAnterior!=nLibraries){
            nLibraries = Math.floor(Math.random() * ubicationsLibraries.length);
          }
                  
          console.log("valor nuevo LIBRERIA; "+ubicationsLibraries[nLibraries]);
        
          
        }   
        
      }
        
      
    }
   
  }

  liElement.innerText = ubicationsLibraries[nLibraries];
  ubicationsList.append(liElement);


};
// delete ubications of libraries from the city
let deleteUbication = function (event) {
  event.preventDefault();
  if(ubicationsLibraries.length > 0 && ubicationsList.childNodes.length>0)
  ubicationsList.lastChild.remove();
  else alert('No hi han direccions de libreries!');
};
