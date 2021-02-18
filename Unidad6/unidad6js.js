let editorialsOptions = []

let selectorEditorials = document.getElementById('editorialBookSelector')

// add editorials into selector of Editorials
function addEdit (event) {
  event.preventDefault()

  let newEdit = document.getElementById('newEdit').value

  var option = document.createElement('option')
  var att = document.createAttribute('value')

  editorialsOptions.push(newEdit)

  att.value = "='" + newEdit + "'"

  option.setAttribute('option', newEdit)

  option.innerText = newEdit

  selectorEditorials.appendChild(option)
}

// add ubications of libraries from the city
let ubicationsLibraries = ['Barcelona', 'Madrid', 'Murcia', 'LLeida']
let ubicationsList = document.getElementById('ulUbications')
let counterClicks = 0

let addUbication = function (event) {
  event.preventDefault()
  // dont enable to add more libraries than the array has
  counterClicks++
  if (counterClicks > ubicationsLibraries.length && ubicationsList.childElementCount == ubicationsLibraries.length)
    alert('no hay mas direciones')
  else {
    let liElement = document.createElement('li')
    let nIdsListUbcation = 0

    if (ubicationsList.hasChildNodes())
      nIdsListUbcation = ubicationsList.childElementCount
    // incrementing ids to avoid id = 0 or same id as lentgh of elements
    nIdsListUbcation++

    liElement.setAttribute('id', nIdsListUbcation)

    let nLibraries = Math.floor(Math.random() * ubicationsLibraries.length)
    let selectedLibrary = ubicationsLibraries[nLibraries]
    // avoiding repiting same libraries
    let repetead = false
    if (ubicationsList.hasChildNodes()) {
      // let listOfAddedLibraries = ubicationsList.children

    

      var listOfAddedLibraries = [...ubicationsList.children]

      // console.log(listOfAddedLibraries[0].innerText)
      // let index = listOfAddedLibraries.indexOf({ innerText: selectedLibrary })

      while (listOfAddedLibraries.find(library => library.innerText == selectedLibrary) != undefined) {
        const randomLibraryNumber = Math.floor(Math.random() * ubicationsLibraries.length)
        selectedLibrary = ubicationsLibraries[randomLibraryNumber]
      }

      console.log('Encontrado: ' + selectedLibrary)
     
    }
    liElement.innerText = selectedLibrary;
    ubicationsList.append(liElement)
  }
}

// delete ubications of libraries from the city
let deleteUbication = function (event) {
  event.preventDefault()
  if (ubicationsList.childNodes.length > 0) {
    ubicationsList.lastChild.remove()
    counterClicks--
  }
  else alert('No hi han direccions de libreries!')
}
