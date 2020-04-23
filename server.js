const express = require('express');
const {MongoClient , ObjectID} = require('mongodb');
const bodyParsar = require('body-parser');
const assert = require('assert')


const app = express()

// Readfiles using bodyParsar

app.use(bodyParsar.json())

// Connecting Database to Server
const mongo_url = 'mongodb://localhost:27017'
const dataBase = "contact" 

MongoClient.connect(mongo_url, { useUnifiedTopology: true } ,(err, client)=>{
    assert.equal(err,null, ('Faild to connect to Database'))

    console.log('Connected successfully to server')

    const db = client.db(dataBase)

 // View all Contact

  app.get('/contact' , (req , res)=>{
    db.collection('contactlist').find({}).toArray((err, data)=>{
        err ? res.send('Cant fetch contactlist') : res.send(data)
    })
    })
 // View by ID Contact

  app.get('/contact/:id' , (req , res)=>{
    let contactToSearch = ObjectID(req.params.id)
    
    db.collection('contactlist').findOne({_id : contactToSearch} ,(err, data) =>{
        err ? res.send('Cant fetch contactlist') : res.send(data)
    })
    })

    // Add New Contact

    app.post('/add_contact' , (req , res)=>{
        let newContact = req.body 
        db.collection('contactlist').insertOne(newContact , (err , data)=>{

            err ? res.send('Cant add new contact') : res.send(data)
        })
    })

    // Delete Contact
    app.delete('/delet_contact/:id' , (req, res)=>{
        let contactToDelete = ObjectID(req.params.id)

        db.collection('contactlist').findOneAndDelete({_id:contactToDelete}  , (err , data)=>{
            err ? res.send('Cant remove more contact') : res.send('contact deleted successfully !!')
        })
    })

    // Modify Contact
    app.put('/modify_contact/:id' , (req,res)=>{
        let id = ObjectID(req.params.id)
        let modifyedContact = req.body

        db.collection('contactlist').findOneAndUpdate({_id : id},{$set:{...modifyedContact}},(err,data)=>{
            err ? res.send('Cant modify contact') : res.send('contact modifyed successfully !!')
        }) 
    
    })

})





app.listen(5000 , (err)=>{
(err) ? console.log('server not working') : console.log('server is runing at port 5000')
})
