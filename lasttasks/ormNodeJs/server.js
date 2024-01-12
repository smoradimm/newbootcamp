const express=require("express")
const cors=require("cors")
const port =3000;
const gettestdata=require("./routes/test.route")
app=express()
app.use(express.json())
app.use(cors())
app.use("/api/user",gettestdata)

app.listen (port,()=>{
    console.log("it is runn");
})
