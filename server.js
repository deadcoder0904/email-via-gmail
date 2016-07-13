var express = require("express");
var nodemailer = require("nodemailer");
var privateInfo = require("./private");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/sendEmail',function(req,res) {
    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: privateInfo.private.gmail.username,
            pass: privateInfo.private.gmail.password
        }
    });
    var body = req.body;
    var name = body.name;
    var email = body.email;
    var message = body.message;
    console.log(name + " " + email + " " + message);
    smtpTransport.sendMail({
            from: "< " + privateInfo.private.gmail.username + " >", // sender address
            to: "akshaykadam0904@gmail.com", // comma separated list of receivers
            subject: "Email sent from akshaykadam.me", // Subject line
            text: "The email is sent from akshaykadam.me\n\nMy name is " + name + " & email is " + email + " \n\n" + message// plaintext body
        }, function (error, response) {
            if (error) {
                console.log(error);
                res.json({"msg":"Error sending Email. Please check your Network Connection or try again later","success":"0"});
            } else {
                console.log("Message sent: " + response.message);
                res.json({"msg":"Email successfully sent to akshaykadam0904@gmail.com","success":"1"});
            }
    });
});

app.listen('1337',function(req,res) {
    console.log("Magic happening @ http://localhost:1337");
});