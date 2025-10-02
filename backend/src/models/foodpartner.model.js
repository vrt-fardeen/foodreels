const mongoose = require('mongoose');
const { unique } = require('next/dist/build/utils');

const foodPartnerSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
})

const foodPartnerModel = mongoose.model("foodpartner", foodPartnerSchema);

module.exports = foodPartnerModel;