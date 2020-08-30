require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  auth_jwt_secret: process.env.AUTH_JWT_SECRET,
  sendGrid: {
    sendgrid_api_key: process.env.SENDGRID_API_KEY,
    email: process.env.SENDGRID_EMAIL,
  },
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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzksInVzZXJuYW1lIjoicGV0ZXIiLCJlbWFpbCI6InBldGVyQGdtYWlsLmNvbSIsInR5cGVfdXNlciI6ImFkbWluIiwiaWF0IjoxNTk4NzMzNzAyLCJleHAiOjE1OTg4MjAxMDJ9.9zkum3OkrHECP5bpcQ5L96SBRdnWM9BBKwyKBeSGyOU',
    user: {
      username: 'peter',
      email: 'peter@gmail.com',
      password: '123',
      type_user: 'admin',
    },
  },
};

module.exports = config;
