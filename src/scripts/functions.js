// element factory


function elementfactory(resultsArray, uniqueUL){
    let ul = document.createElement("ul")
           ul.setAttribute("class", uniqueUL)
            resultsArray.forEach((element) => {
                let li = document.createElement("li")
                li.innerHTML = `${element.name}, ${element.descriptor}`
                ul.appendChild(li)
 })
 uniqueResult = ul
 return ul
}
// // intin factory
// function initfactory(){

// }