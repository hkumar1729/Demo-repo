const express = require("express");
const port = 3000;

const append = express();

append.get('/',(req,res)=>{
    res.send("Hello i am vipin")
})
append.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})