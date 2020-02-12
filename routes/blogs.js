const express = require('express')
const router = express.Router()
const {Blog, validate} = require('../model/blog')


router.post('/', async(req, res)=>{

    const{error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    let blog = new Blog({
        title: req.body.title,
        details: req.body.details
    });
    blog = await blog.save()
    res.send(blog)

});

router.get('/', async(req, res)=>{
    const blogs = await Blog.find() 
    if(blogs.length === 0) return res.json({status:0, message:'No result available',error:false})
    if(!blogs) return res.json({status:0, message:'No result available',error:false})
    res.json({blogs, status: 0,message:'Blogs returned successfully', error: false})

})

router.get('/:id', async(req, res)=>{
    const blog = await Blog.findById(req.params.id)
    console.log(req.params.id)
    if(!blog) return res.status(404).send("The Blog with the given Id can't be find")
    res.json({blog, status: 0,message:'Blog returned successfully', error: false})
});

router.put('/:id', async(req, res)=>{
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    const blog = await Blog.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            details: req.body.details
    })
    if(!exco) return res.status(404).send("The blog with the given Id can't be find")

    res.json({blog, status:0, error:false, message: 'Blog Successfully Updated'})

});

router.delete('/:id', async(req, res)=>{
    const exco = await Blog.findByIdAndDelete(req.params.id)
    if(!blog) return res.status(404).send("The Blog with the given Id can't be find")
    res.json({status:1, error:true, message: 'Executives Successfully Deleted'})
})

module.exports = router

