const express=require('express');
const router=express.Router();
const {save}=require("../controller/task.controller");
const {showtask}=require("../controller/task.controller");

router.post("/save",save);
router.get('/show',showtask);

module.exports=router;