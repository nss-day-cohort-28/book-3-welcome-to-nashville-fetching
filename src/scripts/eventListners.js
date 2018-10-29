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
const eventContainer= document.querySelector("#event-list")
const parksItineraryResults = document.querySelector(".parkItin")
const eventsItineraryResults= document.querySelector(".eventsItin")
const concertsItineraryResults= document.querySelector(".concertsItin")
const restItineraryResults= document.querySelector(".restItin")
const retrieveItineraryButton= document.querySelector(".retrieveItinerary")
const saveButton = document.querySelector(".itinerary-button")
const itineraryResults = document.querySelector(".itinerary-list")

restButton.addEventListener("click", () => {
    saveButton.classList.remove("hidden")
    clearFunction(restTarget)
    getRestaurants(restDropDown.value).then(res => {
      restTarget.append(uniqueResult)})
    })
    
  parksButton.addEventListener("click", () => {
    saveButton.classList.remove("hidden")
    clearFunction(parkContainer)
    let feature = (parksDropDown.value)
    console.log(parksDropDown.value)
    parksApi.fetchParks(feature)
  })
  
  
  eventsButton.addEventListener("click", () => {
    saveButton.classList.remove("hidden")
    clearFunction(eventContainer)
    const eventFilter = document.querySelector("#events-dropdown").value
    eventsApi.fetchEvents(eventFilter)
  })
  
  concertsButton.addEventListener("click", () => {
    saveButton.classList.remove("hidden")
    clearFunction(concertContainer)
    concertInt = parseInt(concertsDropDown.value)
    songkickAPI.fetchConcerts(concertInt)
})

// function that clears innerHTML of each result div
// accepts div to clear as argument so we can all use this function
const clearFunction = (divToClear) => {
    divToClear.innerHTML = ""
}




// Park selection
parkContainer.addEventListener("click", (event) => {
    parksItineraryResults.innerHTML= ""
    if (event.target && event.target.nodeName === "LI") {
        console.log(event.target.innerText)
        parksItineraryResults.append(`Park: ${event.target.innerText}`)
    
    }
    // fire success message
    successAlert("park-success")
 })

 // Event selection
 eventContainer.addEventListener("click", (event) => {
    eventsItineraryResults.innerHTML= ""
    if (event.target && event.target.nodeName === "LI") {
        console.log(event.target.innerText)
        eventsItineraryResults.append(`Event: ${event.target.innerText}`)
    }
    successAlert("event-success")
 })

 // Concerts selection
 concertContainer.addEventListener("click", (event) => {
    concertsItineraryResults.innerHTML= ""
    if (event.target && event.target.nodeName === "LI") {
        console.log(event.target.innerText)
        concertsItineraryResults.append(`Concert: ${event.target.innerText}`)
    }
    successAlert("concert-success")
 })

 // Resturants selection
 restTarget.addEventListener("click", (event) => {
    restItineraryResults.innerHTML= ""
    if (event.target && event.target.nodeName === "LI") {
        console.log(event.target.innerText)
        restItineraryResults.append(`Restaurant: ${event.target.innerText}`)
    }
    successAlert("rest-success")
 })

//  save itinerary button

saveButton.addEventListener("click", (event) => {
    createObjectPost(parksItineraryResults.innerText, restItineraryResults.innerText, eventsItineraryResults.innerText, concertsItineraryResults.innerText )
    itineraryResults.innerHTML = ""
    savedAlert()
})

// Itenerary callback button
retrieveItineraryButton.addEventListener("click", (event) =>{
    Getitin.postActivity()
})
 