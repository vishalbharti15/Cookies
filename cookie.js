//express, cookie-parser
const express = require("express")
const cookierParser = require("cookie-parser")
var port = process.env.PORT || 5000


//simple cookie
var students = { "student" : [
    {"name" : "A", "roll_no" : 1, "age" :16},
    {"name" : "B", "roll_no" : 2, "age" :14},
    {"name" : "C", "roll_no" : 3, "age" :15}
]}


var staffs = { "staff" : [
    {name : "English Staff",
    teachers : 5},
    {name : "Maths Staff",
    teachers : 4},
    {name : "Science Staff",
    teachers : 7}
]}

var subjects = { "subject" : [
    {"name" : "Maths"},
    {"name" : "English"},
    {"name" : "Science"}
]}

var exams = { "exam" : [
    {"name" : "Maths Exam", "Max Marks" : 100},
    {"name" : "English Exam", "Max marks" : 80},
    {"name" : "Science Exam", "Max marks" : 70}
]}


//creting server
var app = express()

//mounting
app.use(cookierParser())

//home route
app.get("/", function(req, res){
    res.send("<h1><center>Cookies Home Page</center></h1>")
})

//adding the cookies
app.get("/add", function(req, res){
    //we are going to cookie to the browser
    res.cookie("Students", students) //cookieName, cookieValue
    res.cookie("Staffs", staffs) //cookieName, cookieValue
    res.cookie("Subjects", subjects) //cookieName, cookieValue
    res.cookie("Exams", exams) //cookieName, cookieValue
    res.send("<h1><center>Cookies Added</center></h1>")
})

//view all cookies
app.get("/all", function(req, res){
    //reading the cookies information from the browser
    res.send(req.cookies)
})

//view specific cookies
app.get("/view/staff", function(req, res){
    res.send(req.cookies["Staffs"])
})

//delete specific cookies
app.get("/delete/exam", function(req, res){
    res.clearCookie("Exams")
    res.send("<h1><center>Exams Cookies Cleared</center></h1>")
})

//delete all cookies
app.get("/deleteall", function(req, res){
    res.clearCookie("Exams")
    res.clearCookie("Staffs")
    res.clearCookie("Students")
    res.clearCookie("Subjects")
    res.send("<h1><center>All Cookies Cleared</center></h1>")
})


//starting the server
app.listen(port, function(err){
    if(err)
    {
        console.log("Err in starting the server")
        return
    }
    console.log("server started at port : ", port)
})