const sqlite3 = require('sqlite3').verbose();

// Create an in-memory and file database
const queryrun = (query)=>{
    let result = []
    let status = true
    const DB = new sqlite3.Database(__dirname.replace('config','db')+'/.taskmanageDB', (err) => {
        if (err) {
            status = false
          return console.error(err.message);
        }
        
    });

    DB.run(query,(err) => {
            if (err) {
                status = false
              return console.error(err.message);
            }
            
        }
    )
    DB.close();
    return {"status":status,"res":result}
}


const getresult =(query)=>{
    let result = []
    let status = true
    const DB = new sqlite3.Database(__dirname.replace('config','db')+'/.taskmanageDB', (err) => {
        if (err) {
            status = false
          return console.error(err.message);
        }
        
    });
    DB.all(query, (err, rows) => {
        if (err) {
          console.error(err.message);
          status = false
          return;
        }
        
        // Process the rows
        rows.forEach(row => {
          console.log(row);
        });
        result = rows
        // Close connection when done
        DB.close();
      });
    return {"status":status,"res":result}
}

const LoadTables = ()=>{
    let user_profile_qry = "CREATE TABLE IF NOT EXISTS user_profile ( id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, age INTEGER,phoneno TEXT,email TEXT, password TEXT,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, status INTEGER);"
    let user_status_qry = "CREATE TABLE IF NOT EXISTS signin_activity (id INTEGER, status INTEGER,last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,last_logout TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"
        
    queryrun(user_profile_qry)
    queryrun(user_status_qry)

    // let update_qry="insert into user_profile (name,age,phoneno,email,password,status) values('kiruba',25,'9876543210','kiruba@123.com','kiruba',1)"
    // queryrun(update_qry)
    // getresult('SELECT * FROM user_profile')
    
    
}
LoadTables()

module.exports ={
    queryrun,
    getresult
}