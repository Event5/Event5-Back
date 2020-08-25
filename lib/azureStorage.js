const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require('@azure/storage-blob');
const config = require('../config/config');

// Enter your storage account name and shared key
const account = config.azure_storage.account;
const accountKey = config.azure_storage.accountKey;

// Use StorageSharedKeyCredential with storage account and account key
// StorageSharedKeyCredential is only available in Node.js runtime, not in browsers
const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net`,
  sharedKeyCredential
);

const containerGeneralName = 'event5container';

// async function createContainer() {
//   // Create a container
//   const containerName = containerGeneralName;
//   const containerClient = blobServiceClient.getContainerClient(containerName);
//   const createContainerResponse = await containerClient.create();
//   console.log(
//     `Create container ${containerName} successfully`,
//     createContainerResponse.requestId
//   );
// }

// createContainer();

async function uploadContent(image, imageName) {
  const containerClient = blobServiceClient.getContainerClient(
    containerGeneralName
  );

  const content = image;
  const blobName = imageName;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient.upload(
    content,
    content.length
  );
  console.log(
    `Upload block blob ${blobName} successfully`,
    uploadBlobResponse.requestId
  );
}

module.exports = uploadContent;
