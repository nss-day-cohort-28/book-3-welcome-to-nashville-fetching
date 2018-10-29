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

// this works - we can toy with placement and potentially add a CSS class for green background
const successAlert = (divTarget) => {
    const successTarget = document.getElementById(`${divTarget}`)
    let paragraph = document.createElement('p')
    paragraph.innerText = "Your selection was added!"
    successTarget.appendChild(paragraph)
    setTimeout(function(){
        successTarget.innerText = ''
    }, 2500)
}

const savedAlert = () => {
    const savedTarget = document.getElementById("save-success")
    let paragraph = document.createElement('p')
    paragraph.innerText = "Your itinerary has been saved!"
    savedTarget.appendChild(paragraph)
    setTimeout(function(){
        savedTarget.innerText = ''
    }, 2500)
}