import express from "express";
import http from "http";

const PORT = 5500

const app  = express();
app.use(express.json());

//index view
app.get("/", function(req, res){
    res.send("Rubiel es un hdp");
});

//users view
app.post("/users", function(req, res){
    const data = req.body
    if (!data){
        res.status(409).json({ status: "user_not_created" });
    } else{
        res.status(201).json({ status: "user_created", data });
    }
});

//individual user view
app.get("/users/:user_id", function(req, res){
    const user = {
        user_id: req.params.user_id,
        name: "test name",
        email: "test@utp.ac.pa"
    }

    if(req.query.query){
        user["query"] = req.query.query;
    }

    res.status(200).json(user);

});

const server = http.createServer(app);

server.listen(PORT, function(){
    console.log("API is listening on port "+PORT);
});