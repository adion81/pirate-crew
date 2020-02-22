const mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');


const PirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: [true,"Pirate name is required."]
    },
    imageUrl: {
        type:String,
        required:[true,"Profile Image is required."]
    },
    treasures:{
        type:Number,
        required:[true,"Treasures are required."]
    },
    catchPhrase:{
        type:String,
        required:[true,"A pirate must have a catch phrase."]
    },
    position:{
        type:String,
        required:[true,"A pirate needs a position."]
    },
    pegLeg:{
        type:Boolean,
        default:false
    },
    eyePatch:{
        type:Boolean,
        default:false
    },
    hookHand:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

PirateSchema.plugin(uniqueValidator);

const Pirate = mongoose.model("Pirate",PirateSchema);

module.exports = Pirate;