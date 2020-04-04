var firebase = require("firebase/app");
require("firebase/auth");

/* var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
}; */

var firebaseConfig = {
  apiKey: "AIzaSyCEXUhXJVRc9xHJXaWsw1i2A2991pKPhAc",
  authDomain: "catfish-e3f50.firebaseapp.com",
  databaseURL: "https://catfish-e3f50.firebaseio.com",
  projectId: "catfish-e3f50",
  storageBucket: "catfish-e3f50.appspot.com",
  messagingSenderId: "386152843242",
  appId: "1:386152843242:web:2a29b8d71bd6f4523a1493",
  measurementId: "G-PRTF4VLV7G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name, "banana");

module.exports = {
  isAuthenticated: (req, res, next) => {
    var user = firebase.auth().currentUser;
    if (user !== null) {
      req.user = user;
      next();
    } else {
      res.redirect("/login");
    }
  }
};
