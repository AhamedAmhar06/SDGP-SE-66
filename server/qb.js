var Express= require("express");
var Mongoclient = require('mongodb').MongoClient;
var cors = require('cors');

const multer = require('multer');

var app=Express();
app.use(cors());
var CONNECTION_STRING="mongodb+srv://SDGP-SE-66:<password>@sdgp-se-66.t5y5dxv.mongodb.net/?retryWrites=true&w=majority&appName=SDGP-SE-66";




var DATABASENAME="todoappdb";
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
app.get('/api/todoapp/notes',(request,response)=>{
    database.collection('todoappcollection').find({}).toArray((error,result)=>{
        response.send(result);
    });
})
app.post('/api/todoapp/AddNotes',multer().none(),(request,response)=>{
    database.collection("todoappcollection").count({},function(error,numOfDocs){
        database.collection("todoappcollection").insertOne({
            id:(numOfDocs+1).toString(),
            description:request.body.newNotes
        });
        response.json("Added succesfully");
    })
})
app.delete('/api/todoapp/DeleteNotes',(request,response)=>{
    database.collection("todoappcollection").deleteOne({
        id:request.query.id
    });
    response.json("Deleted succesfully");

})