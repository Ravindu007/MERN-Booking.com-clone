const express = require("express")

// controllers
const {fetchAllExploreData} = require("../controllers/frontEndFetchingControllers")

const router = express.Router()

// getting explore data
router.get("/getExploreData", fetchAllExploreData )


module.exports = router