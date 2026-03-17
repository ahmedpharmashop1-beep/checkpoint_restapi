const express = require('express');
const Contact = require('../model/Contact');
const router = express.Router();

router.get('/test',(req,res)=>{
    res.send('Hello')
})

//add Contact
router.post('/add', async (req,res)=>{
try {
    const {name,email,phone} = req.body;
    const newContact = new Contact({name,email,phone});
    await newContact.save();
    res.status(200).send({msg:'Contact added successfully', newContact})
    
} catch (error) {
    res.status(400).send({msg:'Failed to add contact', error})
}
})
router.get('/all', async (req,res)=>{
    try {
        const listContacts = await Contact.find();
        res.status(200).send({msg:'contactlist', listContacts})
    } catch (error) {
        res.status(400).send({msg:'Failed to get contacts', error})
    }
})

router.delete('/delete/:_id', async (req,res)=>{
    try {
        const {_id} = req.params;
        await Contact.findOneAndDelete({_id});
        res.status(200).send({msg:'Contact deleted successfully'})
    } catch (error) {
        res.status(400).send({msg:'Failed to delete contact', error})
    }
})

router.put('/update/:_id', async (req,res)=>{
    try {
        const {_id} = req.params;
        const updatedContact = await Contact.updateOne({_id}, {$set: {...req.body}});
        res.status(200).send({msg:'Contact updated successfully'})
    } catch (error) {
        res.status(400).send({msg:'Failed to update contact'})
    }
})

router.get('/get/:_id', async (req,res)=>{
    try {
        const {_id} = req.params;
        const contactToGet = await Contact.findOne({_id});
        res.status(200).send({msg:'Contact found', contactToGet})
    } catch (error) {
        res.status(400).send({msg:'Failed to get contact'})
    }
})



module.exports = router;