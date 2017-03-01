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




var fname = process.argv.slice(2);
fname = fname[0];
var lname = process.argv.slice(3);
lname = lname[0];
var birthday = process.argv.slice[4];
console.log(fname, lname, birthday);

var next_id = null;

knex.select("*").from('famous_people')
.then((results) =>{
  console.log(results.length);
  next_id = results.length;
  next_id += 1;
})
.catch(function(error) {
  console.error(error)
});


knex('famous_people').insert({
  first_name: fname,
  last_name: lname,
  birthdate: birthday})
.then((results) =>{
  console.log(results);
})
.catch(function(error) {
  console.error(error)
});