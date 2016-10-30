var express = require("express");
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 1337;
var SERVER = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',function(req,res) {
    res.json({"msg": "Email Via Gmail App Created by A2K."});
});

var nodemailer = require("nodemailer");

var privateInfo = require("./private");

app.post('/sendEmail',function(req,res) {
    var body = req.body;
    var name = body.name;
    var email = body.email;
    var message = body.message;
    var subject = body.subject || "Email sent from noreply@noreply.com";
    var receivers = body.receivers || "akshaykadam0904@gmail.com";
    var text = body.text || "The email is sent from noreply@noreply.com\n\n" + name + "<" + email + ">\n\n" + message;
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
                to: receivers, // comma separated list of receivers
                subject: subject, // Subject line
                text: text
            }, function (error, response) {
                if (error) {
                    console.log(error);
                    res.json({"msg":"Error sending Email. Please check your Network Connection or try again later","success":"0"});
                } else {
                    console.log("Message sent: " + response.message);
                    res.json({"msg":"Email successfully sent to "+receivers,"success":"1"});
                }
        });
    }
    else res.json({"msg":"Please fill in all the parameters","success":"0"});
});

app.listen(PORT,SERVER,function(req,res) {
    console.log("Magic happening with Email Via Gmail App !! @ " + SERVER + ":" + PORT);
});