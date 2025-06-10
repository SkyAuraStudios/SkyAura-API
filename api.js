const express =  require("express");
const bodyParser = require('body-parser')

const api = express();

// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded())

// parse application/json
api.use(bodyParser.json())


api.get('/api/globalvars/NCR_CONVERSION', (req, res)=>{
    res.send({"ownerId":"GLOBAL","path":"NCR_CONVERSION","value":"0.03448631","partitionKey":"GLOBAL","rowKey":"NCR_CONVERSION","timestamp":"2025-06-09T05:09:48.2479683+00:00","eTag":"W/\"datetime'2025-06-09T05%3A09%3A48.2479683Z'\""})
})

api.get('/api/globalvars/CDFT_CONVERSION', (req, res)=>{
    res.send({"ownerId":"GLOBAL","path":"CDFT_CONVERSION","value":"19.66930202","partitionKey":"GLOBAL","rowKey":"CDFT_CONVERSION","timestamp":"2021-11-29T10:47:34.2147849+00:00","eTag":"W/\"datetime'2021-11-29T10%3A47%3A34.2147849Z'\""})
})



api.all('*', (req, res)=>{
    console.log(req.method + " REQUEST AT: " + req.url)
    if (req.method == "POST"){
        console.log(req.body);
    }else{
        console.log(req.body);
    }
})

api.listen(60621, ()=>{
console.log("LOCAL API INSTANCE Running ON PORT 60621");
})