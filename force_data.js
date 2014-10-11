var nforce = require('nforce');

var org = nforce.createConnection({
  clientId: process.env['SF_OAUTH_CLIENT_ID'],
  clientSecret: process.env['SF_OAUTH_CLIENT_SECRET'],
  redirectUri: 'http://localhost:3000/oauth/_callback',
  environment: 'production',
  mode: 'single'
});

org.authenticate({ username: process.env.SF_USERNAME, password: process.env.SF_PASSWORD + process.env.SF_TOKEN}, function(err, resp){
    if (err) {
    	console.log(err);
    } else {
    	var accounts = org.query({ query: 'select Id, Name, AccountNumber from Account limit 30' }, function(err, resp){
			if(!err && resp.records) {
	    		resp.records.forEach(function(account) {
	        	console.log(account.get('Name'));
	    		});
			} else {
				console.log(err);
			}
	    });
    }
});
