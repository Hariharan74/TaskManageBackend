const execute = require('../config/dbConfig')

const SUP = (req,res,next)=>{
    console.log(sub,req)
    let insert_qry=`insert into user_profile (name,age,phoneno,email,password,status) 
    values(~~email,~~password,1);`
    update_qry =update_qry
    .replace('~~email',req.email)
    .replace('~~password',req.password)

    let result = execute.queryrun(update_qry)
    if(result.status){
        res.status(200).send({state:1})
    }
    else{
        res.status(200).send({state:0})
    }
}

const SIP = (req,res,next)=>{
    console.log(sub,req)
    let select_qry=`select * from user_profile where email= ~~email and password=~~password`
    select_qry =select_qry
    .replace('~~email',req.email)
    .replace('~~password',req.password)

    let result = execute.getresult(select_qry)
    if(result.status && result.res != {}){
        
        res.status(200).send(result.res)
    }
    else{

        res.status(200).send(result.res)
    }
}








module.exports = {
    SUP,
    SIP
}