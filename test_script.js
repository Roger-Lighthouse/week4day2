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


const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

//const do_query = require("./do_query");


var crit = process.argv.slice(2)
//console.log(crit[0]);

knex.select('*').from('famous_people')
.then((results) =>{
  console.log(results);
});


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  const do_query = require("./do_query")(client);
  do_query.lastname(crit);

  const do_query1 = require("./do_query1")(client);
  do_query1.lastname(crit);


  // client.query("select * from famous_people where last_name = '"+crit+"'", (err, result) => {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  //   //console.log(result);
  //   if(result.rows.length == 1){
  //     console.log("Found " + result.rows.length + " person(s) by the name "+ crit[0]); //output: 1
  //     console.log("- " + result.rows.length + ": " + result.rows[0].first_name+
  //       " "+result.rows[0].last_name + ', born '+result.rows[0].birthdate.toDateString());
  //   }
  //do_query.lastname(client, crit);


});

console.log("Searching...");


//Found 1 person(s) by the name 'Lincoln':
//- 1: Abraham Lincoln, born '1809-02-12'




