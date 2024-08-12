module.exports.twilioConfig = {
	getTwilioConfig: getTwilioConfig
};

// bill.TODO: modified
function getTwilioConfig() {
	const twilioConfig = {
		token: "",
		accountId: "",
		verifySID: "",
		createVerificationUrl: "",
		twilioBaseUrl: "https://verify.twilio.com/v2/Services",
		isEnabled: false
	};
	twilioConfig.createVerificationUrl = `${twilioConfig.twilioBaseUrl}/${twilioConfig.verifySID}/Verifications`;

	if( process.env.NODE_ENV === "staging" ) {
		twilioConfig.isEnabled = false;
	} else if( process.env.NODE_ENV === "production" ) {
		twilioConfig.isEnabled = false;
	} else {
		twilioConfig.isEnabled = false;
	}

	return twilioConfig;
}
