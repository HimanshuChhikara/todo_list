const userModel = require('../models/users');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
module.exports = {
 create: async function(req, res, next) {
  let findUser = await userModel.findOne({email: req.body.email})
  if(findUser) {
    return res.status(400).json({status: "Error", message: "User allready exists", data: null}); 
  }
    let result = await userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password });
    if(result) {
        return res.status(200).json({status: "success", message: "User added successfully!!!", data: null});
    }
    else {
        return res.status(400).json({status: "Error", message: "Something wrong happened", data: null});  
    }
},
authenticate: function(req, res, next) {
    userModel.findOne({email:req.body.email}, function(err, userInfo){
    if (err) {
        next(err);     
    } else {
        if(bcrypt.compareSync(req.body.password, userInfo.password)) {
        const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
        res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
    }else{
        res.json({status:"error", message: "Invalid email/password!!!", data:null});
    }
    }
});
},
}
