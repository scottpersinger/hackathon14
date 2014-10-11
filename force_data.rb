require 'restforce'

client = Restforce.new :username => ENV['SF_USERNAME'],
  :password       => ENV['SF_PASSWORD'],
  :security_token => ENV['SF_TOKEN'],
  :client_id      => ENV['SF_OAUTH_CLIENT_ID'],
  :client_secret  => ENV['SF_OAUTH_CLIENT_SECRET']

accounts = client.query("select Id, Name, AccountNumber from Account limit 30")

accounts.each do |account|
	puts account.Name
end

notes = client.query("select Id, Notes__c, Sentiment__c from Meeting_Note__c")
notes.each {|n| puts n.inspect}
