let today = new Date
// create todays date in specific YYYY-MM-DD format contained in fullDate
let year = today.getFullYear()
let month;
if ((today.getMonth() + 1) <= 9) {
  month = "0" + (today.getMonth() + 1)
} else {
  month = today.getMonth() + 1
}
let day = today.getDate()
let fullDate = `${year}-${month}-${day}`


let eventList=[]
let concertArray = []
let concertContainer = document.getElementById("concert-list")
// object that has a method to return all of the concerts in nashville metroID area happening "today"
songkickAPI = {
  fetchConcerts(venueID) {
    fetch(`https://api.songkick.com/api/3.0/metro_areas/11104/calendar.json?min_date=${fullDate}&max_date=${fullDate}&per_page=50&apikey=U7F3aXQFBYvzB9Uz`)
    .then((concerts) => concerts.json())
    .then((resultsObj) => {
      return concertArray = resultsObj.resultsPage.results.event
    })
    .then((concertVenueArray) => {
      concertVenueArray.forEach((event) => {
        if (event.venue.id === venueID) {
          let eventObj ={}
          eventObj.name = event.displayName
          eventObj.descriptor = `<a href=${event.uri}>Go To Concert Info</a>`
          eventList.push(eventObj)
        }
        })
      // call element factory with the array that I've created but inside my then statement
      let uniqueUl = elementfactory(eventList, "concert-ul")
      concertContainer.appendChild(uniqueUl)
      })
  }
}




// create ul to append







