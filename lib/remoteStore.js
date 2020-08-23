// const request = require('request');

class RemoteStore {
  constructor(host, port) {
    this.URL = `http://${host}:${port}`;
  }
}

module.exports = RemoteStore;
