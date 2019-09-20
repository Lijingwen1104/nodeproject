//express_demo.js 文件
var querystring = require("querystring")
var express = require('express');
var fs = require('fs');
var sqlite3 = require('sqlite3');

const fileName = 'api.db';

var app = express();

app.use(express.json()) 
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// 允许所有的请求形式
app.use(function(request, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var exists = fs.existsSync(fileName);
if (exists) {
    fs.unlinkSync(fileName)
}

var db = new sqlite3.Database(fileName, function () {
});

// 获取所有
app.get('/api', function (request, response) {
  db.all("select * from user", function (err, res) {
    if (!err)
      response.send(JSON.stringify(res));
    else {

    }
      
  });

})
// 替换集合
app.put('/api', function(request,response){
  const {users} = request.body
  db.run('delete from user')
  users.forEach(element => {
    db.run(`INSERT INTO user (status, message) VALUES ('${element.status}', '${element.message}')`);
  });
  response.send('success')
})
// 新增集合
app.post('/api', function (request, response) {
  // INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (1, 'Paul', 32, 'California', 20000.00 
  const {status, message} = request.body
  db.run(`INSERT INTO user (status, message) VALUES ('${status}', '${message}')`);
  response.send('success')
})
// 删除集合
app.delete('/api', function (request, response) {
  db.run('delete from user')
  response.send("DELETE COLLECTION SUCCESSFUL")
})
// 返回详情
app.get('/api/:id', function (request, response) {
  db.all(`select * from user where msgid = '${request.params.id}'`, function (err, res) {
    if (!err)
      response.send(JSON.stringify(res));
    else {

    }
      
  });
})
// 更新id
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  

})