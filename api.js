const express =  require("express");

const api = express();


api.all('/', (req, res)=>{
    console.log(req.method + " REQUEST AT: " + req.url)
})

api.listen(60621, ()=>{
console.log("LOCAL API INSTANCE Running ON PORT 60621");
})