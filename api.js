const express =  require("express");

const api = express();


api.all('/', (req, res)=>{
    console.log("REQUEST")
})

api.listen(60621, ()=>{
console.log("LOCAL API INSTANCE Running ON PORT 60621");
})