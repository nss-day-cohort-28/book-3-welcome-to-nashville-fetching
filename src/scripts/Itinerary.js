const Getitin = {
    postActivity () {
      fetch("http://localhost:8088/itinerary/1", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
       
      })
        .then((response) => response.json())
        .then((parsedresponse) => {
            let itinul = document.createElement("ul")
            // let eventli= document.createElement("li")
            // let parkli= document.createElement("li")
            // let concertli= document.createElement("li")
            // let restli= document.createElement("li")
                eventli = parsedresponse.event
                parkli= parsedresponse.park
                concertli= parsedresponse.concert
                restli= parsedresponse.restaurant
            itinul.innerHTML +=`<li>${eventli}</li>`
            itinul.innerHTML+=`<li>${concertli}</li>`
            itinul.innerHTML+= `<li>${parkli}</li>`
            itinul.innerHTML+=`<li>${restli}</li>`
            itineraryResults.appendChild(itinul)
            
            console.log(parsedresponse)
            console.log(concertli)
        })
    }
}

  