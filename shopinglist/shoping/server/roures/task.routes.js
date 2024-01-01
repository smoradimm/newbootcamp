const express=require('express');
const router=express.Router();
const {save}=require("../controller/task.controller");
const {showtask,delet,don,edit}=require("../controller/task.controller");

router.post("/save",save);
router.get('/show',showtask);
router.delete("/delet/:id",delet);
router.post("/don",don);
router.post("/edit",edit);
module.exports=router;