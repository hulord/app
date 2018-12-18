const Mock = require('mockjs');
let Random = Mock.Random;
const {cus_routes} = require('./routes.js');
const {APIV1}  = require("../src/utils/apis")
 

module.exports = {
    [`${APIV1}/user/login`] (req, res) {
        var body = req.body;
        if(body.username === 'admin' && body.password === 'admin'){
            req.body =  {code:0,token:"abcdefsffdsfas",express:30000}
        }else{
            req.body =  {code:1,message:"账号或者密码错误!"}
        }
    },
    [`${APIV1}/data`] (req, res) {
        console.log("方法2可以使用")
    }
  }
