const express = require("express")
const { json } = require("express/lib/response")
const App = express()

App.get("/books", function(req, res){
    console.log("hello manish")
    const books = [
        {
            BookName:"The marketing gurus",
            content: "Lesson from the best marketing books",
            Author:"Chris murry"
        },
        {
            BookName:"Marketing Made Simple",
            content: "The best small business marketing books for 2022",
            Author:"Rick Kettner"
        },
        {
            BookName:"Death Comes to Call",
            content: "An absolutely unputdownable English",
            Author:"CLARE CHASE"
        },
        {
            BookName:"A children's bible",
            content: "Finalist for the pulitzer prize",
            Author:"LYDA MILLET"
        },
    ]

    res.send(JSON.stringify(books))
})


App.listen(5000, () => {
    console.log("listing on port 5000")
    
})