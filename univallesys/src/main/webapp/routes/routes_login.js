  module.exports = function(app) {

  var user = {
    "credential": {
        "user": "exemplo@exemplo.com",
        "password": "123quatro5678",
        "error_message": "Email ou senha está errado"
    },
    "key": "d6f67bc92bbaf06ec44b828d0da4eda9"
};
    app.get('/univalle/login', function(req, res) {
        req.headers['if-none-match'] = 'no-match-for-this';
        var path = require('path');
        res.sendfile(path.resolve('./WEB-INF/views/auth/login.html'));
    });

    app.post('/univalle/check-credentials', function(req, res) {
       var username = req.body.user;
       var password = req.body.password;

       res.setHeader('Content-Type', 'application/json');

       if ((username == user.user) && (password == user.password)) {
            user.status = "HttpStatus.OK";
            res.end(JSON.stringify(user));
       }else{
            user.status = "HttpStatus.NO_CONTENT";
            res.end(JSON.stringify(user));
       }
   });
  };
