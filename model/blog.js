
const Joi = require('joi');
const mongoose = require('mongoose')

const Blog = mongoose.model('Blog', new mongoose.Schema({

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

    timestamp:{
        type: AnalyserNode,
        required: true
    }

}));

function validateBlog(blog){
    const schema = {
        title: Joi.string().min(5).max(50).required(),
        details: Joi.string().min(50).required()
      };
      return Joi.validate(blog, schema);
    }

    exports.Blog = Blog;
    exports.validate = validateBlog;
