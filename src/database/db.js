const sqlite3 = require('sqlite3').verbose();
const request = require('request');
const db = new sqlite3.Database('./test.db');

// THIS SHIT IS GOOD
// TODO: Fix janky code and grab array of cards (multiple dark magicians)
function grabAPI() {
    request('https://db.ygoprodeck.com/api/v3/cardinfo.php?name=Lost%20Blue%20Breaker', function (err, response, body) {
        //console.log('error: ', err);
        let dataPHP = JSON.parse(body);
        let data = dataPHP[0][0];
        return "'" + data.name + "'";
    })
}


db.serialize(function () {
    //db.run("CREATE TABLE cardNames (info TEXT)");

    // Initial create mock data
    var stmt = db.prepare("INSERT INTO cardNames VALUES ('DarkMagician')") //+ grabAPI());
    /*
    var stmt = db.prepare("INSERT INTO cardNames VALUES ", grabAPI () {
    }
    */

    /*`
    for (var i = 10; i < 20; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();
    */

    db.each("SELECT rowid AS id, info FROM cardNames", function (err, row) {
        console.log(row.id + ": " + row.info);
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
});

db.close();

