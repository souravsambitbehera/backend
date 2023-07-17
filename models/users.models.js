const mongoose = require('mongoose');


function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
const addressSchema = new mongoose.Schema({
    pincode: { type: Number, required: true },
    street: { type: String, required: true },
    phone: {
        type:String, 
        unique:true,
        validate: {
        validator: function(v) {
          return /^([0-9]{10}$)/.test(v);
        }},
        required: true
        }
  });
const  usersSchema  =  new  mongoose.Schema({

    firstName: {type:  String, required:  true, min:[0,"wrong min firstname"],max:[16,"wrong max firstname"]} ,
    lastName: {type:  String, min:[0,"wrong min lastname"],max:[16,"wrong max lastname"]} ,
    age: {type:  Number, min:[12,'wrong age'],required:  true,max:[100,"wrong max age"]},
    email:  {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: addressSchema,
        required: true,
      },
    
    });

    const User = mongoose.model('User',usersSchema)
    exports.User = User