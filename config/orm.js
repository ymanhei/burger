

    var connection = require("./connection.js");

    var orm = {
    selectAll:function(cb){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
      cb(result);
      console.table(result);
        })
    },
    insertOne:function(burger_name,cb) {
    var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES ('" + burger_name + "',0)";
    connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  cb(result);
})
},

    updateOne: function(id,cb){
    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = '" + id + "'";
    connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  cb(result);
})
}
    
    }

    module.exports = orm;
    
