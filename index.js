const express = require("express")
const app = express()

app.get("/users", function(req, res){
    console.log("hello users")
    res.send("hello")
})

app.listen(3000, () => {
    console.log("listing on port 3000")
    
})