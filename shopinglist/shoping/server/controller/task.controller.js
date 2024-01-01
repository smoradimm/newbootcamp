const model=require("../model/query")

exports.save=async(req,res)=>{
   //console.log(req.body)
   let task=model.addtask(req.body);
   //console.log(req.body)
   res.json(task);
}

exports.showtask=async(req,res)=>{
   //console.log(req.body)
   let task= await model.show();
   //console.log(req.body)
   res.json(task);
}

exports.delet=async(req,res)=>{
   console.log("lllllllllllllllll",req.params.id)
   model.delettask(req.params.id);
   //console.log(req.body)
  // res.json(task);
}

exports.don=async(req,res)=>{
   console.log("lllllllllllllllll",req.body)
   model.dontask(req.body);
   //console.log(req.body)
  // res.json(task);
}
exports.edit=async(req,res)=>{
   console.log("lllllllllllllleditlll",req.body)
   model.edittask(req.body);
   //console.log(req.body)
  // res.json(task);
}