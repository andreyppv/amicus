'use strict';
//Todo:Need to change
module.exports.authy = {
  apiKey: "",
  countryCode: 1,
  locale: "en",
  sandboxUrl: "http://sandbox-api.authy.com",
  productionUrl: "http://api.authy.com",
  via: "sms",
  accountSid:'',
  accountAuthtoken:'',
  clientPhoneNumber:'+12132635843',
  getAuthyUrl: function() {
      //return "http://api.authy.com";
	  return "http://api.authy.com";
  }
};

