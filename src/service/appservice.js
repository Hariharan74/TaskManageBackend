
const CALLAPI = require('../service/apiService')

const APP_CONTROLLER = (req,res,next) => {
    console.log(req.body)
    let reqObj = req.body
    return CALLAPI[reqObj.func](reqObj,res,next)
}

module.exports = {
    APP_CONTROLLER
}