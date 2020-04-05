const Testing = require("../models/Testing")

const TestingController = {
    get: function(req, res) {        
        Testing.get(function(err, rows) {
            return res.json(rows)
        })
    },    
}

module.exports = TestingController