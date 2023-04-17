const express = require("express")

// controllers
const {fetchAllExploreData,fetchAllProperties} = require("../controllers/frontEndFetchingControllers")

const router = express.Router()

// getting explore data
router.get("/getExploreData", fetchAllExploreData )

//getting properties
router.get("/getAllProperties", fetchAllProperties)

module.exports = router