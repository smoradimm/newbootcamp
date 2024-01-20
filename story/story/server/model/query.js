const db = require("../utility/data");

class query {

  async addtask(task) {

    const { story} = task;
    const query = "insert into `stor` (`story`) values (?)";
    let res = await db.connection.execute(query, [story])
    return res;
  }
  
  
  async show() {
    const query = "select * from `stor`";
    let res = await db.connection.execute(query)
   
    return res[0];
  }

  async change(id) {
    const query = "select `story` from `stor` where id = ?";    
        let res = await db.connection.execute(query,[id])
   
    return res[0];
  }





  async delettask(task) {

    const {id} = task;
  
    const query = "delete from  `stor` where id = ?";
     await db.connection.execute(query, [task])
  
  }

  async edittask(task) {

    const {id,story} = task;
   
    const query = "update stor set story=? where id=?";
    let res = await db.connection.execute(query,[story,id])
    
    return res;
  }


  

}
module.exports=new query();

