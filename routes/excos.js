const express = require('express')
const router = express.Router()
const {Executives, validate} = require('../model/exco')

//console.log('I made it here')

router.post('/', async(req, res)=>{

    const{error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    let exco = new Executives({
        name: req.body.name,
        post: req.body.post,
        email: req.body.email,
        department: req.body.department,
        mobile: req.body.mobile
    });
    exco = await exco.save()
    res.send(exco)
});

router.get('/', async(req, res)=>{
    const excos = await Executives.find().sort('name')
    res.send(excos)
});

router.get('/:id', async(req, res)=>{
    const exco = await Executives.findById(req.params.id)
    console.log(req.params.id)
    if(!exco) return res.status(404).send("The Exco with the given Id can't be find")
    res.send(exco)
});

router.put('/:id', async(req, res)=>{
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    const exco = await Executives.findByIdAndUpdate(req.params.id,
        {
        name: req.body.name,
        post: req.body.post,
        email: req.body.email,
        department: req.body.department,
        mobile: req.body.mobile
    })
    if(!exco) return res.status(404).send("The Exco with the given Id can't be find")

    res.send(exco)

});

router.delete('/:id', async(req, res)=>{
    const exco = await Executives.findByIdAndDelete(req.params.id)
    if(!exco) return res.status(404).send("The Exco with the given Id can't be find")

    res.send(exco).statusMessage("Executives Successfully Deleted")
})

module.exports = router