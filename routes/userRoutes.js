const express    = require("express");
const bodyParser = require("body-parser");
const firebase   = require("../middleware/firebase");

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


router.post("/register", (req, res) =>{
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    res.send("Registered!");
});
router.post("/login", (req, res) => {
    //  Pull email and password from the request body
    const email = req.body.email;
    const pass  = req.body.pass;

    if (firebase.auth().currentUser) {
        // If you're already logged in =>
        
    } else {
        // If you're not logged in =>
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(error => {
            // Login Error Code
            var errorCode    = error.code;
            var errorMessage = error.message;

            if (errorCode === "auth/wrong-password") {
                alert('Wrong password');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        })
    }
    res.send("logged in");
});



module.exports = router;