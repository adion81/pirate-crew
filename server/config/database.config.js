const mongoose = require('mongoose'),
    database = 'pirate-crew';

mongoose.connect(`mongodb://localhost/${database}`,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
    .then( () => console.log("You are now inside the mainframe....") )
    .catch( err => console.log(`MELTDOWN! MELTDOWN! MELTDOWN! This is your error: ${err}`))