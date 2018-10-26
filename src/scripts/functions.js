// element factory


let cool ={
    name: "ijo",
    descriptor: "ugly"
}
let dumb ={
    name: "eoij",
    descriptor: "two"
}
    let billy= [cool, dumb]


function elementfactory(resultsArray){
        let ul=  document.createElement("ul")    
            resultsArray.forEach((element) => {
                let li = document.createElement("li")
                let saveButton= document.createElement("button")
                saveButton.setAttribute("class", "saveResult")
                li.innerHTML = `${ element.name} , ${element.descriptor} ${saveButton}`
                ul.appendChild(li)

    
 })
 console.log(ul)
 return ul
}
elementfactory(billy)

// // intin factory
// function initfactory(){

// }



