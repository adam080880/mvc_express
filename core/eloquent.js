const db_driver = require("./db_driver")

const eloquent = {
    table: "",
    where: false,
    data: {},
    set: function(table) {
        this.table = table
        return this
    },
    setData: function(data) {
        this.data = data
        return this
    },
    setWhere: function(state) {
        this.where = state
        return this
    },    
    get: function(callback) {        
        let con = db_driver.db0()
        if(this.where) {
            con.query(`SELECT * FROM ${this.table} ${this.where}`, callback)
        } else {
            con.query(`SELECT * FROM ${this.table}`, callback)
        }                
    },
    insert: function(callback) {
        let this_ = this
        let query = `INSERT INTO ${this.table} SET `
        let count = 0
        let con = db_driver.db0()

        Object.keys(this.data).forEach(function(key) {
            query += `${key}='${this_.data[key]}'`            
            query += (Object.keys(this_.data).length == ++count) ? '' : ','            
        })
        con.query(query, callback)         
    },
    update: function(callback) {
        let this_ = this
        let query = `UPDATE ${this.table} SET `
        let count = 0
        let con = db_driver.db0()

        Object.keys(this.data).forEach(function(key) {
            query += `${key}='${this_.data[key]}'`            
            query += (Object.keys(this_.data).length == ++count) ? '' : ','            
        })

        query+=this.where

        con.query(query, callback)
    },
    delete: function(callback) {
        let this_ = this
        let query = `DELETE FROM ${this.table} `
        let con = db_driver.db0()

        query += this.where

        con.query(query, callback)        
    }
}

module.exports = eloquent