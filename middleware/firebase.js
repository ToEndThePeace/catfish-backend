var firebase = require("firebase");
require("firebase/auth");
require("firebase/database");

//Initialize Firebase
var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
};

firebase.initializeApp(config);

module.exports = {
    isAuthenticated: (req, res, next) => {
        var user = firebase.auth().currentUser;
        if (user !== null) {
            req.user = user;
            next();
        } else {
            res.status(401).json({
                status: 401,
                message: "Unauthenticated"
            });
        }
    }
}