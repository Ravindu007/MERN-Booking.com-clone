require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")


// firebase storage 
const admin = require("firebase-admin")
const serviceAccount = require("./serviceAccount.json")

admin.initializeApp({
  credential:admin.credential.cert(serviceAccount),
  storageBucket:process.env.STORAGE_BUCKET
})

module.exports = {admin:admin}


// routes
const frontendDataFetchingRoutes = require("./routes/LandipageDataFetchingRoute")
const propertyRoutes = require("./routes/PropertiesRoutes")

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

app.use("/api/properties", propertyRoutes)


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