const cloudinary = require('cloudinary').v2;
const config = require('../config/config');
const fs = require('fs');

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

function uploadImage(path) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(path, { folder: 'event5' }, function (
      error,
      result
    ) {
      console.log(result, error);
      if (error) {
        reject(error);
      }
      fs.unlink(path, (err) => {
        if (err) {
          reject(error);
          console.error(err);
        }
      });
      resolve(result.url);
    });
  });
}

module.exports = uploadImage;
