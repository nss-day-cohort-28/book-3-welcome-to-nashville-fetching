// cuisine ID's //
const american = 1;
const bbq = 193;
const coffee = 161;
const sushi = 171;
const southern = 471;
const tapas = 179;

// create empty array to hold objects
const restArray = [];

// create method for fetch
restaurantAPI = {
    fetchRestaurants(selection){
        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=5&cuisines=${selection}`, {
            headers: {
                "user-key": "bb1bc2b85838619af4247cb892fc4e99"
            }
        })
        .then( (response) => response.json())
    }
}

// loops over returned array and creates object
const restLoop = (array) => {
        array.restaurants.forEach((element) => {
            let obj = {}
            obj.name = element.restaurant.name
            obj.descriptor = "average rating " + element.restaurant.user_rating.aggregate_rating
            restArray.push(obj)
        })
        // return restArray
        return elementfactory(restArray, "rest-ul")
    }

const getRestaurants = (selection) => {
    return restaurantAPI.fetchRestaurants(selection).then((parsed) => {
        restLoop(parsed)
    })
}