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

    const { nameoftask} = task;
    //console.log(title)
    const query = "insert into `tasklist` (`title`) values (?)";
    let res = await db.connection.execute(query, [nameoftask])
    return res;
  }

  async show() {
    const query = "SELECT * FROM `tasklist`";
    let res = await db.connection.execute(query)
    console.log(res)
    return res[0];
  }


}
module.exports=new query();

