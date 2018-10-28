// itin.postActivity(activityToSave) method to post an object passed as the argument of the method to our itinerary 
// resource in JSON file.

const itin = {
  postActivity (activityToSave) {
    fetch("http://localhost:8088/itinerary", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(activityToSave)
    })
  }
}

//  function that accepts the name and descriptor as arguments and posts the by calling the itin method.
createObjectPost = (name, descriptor) => {
  let activityObj = {}
    activityObj.name = name
    activityObj.descriptor = descriptor
  itin.postActivity(activityObj)
}