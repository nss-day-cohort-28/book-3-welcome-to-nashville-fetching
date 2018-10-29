const restDropDown= document.getElementById("restaurant-dropdown")
const parksDropDown= document.getElementById("parks-dropdown")
const eventsDropDown= document.getElementById("events-dropdown")
const concertsDropDown= document.getElementById("concerts-dropdown")
const restButton= document.getElementById("restaurants-go")
const parksButton= document.getElementById("parks-go")
const eventsButton= document.getElementById("events-go")
const concertsButton= document.getElementById("concerts-go")

const restTarget = document.getElementById("restaurant-list");
const parkContainer = document.querySelector("#park-list")

const itineraryResults = document.querySelector(".itinerary-list")


restButton.addEventListener("click", () => {
    clearFunction(restTarget)
    getRestaurants(restDropDown.value).then(res => {
        restTarget.append(uniqueResult)})
})

parksButton.addEventListener("click", () => {
    clearFunction(parkContainer)
    let feature = (parksDropDown.value)
    console.log(parksDropDown.value)
    parksApi.fetchParks(feature)
})


eventsButton.addEventListener("click", () => {
    console.log (eventsDropDown.value)
})

concertsButton.addEventListener("click", () => {
    clearFunction(concertContainer)
    concertInt = parseInt(concertsDropDown.value)
    songkickAPI.fetchConcerts(concertInt)
})

// function that clears innerHTML of each result div
// accepts div to clear as argument so we can all use this function
const clearFunction = (divToClear) => {
    divToClear.innerHTML = ""
}

// target generate itinerary button
genItin = document.getElementById("generate-itinerary")

// add event listener to generate itinerary button
genItin.addEventListener("click", () => {
    console.log("generate itin button clicked")
    // needed here:
    // create element from itin (store it in database.json)
    // then append to DOM
})

/*
// target restaurant list
restTarget.addEventListener("click", (event) => {
    // just to show what is being clicked
    // need a way to get out the text content of the button, but this is most of the way there
    console.log(event.target.parentNode.innerText)
})
*/

// target restaurant list V2 - better version
// this will allow us to place EL on the whole UL
// if we agree on this method, we'll need to remove button creation from element factory
// but this cleans up the text so we can get it over to JSON
restTarget.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName == "LI") {
        console.log(event.target.innerText)
    }
})

// Park selection

parkContainer.addEventListener("click", (event) => {
    let br = document.createElement("br")
    if (event.target && event.target.nodeName === "LI") {
        console.log(event.target.innerText)
        itineraryResults.append(`Park: ${event.target.innerText}`)
        itineraryResults.appendChild(br)
    }
 })
