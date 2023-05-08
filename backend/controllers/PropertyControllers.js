const propertyModel = require("../models/PropertiesModel")

// firebase 
const {admin} = require("../server")
const bucket = admin.storage().bucket(process.env.STORAGE_BUCKET)


const createProperty = async(req,res) => {
  const {
    propertyName,
    address,
    unitNumber,
    zipCode,
    town,
    city,
    country,
    business,
    ownerName,
    ownerNickName,
    managedBy,
    governmentRepresentation
  } = req.body

  try {
    const files = req.files;
    if(!files || files.length < 3){
      res.status(400).json({msg:"Enter minimum of 3 photos"})
      return
    }else{
      const imgUrls = []
      var numOfUploads = 0;

      const fileArray = Object.values(files)

      for(let i=0; i < fileArray.length ; i++){
        const file = fileArray[i][0];
        const fileName = file.originalname;
        const fileRef = bucket.file(fileName)

        const stream = fileRef.createWriteStream({
          metadata:{
            contentType:file.mimetype
          }
        })

        stream.on("error", (err) => {
          res.status(500).json({error:"Error occured while uploading images"})
        })

        stream.on("finish", async()=>{
          const imageUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}` ;
          imgUrls.push(imageUrl)
          numOfUploads++;

          // write to the database only after 
          if(numOfUploads === fileArray.length){

            console.log(
              propertyName,
              address,
              unitNumber,
              zipCode,
              town,
              city,
              country,
              business,
              ownerName,
              ownerNickName,
              managedBy,
              governmentRepresentation,
              imgUrls[0],
              imgUrls[1],
              imgUrls[2],
            );

            try{
              const createdProperty = await propertyModel.create({
                propertyName,
                address,
                unitNumber,
                zipCode,
                town,
                city,
                country,
                business,
                ownerName,
                ownerNickName,
                managedBy,
                governmentRepresentation,
                propertyImage1:imgUrls[0],
                propertyImage2:imgUrls[1],
                propertyImage3:imgUrls[2],
              })
            
              res.status(200).json(createdProperty)
            }catch(error){
              res.status(400).json({error:error.message})
            }
          }
        })
        stream.end(file.buffer)
      }
    }
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}



module.exports = {createProperty}