let eventArray = []
let freeArray =[]
let moneyArray = []

fetch("https://www.eventbriteapi.com/v3/events/search/?location.address=Nashville&expand=venue&sort_by=date", {
    headers: {
        "Authorization": "Bearer NK5HV7ZQC6WOGAYEN7W6"
    }
})
    .then( (events) => events.json())
    .then( (parsedEvents) => {
        eventArray = parsedEvents.events
        // console.log(eventArray)

        for (let i = 0; i < eventArray.length; i++) {
        
            if (eventArray[i].is_free) { 
                let obj = {}
                obj.name= (eventArray[i].name.text) 
                obj.descriptor= (eventArray[i].url)
                freeArray.push(obj)
        } else {
            let obj = {}
            obj.name= (eventArray[i].name.text) 
            obj.descriptor= (eventArray[i].url)
            moneyArray.push(obj)

        }
    }
    // console.table(moneyArray)
    
    // for ( i = 0; i < 5 ; i ++){
    //     console.log(moneyArray[i])
    //     }
        for(i = 0; i < 5; i++){
            console.log(freeArray[i])
        }
    })

