const userCtrl = {}
const User = require('../models/user.model');

userCtrl.registerUser = async (req,res) =>{
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    })

    user.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message : err});
    })
}


userCtrl.getAllUsers = async (req,res ) => {
    const users = await User.find()
    res.json(users)
}

userCtrl.getUserByID = async (req,res) => {
    User.findById(req.params.userID).then(data => {
        res.json(data);
    }).catch(err => {
        res.json({message: "User does not exist"});
    })
}

module.exports = userCtrl;