# email-via-gmail

### Open a temporary Gmail account only to send emails. Check out this link

[Less Secure Apps in Gmail][a]

[Unlock Google Captcha][b]

[a]: https://www.google.com/settings/security/lesssecureapps "Less Secure Apps in Gmail"
[b]: https://accounts.google.com/DisplayUnlockCaptcha "Unlock Google Captcha"

### Also create ```private.js``` file in the root directory of the project and then ```npm install``` to install all dependencies

# private.js

```js

module.exports = {
	"private": {
		"gmail": {
	      "username": "<your_email>",
	      "password": "<your_password>"
	    }
	}
};

```

### Start your application with ```npm start```

### Most probably the application won't start & will give you an error regarding ```nodemailer```. If so, then install ```nodemailer@0.7.1``` & viola everything will work fine.