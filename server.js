
/*********************************************************************************
* WEB322 – Assignment 4
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Jerry Do Student ID: 116797218 Date: 31th Oct 2022
*
********************************************************************************/
var file = require("./modules/officeData.js")
var express = require("express")
var path = require("path")
var HTTP_PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static('public'))
app.use(express.static('./resource'))
file.intialize().then(function() 
{
    app.listen(HTTP_PORT, ()=>{console.log("server listening on port: " + HTTP_PORT)});
}
)
.catch(err => console(err));

function getAllEmployees()
{
    var em = file.getAllEmployees()
    em.then(data => console.log("Successfully retrieve " + data.length + " employees"))
        .catch(function(errmsg)  {console.log(errmsg)});
}

function getClasses()
{
    var classes = file.getClasses()
    classes.then(data => console.log("Successfully retrieve " + data.length + " classes"))
           .catch(function(errmsg)  {console.log(errmsg)})
}

function getEA()
{
    var ea = file.getEA()
    ea.then(data => console.log("Successfully retrieve " + data.length + " EA"))
    .catch(function(errmsg)  {console.log(errmsg)})
}

function getPartTimers()
{
    var pt = file.getPartTimers()
    pt.then(data => console.log("Successfully retrieve " + data.length + " part-timers"))
    .catch(function(errmsg)  {console.log(errmsg)})
}


app.get("/", (req, res) =>
{
    res.sendFile("./views/home.html", {root: __dirname})

})
app.get("/parttimer", (req, res) =>
{
    var pt = file.getPartTimers()
    pt.then(data => res.send(data))
    .catch(() => res.send(JSON.stringify({message:"no results"})))
})
app.get("/employee/:employeeNum", (req, res) =>
{
    file.getEmployeeByNum(parseInt(req.params.employeeNum)).then((data) => res.json(data))
    .catch(() => res.send(JSON.stringify({message:"no results"})))
})

app.get("/audio", (req, res) =>
{
    res.sendFile("./views/audio.html", {root: __dirname})
})

app.get("/list", (req, res) =>
{
    res.sendFile("./views/list.html", {root: __dirname})
})

app.get("/table", (req, res) =>
{
    res.sendFile("./views/table.html", {root: __dirname})
})

app.get("/video", (req, res) =>
{
    res.sendFile("./views/video.html", {root: __dirname})
})

app.get("/storefront", (req, res) =>
{
    res.sendFile("./views/storefront.html", {root: __dirname})
})
app.get("/Track03.ogg", (req, res) =>
{
    res.sendFile("./resource/Track03.ogg", {root: __dirname})
})
app.use((req, res) => {
    res.status(404).sendFile("./views/notfound.html", {root: __dirname});

  });

  


