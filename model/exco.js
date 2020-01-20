const Joi = require('joi');
const mongoose = require('mongoose')

const Executives = mongoose.model('Executives', new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    post: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    department: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email:{
        type: String,
        required: true,
        minlength: 7,
        maxlength: 50
    },
    mobile:{
        type: Number,
        required: true,
        minlength: 11,
        maxlength: 11
    }

}));

function validateExcos(excos) {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      post: Joi.string().required(),
      mobile: Joi.number().required(),
      department: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(7).max(50).required()
    };
    return Joi.validate(excos, schema);
  }

  exports.Executives = Executives;
  exports.validate = validateExcos;