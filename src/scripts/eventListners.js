const restDropDown= document.getElementById("restaurant-dropdown")
const parksDropDown= document.getElementById("parks-dropdown")
const eventsDropDown= document.getElementById("events-dropdown")
const concertsDropDown= document.getElementById("concerts-dropdown")
const restButton= document.getElementById("restaurants-go")
const parksButton= document.getElementById("parks-go")
const eventsButton= document.getElementById("events-go")
const concertsButton= document.getElementById("concerts-go")

let restTarget = document.getElementById("restaurant-list");
// let restResult;

restButton.addEventListener("click", () => {
    getRestaurants(restDropDown.value).then(res => {
        console.log("inside promise")
        // restResult = res;
        console.log("after attempt")
        restTarget.append(restResult)
    })
    console.log("after promise")
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