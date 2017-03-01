

const do_query = (client) => {
  return {
    lastname: (lname) => {
      client.query("select * from famous_people where last_name = '"+lname+"'", (err, result) => {
        if (err) {
          return console.error("error running query", err);
        }
        var ans = "";
        if(result.rows.length == 1){
          console.log("Found " + result.rows.length + " person(s) by the name "+ lname) //output: 1
          console.log("- " + result.rows.length + ": " + result.rows[0].first_name+
            " "+result.rows[0].last_name + ', born '+result.rows[0].birthdate.toDateString());
        }
      });
    }
  }

};

module.exports = do_query;
