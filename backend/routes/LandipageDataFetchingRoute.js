const express = require("express")

// controllers
const {fetchAllExploreData,fetchAllProperties, fetchAllTripPLaces, fetchAllInspirations} = require("../controllers/frontEndFetchingControllers")

const router = express.Router()

// getting explore data
router.get("/getExploreData", fetchAllExploreData )

//getting properties
router.get("/getAllProperties", fetchAllProperties)

// getting places to gon on a trip
router.get("/getTripPlaces", fetchAllTripPLaces)

// getting inspirations
router.get("/getInspirations", fetchAllInspirations)

module.exports = router