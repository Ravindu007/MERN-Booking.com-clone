const express = require("express")

// controllers
const {fetchAllExploreData,fetchAllProperties, fetchAllTripPLaces, fetchAllInspirations, fetchAllFavouriteHomes,fetchAllDestinations} = require("../controllers/frontEndFetchingControllers")

const router = express.Router()

// getting explore data
router.get("/getExploreData", fetchAllExploreData )

//getting properties
router.get("/getAllProperties", fetchAllProperties)


// getting places to gon on a trip
router.get("/getTripPlaces", fetchAllTripPLaces)

// getting inspirations
router.get("/getInspirations", fetchAllInspirations)

//getting favourite homes
router.get("/getFavouriteHomes", fetchAllFavouriteHomes)

// getting all the destinations
router.get("/getAllDestinations",fetchAllDestinations)

module.exports = router