var bamazonServer = require("bamazonServer");
var inquirer = require("inquirer");
var con = bamazonServer.createConnection({
    host: "localhost",
    user: "root",
    password: "MobileSuitUrgot91",
    database: "bamazondb"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});



function displayProducts(){
console.log(products);
}

function productSearch() {
    inquirer
        .prompt([{
                type: "input",
                message: "Product name?",
                name: "product"
            }

        ]).then(function(result) {

            var product = product.product_name;

            var sql = "SELECT * FROM products WHERE product_name LIKE '%" + product + "%'";

            runQuery(sql);
        });
}

function runQuery(sql) {
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Result: " + JSON.stringify(result));
        con.end();
    });
}

// function artistDubs() {
//     var sql = "SELECT  artist_name FROM top5000 group by artist_name HAVING COUNT(artist_name) > 1";

//     runQuery(sql);

// }


// function range() {

//     inquirer
//         .prompt([{
//                 type: "input",
//                 message: "start year?",
//                 name: "start"
//             },
//             {
//                 type: "input",
//                 message: "end year?",
//                 name: "end"
//             }
//         ]).then(function(result) {

//             var start = result.start;
//             var end = result.end;


//             var sql = "SELECT * FROM top5000 WHERE song_year >= '" + start + "' AND song_year <= '" + end + "' ";

//             runQuery(sql);



//         });

// }

// function songSearch() {
//     inquirer
//         .prompt([{
//                 type: "input",
//                 message: "song name?",
//                 name: "song"
//             }

//         ]).then(function(result) {

//             var song = result.song;

//             var sql = "SELECT * FROM top5000 WHERE song_name LIKE '%" + song + "%'";

//             runQuery(sql);



//         });
// }

// The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.