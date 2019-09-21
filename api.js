const CONSTANT = require('./Constant');

function userApi(app, db) {
    // 获取所有
    app.get('/api', function (request, response) {
        db.all("select * from user", function (err, res) {
            if (err) {
                console.log(err);
                return response.end('internal error');
            }
            res = res || []
            response.send(JSON.stringify(res));
        });

    })
    // 替换集合
    app.put('/api', function (request, response) {
        let users = request.body;

        db.run('delete from user')
        const stmt = db.prepare("INSERT INTO user(status, message) VALUES (?, ?)");
        users.forEach(item => {
            stmt.run(item.status, item.message);
        });
        stmt.finalize(function (err) {
            if (err) {
                console.log(err);
                return response.end('internal error');
            }
            response.send(CONSTANT.REPLACE_COLLECTION_SUCCESSFUL);
        });
    })
    // 新增集合
    app.post('/api', function (request, response) {
        const { status, message } = request.body;

        db.run(`INSERT INTO user (status, message) VALUES ('${status}', '${message}')`, function (err) {
            if (err) {
                console.log(err);
                return response.end('internal error');
            }
            response.send(CONSTANT.CREATE_ENTRY_SUCCESSFUL)
        });
    })
    // 删除集合
    app.delete('/api', function (request, response) {
        db.run('delete from user', function (err) {
            if (err) {
                console.log(err);
                return response.end('internal error');
            }
            response.send(CONSTANT.DELETE_COLLECTION_SUCCESSFUL)
        })
    })
    // 返回详情
    app.get('/api/:id', function (request, response) {
        db.get(`select * from user where msgid = '${request.params.id}'`, function (err, res) {
            if (err) {
                console.log(err);
                return response.end('internal error');
            }
            res = res || 'query no data';
            response.send(JSON.stringify(res));
        });
    })

    // 删除item
    app.delete('/api/:id', function (request, response) {
        db.run(`delete from user where msgid = '${request.params.id}'`, function (err, res) {
            if (err) {
                console.log(err);
                return response.end('internal error');
            }
            response.send(CONSTANT.DELETE_ITEM_SUCCESSFUL);
        });
    })

    // update item
    app.put('/api/:id', function (request, response) {
        const { status, message } = request.body
        db.run(`update user set status = '${status}',message = '${message}' where msgid = '${request.params.id}'`, function (err, res) {
            if (err) {
                console.log(err);
                return response.end('internal error');
            }
            response.send(CONSTANT.UPDATE_ITEM_SUCCESSFUL);
        });
    })
}

module.exports = userApi;


