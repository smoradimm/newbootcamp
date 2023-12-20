const express =require('express');
const cors=require('cors');


const app=express();
app.use(cors());
app.use(express.json());

var players;
 app.post("/",(req,res,next)=>{
  players=req.body;

 });
 app.get("/",(req,res,next)=>{

  res.json(players)
});

app.listen(4000,()=>{
    console.log("sallllam")
});
