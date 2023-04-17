const express = require("express")

const router = express.Router()

// getting explore data
router.get("/getExploreData",(req,res)=>{
  res.json({msg:"Explore data fetched"})
})


module.exports = router