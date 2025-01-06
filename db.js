const mysql = require('mysql2') 
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'ramya'
})

// con.connect((err)=>{
//     if(err){
//         console.log('connection error')
//     }
//     else{
//         console.log('create connection')
//     }
// })


function getUserData(){

    return new Promise((resolve,reject)=>{

       con.query('select * from x',(err,rows)=>{
        if(err){
            reject(err) 
        }
        else{
            resolve(rows)
        }
       }) 

    })

}


function postUserData(u,p){
    return new Promise ((resolve,reject)=>{

        con.query('INSERT INTO X (username ,password) VALUES (?,?)',[u,p],(err,rows)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(rows)
            }
        })


    })
}

module.exports = {getUserData,postUserData}






