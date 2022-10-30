
/*********************************************************************************
* WEB322 – Assignment 4
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Jerry Do Student ID: 116797218 Date: 31th Oct 2022
*
********************************************************************************/
const fs = require("fs");

class Data {
    constructor(classes, employees) {
        this.classes = classes
        this.employees = employees
    }
}

var dataCollection = null;

 function intialize() {
    let dataC
    var dataE
    
    dataC = JSON.parse(fs.readFileSync("./data/classes.json", 'utf8'));
    dataE = JSON.parse(fs.readFileSync('./data/employees.json', 'utf8'));
    dataCollection = new Data(dataC, dataE);
    return new Promise(function(resolve, reject)
    {
        if(dataCollection.classes != undefined && dataCollection.employees != undefined)
        {
            resolve("Success")
        }
        else
        {
            reject("Failure")
        }
    })
  
}
function getAllEmployees()
{
    return new Promise(function(resolve, reject)
    {
        if(dataCollection.employees != undefined || dataCollection.employees.length !== 0)
        {
            resolve(dataCollection.employees)
        }
        else
        {
            reject("no result found")
        }
    })
}
function getEA()
{
    return new Promise(function(resolve, reject)
    {
       var filetered = dataCollection.employees.filter(function (obj)
       {
        return obj.EA === true
       })
       if(filetered.length === 0)
       {
        reject("no result found")
       }
       resolve(filetered)
    })
}
function getClasses()
{
    return new Promise(function(resolve, reject)
    {
        if(dataCollection.classes != undefined || dataCollection.classes.length !== 0)
        {
            resolve(dataCollection.classes)
        }
        else
        {
            reject("no result found")
        }
    })
}
function getPartTimers()
{
    return new Promise(function(resolve, reject)
    {
       var filetered = dataCollection.employees.filter(function (obj)
       {
        return obj.status === "Part Time"
       })
       if(filetered.length === 0)
       {
        reject("no result found")
       }
       resolve(filetered)
    })
}
function getEmployeeByNum(num)
{
    return new Promise(function(resolve, reject)
    {
       var filetered = dataCollection.employees.filter(function (obj)
       {
        return obj.employeeNum === num
       })
       if(filetered.length === 0)
       {
        reject("no result found")
       }
       resolve(filetered)
    })
}
module.exports = {intialize, getAllEmployees, getEA, getClasses, getPartTimers, getEmployeeByNum}



//comment = done
//for debugging
intialize()
//getPartTimers().then(data=>console.log(data))
//getClasses().then(data => console.log(data))
//getAllEmployees()
//getAllEmployees().then(data=> console.log(data))
//getEA().then(data=> console.log(data))
//getEmployeeByNum(1).then(data=> console.log(data))