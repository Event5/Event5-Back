const axios = require('axios');
const config = require('../config/config');

class RemoteStore {
  constructor() {
    this.URL = config.url_data;
  }

  getAll(table) {
    return this.request('GET', table);
  }

  get(table, value) {
    return this.request('GET', table, value);
  }

  create(table, data) {
    return this.request('POST', table, data);
  }

  update(table, data) {
    return this.request('PUT', table, data);
  }

  async request(method, table, data) {
    try {
      let url = `${this.URL}/${table}/`;

      if (method === 'GET' && data) {
        url += data;
      }
      if (method === 'PUT' && data) {
        url += data.id;
      }

      let response;
      if (method === 'GET') {
        response = await axios({
          method,
          url,
        });
      } else {
        response = await axios({
          method,
          url,
          data,
        });
      }

      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
}

module.exports = RemoteStore;
