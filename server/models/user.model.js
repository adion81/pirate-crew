const mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true,"First name is required."]
    },
    lastName:{
        type: String,
        required: [true,"Last name is required."]
    },
    email:{
        type: String,
        requied:[true,"Email is required."],
        unique:[true,"Account already exists."],
        validate:{
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email address."
        }
    },
    password:{
        type: String,
        required:[true,"Password is required."],
        minlength:[8,"Password must be at least 8 characters long."]
    }

},{timestamps:true});

UserSchema.plugin(uniqueValidator);

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set( value => this._confirmPassword = value);

UserSchema.pre('validate', (next) => {
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword','Passwords do not match.')
    }
    next();
});

UserSchema.pre('save',function(next){
    bcrypt.hash(this.password,10)
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(err =>  console.log(err))
})

const User = mongoose.model("User",UserSchema);

module.exports = User;