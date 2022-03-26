export default class NetApi {
  constructor(http) {
    this.$http = http.client;
    console.log(this.$http);
  }

  async get(url, params) {
    try {
      return await this.$http.get(url, params);
    } catch (e) {
      console.log('HTTP get error: ', e);
    }
  }

  async post(url, params, body = {}) {
    try {
      return await this.$http.post(url, body, params);
    } catch (e) {
      console.log('HTTP post error: ', e);
    }
  }

  async put(url, params, body = {}) {
    try {
      return await this.$http.put(url, body, params);
    } catch (e) {
      console.log('HTTP put error: ', e);
    }
  }

  async patch(url, params, body = {}) {
    try {
      return await this.$http.patch(url, body, params);
    } catch (e) {
      console.log('HTTP patch error: ', e);
    }
  }

  async delete(url, params) {
    try {
      return await this.$http.delete(url, params);
    } catch (e) {
      console.log('HTTP DELETE Error', e);
      return await this.$http.delete(url, params);
    }
  }
}
