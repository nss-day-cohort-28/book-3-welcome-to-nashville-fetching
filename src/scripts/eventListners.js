const restDropDown= document.getElementById("restaurant-dropdown")
const parksDropDown= document.getElementById("parks-dropdown")
const eventsDropDown= document.getElementById("events-dropdown")
const concertsDropDown= document.getElementById("concerts-dropdown")
const restButton= document.getElementById("restaurants-go")
const parksButton= document.getElementById("parks-go")
const eventsButton= document.getElementById("events-go")
const concertsButton= document.getElementById("concerts-go")

let restTarget = document.getElementById("restaurant-list");

restButton.addEventListener("click", () => {
    console.log(restDropDown.value)
    let restResult = getRestaurants(restDropDown.value)
    .then(res => {
        console.log(res)
        restTarget.appendChild(res);
    })
    // console.log(restResult)
    // restTarget.innerHTML = restResult;
})

parksButton.addEventListener("click", () => {
    console.log (parksDropDown.value)
})

eventsButton.addEventListener("click", () => {
    console.log (eventsDropDown.value)
})

concertsButton.addEventListener("click", () => {
    console.log (concertsDropDown.value)
})