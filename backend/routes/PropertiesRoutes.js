const express = require("express")
const multer = require("multer")

// controllers 
const {createProperty} = require("../controllers/PropertyControllers")

const router = express.Router()


const upload = multer({
  storage:multer.memoryStorage()
})

router.post("/createNewProperty", upload.fields([
  {name:'propertyImage1'},
  {name:'propertyImage2'},
  {name:'propertyImage3'},
  {name:'propertyImage4'},
]), createProperty)


module.exports = router