
var http = require("http")
// var querystring = require("querystring")
// const queryString = require('query-string');
const sendRequest = async (options) => {
  return new Promise((resolve, reject) => {
    options.headers = {
      'Content-Encoding': 'identity',
      "content-type": "application/json"
    }
    options.json =  true
    const h = http.request(options, (res) => {
      res.setEncoding('utf-8');
      res.on('data', function (chunk) {
        resolve(chunk)
      });
      
    })
    h.end(JSON.stringify(options.data))
  })
}
(async () => {
  try {
    // const getAll = await sendRequest({
    //   hostname: 'localhost',
    //   port: 3000,
    //   method: 'get',
    //   path: '/api',
    // })
    // const newUser = await sendRequest({
    //   hostname: 'localhost',
    //   port: 3000,
    //   method: 'POST',
    //   path: '/api',
    //   data: {
    //     status: 'status12',
    //     message: 'message12'
    //   }
    // })·
    // const replaseAll = await sendRequest({
    //   hostname: 'localhost',
    //   port: 3000,
    //   method: 'PUT',
    //   path: '/api',
    //   data: {
    //     users:[
    //       {status: 'status1', message: 'message1'},
    //       {status: 'status2', message: 'message2'},
    //     ]
    //   }
    // })
    // const clearAll = await sendRequest({
    //   hostname: 'localhost',
    //   port: 3000,
    //   method: 'DELETE',
    //   path: '/api',
    // })
  } catch (error) {
    
  }
})()
