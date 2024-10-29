

// To manage ouer request and to pass info to frontend
const express = require("express");
const app = express();
const port = 777;
const mySql= require ("mysql2");

var cors = require("cors")
// const bodyParser = require ("body-parser") 

// Put variable to call

app.use(cors()) // Allows all origens or specify allowed origin  app.use(cors({origen:'http// babababa.com'}));

// Use  body parser as middle ware
// app.use(bodyparser.urlencoded({ extended: true }));

//  Create a connection to the MySQL server
// by providing connection details

// Mysql info
const dbConnection = mySql.createConnection(
{
    host:"localhost", // 127.0.0.1
    user:"myDBuser",
    database:"myDb",
    password:"Guess1"

});
// creatting connection // Connect to the MySQL server
dbConnection.connect(function(error) {
    if (error){
console.log("error connecting to database");

    }
    else{
        console.log("Connection made successfully ");
    }
    })
    

// query to get the products =iPhone
let get_products_query = `SELECT 
    p.product_id,     
    p.product_url, 
    p.product_name,
    pp.starting_price,
    pp.price_range, 
    pd.product_img,
    pd.product_link,
    pd.product_description,
    pd.product_brief_description
FROM 
    products p
INNER JOIN 
    productprice pp 
    ON p.product_id = pp.product_id
INNER JOIN 
    productdescription pd 
    ON p.product_id = pd.product_id; `;


// server listen on port 777
app.listen(777,()=>{
    console.log("Server listening on port 777");
})


app.get("/iphones", (req, res) => {
    dbConnection.query(
      "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
      (err, rows, fields) => {
        let iphones = { products: [] };
        iphones.products = rows;
        let stringIphones = JSON.stringify(iphones);
        if (!err) res.end(stringIphones);
        else console.log(err);
      }
    );
  });
// check on browser http://localhost:777/iphones to check 


app.post("/addproduct",(req, res) =>{
// console.log(bodyparser.jason)

console.log(req.body);

})

// Part of Week 3 Exercise 
    // ============= Question 2 =========================

    // products table
// const createProductTable =`create table IF NOT EXISTS Products
// ( 
//     product_id int AUTO_INCREMENT not null, 
//     product_URL varchar (255) not null, 
//     product_name varchar (255) not null, 
//     PRIMARY KEY ( product_id )
// )`;

//  product description table 

// const createProductDescriptionTable = `
// create table IF NOT EXISTS ProductDescription (
// description_id INT Auto_INCREMENT ,
// product_id INT(11)not null,
// product_brief_description text not null,
// product_description Text not null,
// product_img VARCHAR (255),
// product_link VARCHAR (255) not null,
// PRIMARY KEY (description_id),

// foreign KEY (product_id) references Products (product_id)
// )`;

// //  () Price table

// const createPriceTable = `
// create table IF NOT EXISTS ProductPrice
// (
// price_id int auto_increment not null,
// product_id int not null, starting_price decimal(10,2) not null,
// price_range varchar (255) not null,
// primary key (price_id),
// foreign key(product_id)  references products(product_id)

// )`

// // user table
// const createUserTable=`
// create table IF NOT EXISTS User
// (
// user_id int auto_increment not null,
// user_name varchar(50),
// user_password varchar(50),
// primary key (user_id)

// )`

// // Order table

// const createOrdersTable =`
// create table IF NOT EXISTS Orders
// (
// order_id int  auto_increment not null,
// product_id int not null,
// user_id int not null,

// primary key(order_id),
// foreign key (product_id) References products (product_id),
// foreign key (user_id) References user(user_id)

// )`;

// create tables function

    // function createTables(){
    //     dbConnection.query(createProductTable, (err)=> {
    //         if (err)
    // {
    //     console.log(" Error while creating product table:" +err);
    // } else{
    //     console.log("Product Table created successfully");
    // // res.send("Product Table created successfully")
    // // res.end
    // }   
            
    //     })
    // // create product description table
    //     dbConnection.query(createProductDescriptionTable, (err)=> {
    //         if (err)
    // {
    //     console.log(" Error while creating product description table:" +err);
    // } else{
    //     console.log("Product Description Table created successfully");
    // // res.send("Product Table created successfully")
    // // res.end
    // }   
            
    //     })
    
    //     dbConnection.query(createPriceTable, (err)=> {
    //         if (err)
    // {
    //     console.log(" Error while creating productPriceTable:" +err);
    // } else{
    //     console.log("Product Price Table created successfully");
    // // res.send("Product Table created successfully")
    // // res.end
    // }   
            
    //     })
    
    //     dbConnection.query(createUserTable, (err)=> {
    //         if (err)
    // {
    //     console.log(" Error while creating user table:" +err);
    // } else{
    //     console.log("user Table created successfully");
    // // res.send("Product Table created successfully")
    // // res.end
    // }   
            
    //     })
    
    //     dbConnection.query(createOrdersTable, (err)=> {
    //         if (err)
    // {
    //     console.log(" Error while creating order table:" +err);
    // } else{
    //     console.log("Order Table created successfully");
    // // res.send("Product Table created successfully")
    // // res.end
    // }   
            
    //     })
    // }


// handel the "/Install" request concurrently=> all the tables to be created on this request

// app.get("/install", function (req,res) {
//     // create product table 
//     createTables()  
// res.end("table created successfully")
// });
