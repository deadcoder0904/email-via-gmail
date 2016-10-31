# email-via-gmail [![Build Status](https://travis-ci.org/deadcoder0904/email-via-gmail.svg?branch=master)](https://travis-ci.org/deadcoder0904/email-via-gmail) [![npm version](https://badge.fury.io/js/email-via-gmail.svg)](https://badge.fury.io/js/email-via-gmail) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/deadcoder0904/email-via-gmail/issues)

[![NPM](https://nodei.co/npm/email-via-gmail.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/email-via-gmail/)

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

# npm package

## _NPM PACKAGE AVAILABLE HERE_ :point_right: [email-via-gmail](https://www.npmjs.com/package/email-via-gmail)