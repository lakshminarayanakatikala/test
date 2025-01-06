const express = require('express')
const cors = require('cors')

const db = require('./db')

const app = express()

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.get('/',(req , res)=>{
    db.getUserData()
    .then((data)=>{

        res.send(data)
       
    })
    .catch(()=>{
        res.send('database data error')
    })
})


app.post('/',(req , res)=>{
    db.postUserData(req.body.username,req.body.password)
    .then((data)=>{
        res.send(data)
    })
    .catch(()=>{
        res.send('database data error')
    })
})



let port = 3003
app.listen(port , ()=>{
    console.log('server start...........');
    
})