/*!
 * present 0.0.1 (2016-05-24, 19:33)
 */
var http=require("http"),express=require("express"),fs=require("fs"),io=require("socket.io"),crypto=require("crypto"),app=express(),staticDir=express["static"],server=http.createServer(app);io=io(server);var opts={port:process.env.PORT||1948,baseDir:__dirname+"/../../"};io.on("connection",function(a){a.on("multiplex-statechanged",function(b){"undefined"!=typeof b.secret&&null!=b.secret&&""!==b.secret&&createHash(b.secret)===b.socketId&&(b.secret=null,a.broadcast.emit(b.socketId,b))})}),["css","js","plugin","lib"].forEach(function(a){app.use("/"+a,staticDir(opts.baseDir+a))}),app.get("/",function(a,b){b.writeHead(200,{"Content-Type":"text/html"});var c=fs.createReadStream(opts.baseDir+"/index.html");c.on("error",function(a){b.write('<style>body{font-family: sans-serif;}</style><h2>reveal.js multiplex server.</h2><a href="/token">Generate token</a>'),b.end()}),c.on("readable",function(){c.pipe(b)})}),app.get("/token",function(a,b){var c=(new Date).getTime(),d=Math.floor(9999999*Math.random()),e=c.toString()+d.toString();b.send({secret:e,socketId:createHash(e)})});var createHash=function(a){var b=crypto.createCipher("blowfish",a);return b["final"]("hex")};server.listen(opts.port||null);var brown="[33m",green="[32m",reset="[0m";console.log(brown+"reveal.js:"+reset+" Multiplex running on port "+green+opts.port+reset);