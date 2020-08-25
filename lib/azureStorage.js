// const {
//   BlobServiceClient,
//   StorageSharedKeyCredential,
// } = require('@azure/storage-blob');
// const config = require('../config/config');

// // Enter your storage account name and shared key
// const account = config.azure_storage.account;
// const accountKey = config.azure_storage.accountKey;

// // Use StorageSharedKeyCredential with storage account and account key
// // StorageSharedKeyCredential is only available in Node.js runtime, not in browsers
// const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
// const blobServiceClient = new BlobServiceClient(
//   `https://${account}.blob.core.windows.net`,
//   sharedKeyCredential
// );
