/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  port: 8000,
  isSandbox: false,
  isTwilioEnabled: false,
  sandGridApiKey:
    "",
  TWILIO_ACCOUNT_SID: "",
  TWILIO_AUTH_TOKEN:
    "",
  TWILIO_PHONE_NUMBER: "+12183924884",
  //MANDRILL
  MANDRILL_API_KEY: "",
  MANDRILL_FROM_EMAIL: "no-reply@amicuslending.com",
  env: {
    TOKEN_SECRET:
      "",
    REACT_APP_BASE_URL: "https://amicuslending.com",
    REACT_APP_ADMIN_BASE_URL: "https://lms-api.amicuslending.com",
  },
  tribe: {
    firstName: "Amicus",
    firstNameCaps: "AMICUS",
    name: "Amicus Lending LLC",
    addressLine1: "1920 Alcott Ave",
    addressLine2: "Chico, CA 95928",
    legalEmail: "legal@amicuslending.com",
    mailTo: "mailto: legal@amicuslending.com",
    email: "CustomerCare@amicusLending.com",
  },
};
