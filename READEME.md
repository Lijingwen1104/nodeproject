### 依赖环境
nodejs 10+

官网 https://nodejs.org
```bash
node -v
v10.15.3
```

### 安装依赖
```bash
npm install
```
```bash
yarn
```

### 开始运行

##### 启动服务
```bash
npm start
```

##### 接口测试
```bash
npm test
```
###### 每次测试需要重新执行以上两条命令


### 具体需求

1. express 实现API
2. localhost://3000
3. user 表
msgid 自动递增整数（或者你可以使用SQLite自动创建的标准'rowid'）
status text
message text 
timestamp date and time 时间戳
4. server.js 创建数据库和表
数据库存储在 api.db 文件中 
server.js要确保库中的表为空的
5. http://localhost:3000/api/ 访问接口
6. GET 返回整个JSON数组
7. PUT  替换当前集合 正文中返回 REPLACE COLLECTION SUCCESSFUL
8. POST 新建集合 正文中返回“CREATE ENTRY SUCCESSFUL”
9. DELETE 删除集合  返回“DELETE COLLECTION SUCCESSFUL”
10. GET  /api/id  返回详情
11. PUT  /api/id  根据id 更新 返回“UPDATE ITEM SUCCESSFUL”。
12. DELETE  /api/id 根据id 删除 “DELETE ITEM SUCCESSFUL”。

13. client.js 使用 node http 模块 或者 Axios 测试 所有API
通过后打印 “ALL TESTS SUCCESSFUL”


CREATE TABLE user(
   msgid INTEGER PRIMARY KEY autoincrement,
   status TEXT,
   message TEXT,
   timestamp DATETIME default (datetime('now', 'localtime'))  
);
