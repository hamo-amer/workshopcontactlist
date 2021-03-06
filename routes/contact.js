const express=require('express')
const { findByIdAndDelete } = require('../models/Contact')
const router=express.Router()
 const Contact=require('../models/Contact')

// //test
// router.get('/test',(req,res)=>{   //  /api/contacts/test
//     res.send('this is test')
// })

//@ desc add new contact
//@method post
//@req.body
router.post('/',async(req,res)=>{
    try {
        const {name,email,phone}=req.body
if(!name||!email){
    return res.status(400).send("name and email are required")
}
const contactt= await Contact.findOne({email})
if(contactt){
    return res.status(400).send("contact is already exist")
}

        const contact= new Contact({
          name,email,phone  
        })
        await contact.save()
        res.status(200).send({msg:"contact added",contact})
    } catch (error) {
        res.status(500).send("impossible to add contact")
    }
})

//@desc all contacts
//@method get
router.get('/',async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.status(200).send({msg:"all contacts",contacts})
    } catch (error) {
        res.status(500).send("impossible to get contacts")
    }
})

//@desc update contact
//@method put
//@req.body
//@req.params

router.put("/:Id",async(req,res)=>{
 try {
    const {Id}=req.params
    //   const id=req.params.Id
    const contact=await Contact.findOneAndUpdate({_id:Id},{$set:{...req.body}})
    res.status(200).send({msg:"contact edited",contact})
 } catch (error) {
    res.status(500).send("impossible to edited contacts")
 }
})
//@desc delete contact
//@method delete
//@req.params
router.delete('/:Id',async(req,res)=>{
    try {
        const {Id}=req.params
        const contact=await Contact.findByIdAndDelete(Id)
        res.status(200).send({msg:"contact deleted",contact})
    } catch (error) {
        res.status(500).send("impossible to deleted contacts")
    }
})

router.get('/:Id',async(req,res)=>{
try {
    const {Id}=req.params
    const contact = await Contact.findOne({_id:Id})
    res.status(200).send({msg:"contact",contact})
} catch (error) {
    res.status(500).send("impossible to contacts")
}
})






module.exports=router