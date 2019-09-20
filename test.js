var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('api.db',function() {
  db.run("create table test(name varchar(15))",function(){
    db.run("insert into test values('hello,world')",function(){
      db.all("select * from test",function(err,res){
        if(!err)
          console.log(JSON.stringify(res));
        else
          console.log(err);
      });
    })
  });
});


var get1 = http.request({
  hostname: 'localhost',
  port: 3000,
  method: 'get',
  path: '/api',
}, (res) => {
  console.log('STATUS:' + res.statusCode);
  console.log('HEADERS:' + JSON.stringify(res.headers));
  res.setEncoding('utf-8');
  res.on('data', function (chunk) {
    console.log('数据片段分隔-----------------------\r\n');
    console.log(chunk);
  });
  res.on('end', function () {
    console.log('响应结束********');
  });

  // 做些事情。
})
.on('socket', (socket) => {
  socket.emit('agentRemove');
});
get1.end()


function p2 () {
  var contents = querystring.stringify({
    status: 'status1',
    message: 'message1',
  });
  var get2 = http.request({
    hostname: 'localhost',
    port: 3000,
    method: 'POST',
    path: '/api',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': contents.length
    }
  }, (res) => {
    console.log('STATUS:' + res.statusCode);
    console.log('HEADERS:' + JSON.stringify(res.headers));
    res.setEncoding('utf-8');
    res.on('data', function (chunk) {
      console.log('数据片段分隔-----------------------\r\n');
      console.log(chunk);
    });
    res.on('end', function () {
      console.log('响应结束********');
    });

    // 做些事情。
  }).on('socket', (socket) => {
    socket.emit('agentRemove');
  });
  get2.write(contents);
  get2.end()

}
p2()