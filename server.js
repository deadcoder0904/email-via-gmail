var express = require("express");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 1337;
var BASE_URL = process.env.PORT ? "https://email-via-gmail-0904.herokuapp.com/" : "localhost:1337";

var privateInfo = require("./private") || {
    "private": {
        "gmail": {
          "username": process.env.GMAIL_USERNAME,
          "password": process.env.GMAIL_PASSWORD
        }
    }
};

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',function(req,res) {
    res.json({"msg": "Email Via Gmail App Created by A2K."});
});

app.post('/sendEmail',function(req,res) {
    var body = req.body;
    var name = body.name;
    var email = body.email;
    var message = body.message;

    if(name !== undefined && email !== undefined && message !== undefined && name !== "" && email !== "" && message !== ""){
        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "Gmail",
            auth: {
                user: privateInfo.private.gmail.username,
                pass: privateInfo.private.gmail.password
            }
        });
        
        smtpTransport.sendMail({
                from: "< " + (privateInfo.private.gmail.username) + " >", // sender address
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
    }
    else res.json({"msg":"Please fill in all the parameters","success":"0"});
});

app.listen(PORT,function(req,res) {
    console.log("Magic happening with Email Via Gmail App !! @ " + BASE_URL);
});