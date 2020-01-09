//express_demo.js 文件
const querystring = require("querystring")
const express = require('express');
const fs = require('fs');
const sqlite3 = require('sqlite3');
const userApi = require('./api');

// 连接数据库，创建user表
function connectDB(cb) {
    const fileName = 'api.db';
    const exists = fs.existsSync(fileName);
    if (exists) {
        fs.unlinkSync(fileName)
    }

    const db = new sqlite3.Database(fileName, function () {
        db.run(`
              CREATE TABLE user (
                msgid INTEGER UNIQUE primary key autoincrement,
                status TEXT,
                message TEXT,
                timestamp TIMESTAMP default current_timestamp
        )`, (err) => {
            if (err) throw err;
            db.run(`
                CREATE TRIGGER UpdateLastTime
                AFTER UPDATE
                ON user
                FOR EACH ROW
                WHEN NEW.timestamp <= OLD.timestamp
                BEGIN
                UPDATE user SET timestamp=CURRENT_TIMESTAMP WHERE msgid=OLD.msgid;
                END;
            `)
            cb && cb(db);
        });
    });
}

// 启动服务
function server(db) {
    const app = express();
    app.use(express.json())

    // 接口定义
    userApi(app, db);
    // 更新id
    const server = app.listen(3000, function () {
        const port = server.address().port
        console.log(`app is listening on http://localhost:${port}`)
    })
}

// entry
function run() {
    connectDB(server)
}

run();
