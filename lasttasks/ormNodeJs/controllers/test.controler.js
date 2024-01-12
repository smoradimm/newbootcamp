const User=require("../models/user")
const books=require("../models/book")
exports.gettestdata = async (req, res) => {
    console.log(req);
    try {
    let data=await User.create({
        name: req.body.name,
        mobile: req.body.mobile,
        // createdAt:new Date(),
        // updatedAt:new Date(),

    });
    // let data=await User.findAll()
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }
    
  exports.savebook = async (req, res) => {
    console.log(req);
    try {
    let data=await books.create({
        name: req.body.name,
        price: req.body.price,
        userid: req.body.userid,

        // createdAt:new Date(),
        // updatedAt:new Date(),

    });
    // let data=await User.findAll()
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }
  



  // exports.usersbook = async (req, res) => {
  //   console.log(req);
  //   try {
  //   let data=await books.findAll({
  //       where:{userid: req.body.userid,
  //         include:[{
  //           model:user,

  //       }
  //               // createdAt:new Date(),
  //       // updatedAt:new Date(),
  //   });
  //   // let data=await User.findAll()
  //   console.log(data);
  //     res.json(data,200);
  //   } catch (error) {
  //     res.json({message:error},400);
  //   }
  // }