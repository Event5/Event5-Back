const axios = require('axios');

class RemoteStore {
  constructor(url) {
    this.URL = url;
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

  // query(table, query, join) {
  //   return this.req('POST', table + '/query', { query, join });
  // }

  async request(method, table, data) {
    let url = `${this.URL}/${table}/`;

    if (method === 'GET' && data) {
      url += data;
    }

    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  }
}

module.exports = RemoteStore;
