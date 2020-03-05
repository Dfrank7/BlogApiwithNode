
const Joi = require('joi');
const mongoose = require('mongoose')

const Blog = mongoose.model('Blog', new mongoose.Schema({

    image_url: {
        type: String,
        minlength: 5
    },
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50   
    },

    details:{
        type: String,
        required: true,
        minlength: 50
    },
    time : { type : Date, default: Date.now }
}));

function validateBlog(blog){
    const schema = {
        image_url: Joi.string().min(5),
        title: Joi.string().min(5).max(50).required(),
        details: Joi.string().min(50).required()
      };
      return Joi.validate(blog, schema);
    }

    exports.Blog = Blog;
    exports.validate = validateBlog;
