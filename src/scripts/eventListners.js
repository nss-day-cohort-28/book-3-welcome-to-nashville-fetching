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
    getRestaurants(restDropDown.value).then(res => {
        restTarget.append(uniqueResult)})
        // .then(res => {uniqueResult = ""}) // added this line - trying to clear out the ul AFTER it appends but not currently working
})

parksButton.addEventListener("click", () => {
    let feature = (parksDropDown.value)
    console.log(parksDropDown.value)
    parksApi.fetchParks(feature)
})


eventsButton.addEventListener("click", () => {
    console.log (eventsDropDown.value)
})

concertsButton.addEventListener("click", () => {
    console.log (concertsDropDown.value)
    concertInt = parseInt(concertsDropDown.value)
    songkickAPI.fetchConcerts(concertInt)
})

// creating function to clear innerHTML - works
// accepts div to clear as argument so we can all use this function
const clearFunction = (divToClear) => {
    divToClear.innerHTML = ""
}

// creating function to clear uniqueResult - does not work
const clearResult = () => {
    uniqueResult.innerText = ""
}

// target restaurants clear button
restClear = document.getElementById("restaurants-clear")

// add event listener to restaurants clear button, call function to clear div AND uniqueResult
restClear.addEventListener("click", () => {
    clearFunction(restTarget)
    clearResult()
})

// target generate itinerary button
genItin = document.getElementById("generate-itinerary")

// add event listener to generate itinerary button
genItin.addEventListener("click", () => {
    console.log("generate itin button clicked")
    // needed here:
    // create element from itin (store it in database.json)
    // then append to DOM
})

// target restaurant list
restTarget.addEventListener("click", (event) => {
    // just to show what is being clicked
    // need a way to get out the text content of the button, but this is most of the way there
    console.log(event.target.parentNode.innerText)
})