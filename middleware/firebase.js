var admin = require("firebase-admin");

var serviceAccount = require("../catfish-e3f50-firebase-adminsdk-nmq8r-59be5b2309.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://catfish-e3f50.firebaseio.com"
});

module.exports = {
    isAuthenticated: (req, res, next) => {
        var token = req.headers.authorization.split(' ')[1]
        admin.auth().verifyIdToken(token)
            .then(function(decodedToken) {
                let uid = decodedToken.uid;
                console.log(uid)
                next();
            }).catch(function(error) {
                console.log(error)
                res.status(401).json({
                    status: 401,
                    message: "Unauthenticated"
                });
            })
    }
}