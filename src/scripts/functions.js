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


function elementfactory(resultsArray, uniqueUL){
           let ul = document.createElement("ul")
           ul.setAttribute("class", uniqueUL)
            resultsArray.forEach((element) => {
                let li = document.createElement("li")
                let saveButton= document.createElement("button")
                saveButton.setAttribute("class", "saveResult")
                let buttonText = document.createTextNode("Add to Itin")
                saveButton.appendChild(buttonText)
                li.innerHTML = `${ element.name} , ${element.descriptor}`
                li.appendChild(saveButton)
                ul.appendChild(li)
 })
 console.log(ul)
 return ul
}




// // intin factory
// function initfactory(){

// }