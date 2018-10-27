// element factory


let cool = {
    name: "ijo",
    descriptor: "ugly"
}
let dumb = {
    name: "eoij",
    descriptor: "two"
}
    let billy= [cool, dumb]

let restResult;
function elementfactory(resultsArray, uniqueUL){
           let ul = document.createElement("ul")
           ul.setAttribute("class", uniqueUL)
            resultsArray.forEach((element) => {
                let li = document.createElement("li")
                let saveButton= document.createElement("button")
                saveButton.setAttribute("class", "saveResult")
                saveButton.textContent = "Add to Itin"
                // let buttonText = document.createTextNode("Add to Itin")
                // saveButton.appendChild(buttonText)
                li.innerHTML = `${ element.name} , ${element.descriptor}`
                li.appendChild(saveButton)
                ul.appendChild(li)
 })
 console.log(ul)
 // if this stays, will need to put it inside loop to set to zero every time or it will keep adding to the list
 restResult = "";
 restResult = ul;
 return ul
}




// // intin factory
// function initfactory(){

// }