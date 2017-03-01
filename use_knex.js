const pg = require("pg");
const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});




var crit = process.argv.slice(2)
console.log(crit[0]);

knex.select("last_name").from('famous_people').where("last_name", crit[0])
.then((results) =>{
  console.log(results);
})
.catch(function(error) {
  console.error(error)
});
