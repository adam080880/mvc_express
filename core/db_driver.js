const mysql = require("mysql")
const { host, user, password, database, driver } = require("../configs/database")

let db_driver = null;
if(driver == "mysql") {
    db_driver = {
        db0: function() { 
            let connection = mysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database
            })

            connection.connect(function(err) {
                if(err) throw err
            })

            return connection
        } 
    }                          
}

module.exports = db_driver