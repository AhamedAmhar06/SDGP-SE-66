var Express= require("express");
var Mongoclient = require('mongodb').MongoClient;
var cors = require('cors');

const multer = require('multer');

var app=Express();
app.use(cors());
var CONNECTION_STRING="mongodb+srv://SDGP-SE-66:SDGPgroupNo66@sdgp-se-66.t5y5dxv.mongodb.net/?retryWrites=true&w=majority&appName=SDGP-SE-66";

// //# MONGO_URL = mongodb+srv://SDGPse66:modaKavin@users.z9lrpe6.mongodb.net/?retryWrites=true&w=majority
// MONGO_URL = mongodb+srv://SDGP-SE-66:SDGPgroupNo66@sdgp-se-66.t5y5dxv.mongodb.net/?retryWrites=true&w=majority
// # AUTH_EMAIL = undergraduplift@gmail.com
// JWT_SECRET = 202221231149
// # EMAIL : 'undergraduplift@gmail.com'
// # PASSWORD: 'geuttcjtpprirqwz'

// module.exports ={
//     EMAIL: undergraduplift@gmail.com
//     PASSWORD: 'qjnsxcpryxrqnwlv'
// }


var DATABASENAME="questionBank";
var database;

app.listen(5039,()=>{
    console.log("server started");
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        if (error) {
            console.error('Failed to connect to MongoDB:', error);
            return;
        }
        
        database=client.db(DATABASENAME);
        console.log("connected to database successfully");
        
    });
})
// app.get('/api/todoapp/notes',(request,response)=>{
//     database.collection('todoappcollection').find({}).toArray((error,result)=>{
//         response.send(result);
//     });
// })
app.post('/server/questionBank/AddQuestion',multer().none(),(request,response)=>{
    database.collection("questionBank").count({},function(error,numOfDocs){
        database.collection("questionBank").insertOne({
            id:(numOfDocs+1).toString(),
            description:request.body.newNotes
        });
        response.json("Added succesfully");
    })
})
app.delete('/server/questionBank/DeleteQuestion',(request,response)=>{
    database.collection("questionBank").deleteOne({
        id:request.query.id
    });
   response.json("Deleted succesfully");

})