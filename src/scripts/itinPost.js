// itin.postActivity(activityToSave) method to post an object passed as the argument of the method to our itinerary 
// resource in JSON file.

const itin = {
  postActivity (activityToSave) {
    fetch("http://localhost:8088/itinerary/1", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(activityToSave)
    })
  }
}

//  function that accepts the name and descriptor as arguments and posts the by calling the itin method.
createObjectPost = (park, restaurant, event, concert) => {
  let itinObj = {}
    itinObj.park = park
    itinObj.restaurant = restaurant
    itinObj.event = event
    itinObj.concert = concert
  itin.postActivity(itinObj)
}