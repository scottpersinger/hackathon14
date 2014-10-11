var nforce = require('nforce');

var org = nforce.createConnection({
  clientId: process.env['SF_OAUTH_CLIENT_ID'],
  clientSecret: process.env['SF_OAUTH_CLIENT_SECRET'],
  redirectUri: 'https://localhost:9000/oauth/callback',
  environment: 'production',
  mode: 'single'
});

org.authenticate({ username: process.env.SF_USERNAME, password: process.env.SF_PASSWORD + process.env.SF_TOKEN}, function(err, resp){
    if (err) {
    	console.log(err);
    } else {
    	org.getSObjects({}, function(err, resp) {
    		console.log("----------- CUSTOM OBJECTS ----------- ")
    		resp.sobjects.forEach(function(rec) {
    			if (rec.name.endsWith('__c')) {
    				console.log(rec.name);
    			}
    		});
    	});

    	org.query({ query: demoQ /*'select Id, Name, AccountNumber from Account limit 30'*/ }, function(err, resp){
			if(!err && resp.records) {
	    		resp.records.forEach(function(account) {
	        	//console.log(account.get('Name'));
	        	console.log(account._fields);
	    		});
			} else {
				console.log(err);
			}
	    });
    }
});

var demoQ = 'select Id, Notes__c, Sentiment__c from Meeting_Note__c';

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
