const express = require('express')
const router = express.Router()
const Data = require('../models/schema')
router.get('/', async (req, res) => {
    try {
        const data = await Data.find()
        res.json(data)
        // sending json file of response
    }
    catch (err) {
        res.send('Error' + err)
    }

    // console.log('get request ')
})

router.get('/:id', async (req, res) => {
    try {
        const single_data = await Data.findById(req.params.id)
        res.json(single_data)
        // sending json file of response
    }
    catch (err) {
        res.send('Error' + err)
    }

    // console.log('get request ')
})

router.post('/' , async(req,res)=>
{
    const data =  new Data({
        name : req.body.name,
        college : req.body.college,
        is_working : req.body.is_working
    })

    try{
        const data1  = await data.save()
        res.send(data1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res) =>
{
    try{
        const data = await Data.findById(req.params.id)
        data.is_working = req.body.is_working
        const updated_data = await data.save()
        res.json(updated_data)
    }
    catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res) =>
{
    try{
        const data = await Data.findById(req.params.id)
        data.is_working = req.body.is_working
        const removed_data = await data.remove()
        res.json(removed_data)
    }
    catch(err){
        res.send('Error')
    }
})
module.exports = router