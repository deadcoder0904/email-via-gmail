# email-via-gmail

### Open a temporary Gmail account only to send emails. Check out this link

[Less Secure Apps in Gmail][a]

[a]: https://www.google.com/settings/security/lesssecureapps "Less Secure Apps in Gmail"

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