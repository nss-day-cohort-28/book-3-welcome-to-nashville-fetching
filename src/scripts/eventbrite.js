let eventArray = []
let freeArray = []
let moneyArray = []

    fetch ("https://www.eventbriteapi.com/v3/events/search/?location.address=Nashville&expand=venue&sort_by=date", {
        headers: {
            "Authorization": "Bearer NK5HV7ZQC6WOGAYEN7W6"
        }
    })
        .then((events) => events.json())
        .then((parsedEvents) => {
            eventArray = parsedEvents.events
  

            for (let i = 0; i < eventArray.length; i++) {
                // If else statement that creates Objects with the Key Components of Name and website addresses for the object, and populates the free and money arrays
                if (eventArray[i].is_free) {
                    let obj = {}
                    obj.name = (eventArray[i].name.text)
                    obj.descriptor = (eventArray[i].url)
                    freeArray.push(obj)
                } else {
                    let obj = {}
                    obj.name = (eventArray[i].name.text)
                    obj.descriptor = (eventArray[i].url)
                    moneyArray.push(obj)

                }

            }
            // Array of events that cost money
            for (i = 0; i < 5; i++) {
                // console.log(moneyArray[i])
            }

            // Array of events that are free
            for (i = 0; i < 5; i++) {
                // console.log(freeArray[i])
            }


        })

