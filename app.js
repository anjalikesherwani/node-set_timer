console.log('welcome to nsti Allahabad')
// setTimeout(function(){
//     console.log('Provide some delay')},5000)    //delay ho gaye ga

// setInterval(function(){
//     console.log('delay')},3000)     //jo bhi console log me diye rahege repeat hota rhega


const http = require('http');
const server = http.createServer((req, res) => {
  console.log('Got request');

  setTimeout(() => {
    res.end('Hello World!');
  }, 10000);
});

server.timeout = 5000;

server.listen(3000);

function subject(){
    console.log('Hindi')
}                           //function run hoga

subject()

//function write karne ke method


var hello = function(){
    console.log('Allahabad')}     //variable declare krwa hai

function hello(){
    console.log('welcome')
}
hello()

//module call karna

var school = require('./index')

school.subject()
school.cbse()

