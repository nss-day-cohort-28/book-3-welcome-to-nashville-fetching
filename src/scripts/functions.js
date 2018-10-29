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
const successAlert = () => {
    const successTarget = document.querySelector(".success-msg")
    let paragraph = document.createElement('p')
    paragraph.innerText = "Your event was added!"
    successTarget.appendChild(paragraph)
    setTimeout(function(){
        successTarget.innerText = ''
    }, 2500)
}