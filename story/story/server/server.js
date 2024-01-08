const express=require("express");
const cors=require("cors");
const app=express();
const task=require("./roures/task.routes")
//const showtask=require("./roures/task.routes")
const PORT=4000;
app.use(express.json());
app.use(cors());
app.use("/api",task);
app.listen(PORT,()=>{})