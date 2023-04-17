require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

// routes
const frontendDataFetchingRoutes = require("./routes/LandipageDataFetchingRoute")

const app = express()

// middleware
app.use(express.json())

// access 
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

// routes
app.use("/api/frontendData", frontendDataFetchingRoutes)




// Data base connetion
mongoose.connect(process.env.DB_URI)
  .then(()=>{
    app.listen(process.env.PORT,()=>{
      console.log("listening on port: ",process.env.PORT, " and DB connected");
    })
  })
  .catch((error)=>{
    console.log(error);
  })