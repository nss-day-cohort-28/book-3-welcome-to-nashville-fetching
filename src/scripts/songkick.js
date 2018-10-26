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



// object that has a method to return all of the concerts in nashville metroID area happening "today"
songkickAPI = {
  fetchConcerts() {
    return fetch(`https://api.songkick.com/api/3.0/metro_areas/11104/calendar.json?min_date=${fullDate}&max_date=${fullDate}&per_page=50&apikey=U7F3aXQFBYvzB9Uz`)
      .then((concerts) => concerts.json())
      .then((resultsObj) => {
        let concertArray = []
        concertArray = resultsObj.resultsPage.results.event
        return concertArray
      })
  }
}
let concertContainer = document.querySelector("#concert-list")
let eventList=[]
let showByVenue = (venueID) => {
  songkickAPI.fetchConcerts().then((array) => {
    array.forEach((event) => {
      if (event.venue.id === venueID) {
        let eventObj ={}
        eventObj.name = event.displayName
        eventObj.descriptor = `<a href=${event.uri}>Go To Concert Info</a>`
        eventList.push(eventObj)
      }
    })
    // call element factory with the array that I've created but inside my then statement
    elementfactory(eventList, "concert-ul");
  })
}

// create ul to append







