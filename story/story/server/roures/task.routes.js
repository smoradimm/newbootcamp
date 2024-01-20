const express=require('express');
const router=express.Router();
const {save}=require("../controller/task.controller");
const {showtask,delet,edit,change}=require("../controller/task.controller");

router.post("/save",save);
router.get('/show',showtask);
router.delete("/delet/:id",delet);
router.post("/edit",edit);

router.get("/change",change);
module.exports=router;