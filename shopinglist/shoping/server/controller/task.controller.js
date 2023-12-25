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