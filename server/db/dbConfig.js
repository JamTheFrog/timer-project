const mongoose = require("mongoose")
const uri = "mongodb+srv://faris:farefarefare@cluster0.kpxrr.mongodb.net/?retryWrites=true&w=majority"

let isConnected = false; // track the connection

const connectToDB = async () => {

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
    
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDB