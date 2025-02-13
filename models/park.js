const mongoose =require("mongoose");



const parkSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    brand:{
        type:String,
        required:true

    },
       year:{
        type:Number,
        required:true

    }
})

const Park = mongoose.model("Park", parkSchema);

module.exports = Park