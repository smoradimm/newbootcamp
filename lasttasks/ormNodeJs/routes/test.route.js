const express=require('express');
const{gettestdata,savebook}=require('../controllers/test.controler')
const router =express.Router()

// router.get('/',gettestdata);
router.post('/save',gettestdata)
router.post('/book',savebook)
module.exports=router