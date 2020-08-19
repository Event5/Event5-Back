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
};

module.exports = config;
