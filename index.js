const express = require('express');
const app = express();
const path = require("path");
const mongoose =require("mongoose");

const Park  = require("./models/park");
const methodOverride = require('method-override');
app.use(methodOverride("_method"))




mongoose.connect('mongodb://127.0.0.1:27017/parkview')
  .then(() => {
    console.log(" MONGO CONNECTION OPEN");
  })
  .catch(err => {
    console.error("MONGO CONNECTION ERROR", err);
  });


app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))


app.get('/parks', async(req, res) => {
  const parks = await Park.find({})
  res.render('parks/new',{parks});
});



app.get("/parks/index",(req,res)=>{
  res.render("parks/index")
})

app.post("/parks",async(req,res)=>{
const newParks = new Park(req.body);
 await newParks.save();
 res.redirect(`/parks/${newParks._id}`)
})

app.get('/parks/:id', async(req, res) => {
  const {id} = req.params
  const park = await Park.findById(id)
  res.render('parks/show',{park});
});


app.get("/parks/:id/edit",async(req,res)=>{
  const {id} = req.params
  const park = await Park.findById(id)
  res.render("parks/edit",{park})
})

app.put("/parks/:id",async(req,res)=>{
  const {id} = req.params
  const park = await Park.findByIdAndUpdate(id,req.body,{runValidators:true})
  res.redirect(`/parks/${park._id}`)
})

app.delete("/parks/:id",async(req,res)=>{
  const {id} = req.params
  await Park.findByIdAndDelete(id)
  res.redirect("/parks") 
})



app.listen(3000,()=>{
  console.log("Listening  to 3000")
})

module.exports = app; // Export the app for Vercel

