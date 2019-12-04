
 class Product {
    constructor(id,  name, num, price, done) {
        this.id = id;
        this.name = name;
        this.num = num;
        this.price = price;
        this.done = done;
    }
}
let id = 0;
function genId(){
    return id++;
}


let product = {
    productList:[]
};

product.productList.push(new Product(genId(),"Хлеб", 2, 100, false));
product.productList.push(new Product(genId(),"Масло", 2, 1500, true));
product.productList.push(new Product(genId(),"Конфеты", 20, 1100, false));


const express = require("express");
const cors = require("cors");


// const bodyParser = require("body-parser");

const app = express();

app.use(cors());
// создаем парсер для данных application/x-www-form-urlencoded
//const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/", function(req, res, next){
    // console.log(req);
    // res.sendStatus(404);
    res.json(product);
    res.end();
});

// app.get("/register", urlencodedParser, function (request, response) {
//     response.sendFile(__dirname + "/register.html");
// });

// app.post("/register", urlencodedParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });

// app.put('/');
// app.post('/', urlencodedParser, function(req, res, next){
//     // if(!req.body) {
//     //    // return res.sendStatus(400);
//     // }else{
//     //     console.log(req.body.num);
//     // }
//     console.log(req);
//     if(! req.body) {
//        return res.sendStatus(400);
//     }

//     //console.log(req);
//     //res.end();
// });
// app.delete();

app.listen(3000,"127.0.0.1", ()=>{
     console.log("Сервер начал прослушивание запросов на порту 3000");
});

// const http = require("http");
// http.createServer(function(request,response){
     
//     response.end(request.method);
     
// }).listen(3000, "127.0.0.1",function(){
//     console.log("Сервер начал прослушивание запросов на порту 3000");
// });