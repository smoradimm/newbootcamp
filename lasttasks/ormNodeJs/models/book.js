const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const book = sequelize.define('books', {
  // Model attributes are defined here
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  price:{
         
    type: Sequelize.STRING,
    allowNull:true,
    
   
   },
   userid:{
     
    type: Sequelize.STRING,
    allowNull:true,
    
   
   },
}, {
  timestamps:false
});

// `sequelize.define` also returns the model
console.log(book === sequelize.models.book); // true
module.exports = book;