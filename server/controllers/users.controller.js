const User = require('../models/user.model'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    {secret} = require('../config/jwt.config');


module.exports = {
    register: (req,res) => {
        const user = new User(req.body);
        user.save()
            .then( user => res.cookie("userToken", jwt.sign({id:user._id},secret),{httpOnly:true}).json({msg:"success"}))
            .catch(err => res.status(400).json(err.errors));
    },
    login: (req,res) => {
        console.log(req.body.password)
        User.findOne({email:req.body.email})
            .then( user => {
                if(user == null){
                    res.status(400).json({msg: "Invalid login attempt."})
                    res.cookie()
                }
                else{
                    bcrypt.compare(req.body.password, user.password)
                        .then(isValid => {

                            if(isValid === true){
                                
                                res.cookie("userToken", jwt.sign({id:user._id},secret),{httpOnly:true}).json({msg:"success"});
                            
                            }
                            else{
                                console.log('DHFKFJDKFKDH')
                                res.status(400).json({msg:"Invalid login attempt!"})
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            res.status(400).json({msg:"Invalid login attempt!"})})
                }
            })
            .catch(err => res.status(400).json(err.errors));
    }
}