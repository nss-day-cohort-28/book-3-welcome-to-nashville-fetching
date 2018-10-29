// parks variables===================================

let natureCenter = "nature_center=Yes"
let playgrounds = "playground=Yes"
let tennisCourts = "tennis_courts=Yes"
let dogParks = "dog_park=Yes"

// fetch data from the parks URL and throw it into an array

let parkList = []


parksApi = {
  fetchParks(feature) {
     fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${feature}&$limit=5`, {
        method: "GET",
        headers: {
          "X-App-Token": "XcRGsaqjKz2yy7rVRSL3M6qvx"
        }
      })
      // translate into json
      .then((parkData) => parkData.json())
      // run a forEach loop to print parks and put results into an object
      
      .then((printParks) => {
        parkList = []
        printParks.forEach((park) => {
          let parkObj = {}
          parkObj.name = park.park_name
          parkObj.descriptor = `${park.mapped_location_address} ${park.mapped_location_city}, ${park.mapped_location_state}`
          //  push parks obj into the parkList array
          parkList.push(parkObj)
        });
        
        // call element factory with the array that I've created but inside my then statement
        let uniqueUl =
        elementfactory(parkList, "park-ul");
        console.log(uniqueUl)
        parkContainer.appendChild(uniqueUl)
              
      })
  }
}
