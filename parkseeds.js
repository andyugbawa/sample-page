const mongoose =require("mongoose");

const Park  = require("./models/park")




mongoose.connect('mongodb://127.0.0.1:27017/parkview')
  .then(() => {
    console.log(" MONGO CONNECTION OPEN");
  })
  .catch(err => {
    console.error("MONGO CONNECTION ERROR", err);
  });


  const vehicleSeeds = [
    {
        name:"Toyota",
        brand:"Saloon",
        year:"2009"
    },
    {
        name:"Lexus",
        brand:"Suv",
        year:"2020"
    },
    {
        name:"Range Rover",
        brand:"Suv",
        year:"2001"
    },
    {
        name:"Hyundai",
        brand:"Saloon",
        year:"2009"
    },
    {
        name:"GAC",
        brand:"convertible",
        year:"2009"
    }
  ]

  Park.insertMany(vehicleSeeds)
  .then(res=>{
    console.log(res)
  }).catch(e=>{
    console.log(e)
  })
