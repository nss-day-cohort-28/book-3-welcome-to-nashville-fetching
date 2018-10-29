// element factory


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
                li.innerHTML = `${element.name}, ${element.descriptor}`
                li.appendChild(saveButton)
                ul.appendChild(li)
 })
//  console.log(ul)
 uniqueResult = ul
 return ul
}




// // intin factory
// function initfactory(){

// }

// this works - we can toy with placement and potentially add a CSS class for green background
const successAlert = () => {
    let paragraph = document.createElement('p')
    paragraph.innerText = "Your event was added!"
    const successTarget = document.getElementById("success-container")
    // successTarget.innerText = div
    successTarget.appendChild(paragraph)
    setTimeout(function(){
        successTarget.innerText = ''
    }, 3000)
}