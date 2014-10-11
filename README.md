# Get this code at:

# http://tinyurl.com/hackathon14

# Setup

Sign up for a Salesforce developer account: 

https://developer.salesforce.com/en/signup?d=70130000000td6N


Go to My Settings -> Personal -> Reset My Security token

token arrives by email.

## Create a Connected App in Salesforce

Go to Settings -> Create -> Apps

Click 'New' under **Connected Apps**

- Enable Oauth
- Setup redirect URI, like: https://localhost:9000/oauth/callback
- Choose Oauth scopes
- Save


Now copy CONSUMER KEY (aka Client Id) and CONSUMER SECRET into your app.

Login with:

- SF username
- Password
- Security Token
- Consumer Key
- Consumer Secret
- Redirect URI

For per-user authentication look into Salesforce Oauth flow:

https://github.com/kevinohara80/nforce

or

https://github.com/ejholmes/restforce




