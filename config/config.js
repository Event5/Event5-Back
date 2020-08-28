require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  auth_jwt_secret: process.env.AUTH_JWT_SECRET,
  default_admin_password: process.env.DEFAULT_ADMIN_PASSWORD,
  default_organizer_password: process.env.DEFAULT_ORGANIZER_PASSWORD,
  public_api_key_token: process.env.PUBLIC_API_KEY_TOKEN,
  admin_api_key_token: process.env.ADMIN_API_KEY_TOKEN,
  sendgrid_api_key: process.env.SENDGRID_API_KEY,
  url_data: process.env.URL_DATA,
  azure_storage: {
    account: process.env.ACCOUNT,
    accountKey: process.env.ACCOUNTKEY,
  },
  cloudinary: {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  },
  tests: {
    token:
      process.env.TOKEN_TEST ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJKb3NlIiwiZW1haWwiOiJqb3NlQGdtYWlsLmNvbSIsInR5cGVfdXNlciI6ImFkbWluIiwiaWF0IjoxNTk4NTc3NzcwLCJleHAiOjE1OTg2NjQxNzB9.hWctN9gvWDgrvSo0teu26j6eF2TalWTafliIZ1phr18',
  },
};

module.exports = config;
