var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var title = req.query.title
    var msg = req.query.msg
    var token = req.query.token
    var notification = {
        "tokens": [token],
        "profile": profile_tag,
        "notification": {
            "title": title,
            "message": msg,
            "android": {
                "title": title,
                "message": msg
            },
            "ios": {
                "title": title,
                "message": msg
            }
        }
    }
    ionicPushServer(credentials, notification);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.send('OK Get 200')
});

module.exports = router;