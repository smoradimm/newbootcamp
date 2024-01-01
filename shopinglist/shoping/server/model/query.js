const db = require("../utility/data");

class query {

//   async getUser() {
//     const query = "select * from users";
//     let [users] = await db.connection.execute(query);
//     return users;
//   }

//   async getUserById(id, res) {
//     const query = "select * from users where id = ?";
//     let [user] = await db.connection.execute(query, [id]);
//     return user;
//   }

  async addtask(task) {

    const { title} = task;
    console.log(task)
    const query = "insert into `tasklist` (`title`) values (?)";
    let res = await db.connection.execute(query, [title])
    return res;
  }
  
  async delettask(task) {

    const {id} = task;
    console.log("querrrrrrrrrrrry",id)
    const query = "delete from  `tasklist` where id = ?";
     await db.connection.execute(query, [task])
  
  }

  async edittask(task) {

    const {id,title} = task;
    console.log("querrrrrrrrrrrisdonry",task)
  //id=true
    const query = "update tasklist set title=? where id=?";
     await db.connection.execute(query,[title,id])
  
  }


  async dontask(task) {

    const {id} = task;
    console.log("querrrrrrrrrrrisdonry",task)
  //id=true
    const query = "update tasklist set isdon=true where id=?";
     await db.connection.execute(query,[id])
  
  }//"UPDATE `users` SET `first_name`=? ,`last_name`=? WHERE first_name=?" , [user.name, user.lastname , user.name2]
  //UPDATE `tasklist` SET `id`='[value-1]',`title`='[value-2]',`isdon`='[value-3]' WHERE 1

  async show() {
    const query = "SELECT * FROM `tasklist`";
    let res = await db.connection.execute(query)
    console.log(res[0])
    return res[0];
  }


  // async edittask() {
  //   const query = "SELECT * FROM `tasklist`";
  //   let res = await db.connection.execute(query)
  //   console.log(res)
  //   return res[0];
  // }


}
module.exports=new query();

