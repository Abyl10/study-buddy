import {action, makeObservable, observable} from 'mobx';


export default class BaseStore {
  constructor() {
    this.loading = false;
    this.error = '';
    this.clear = action;
  }

  clear() {
    this.loading = false;
    this.error = '';
  }

  async makeRequest({request, success, error, onFinal}) {
    this.loading = true
    try {
      console.log('MAKE REQUEST')
      const res = await request();
      console.log("SUCCESS IN BASE STORE");
      console.log(JSON.stringify(res));
      if (res.status === 200) {
        success(res.data);
        this.loading = false;
      }
    } catch (e) {
      console.log('BaseStore makeRequest error: ', e);
      console.log(JSON.stringify(res));
      if (error) {
        error();
      }
      this.loading = false;
    }
    if (onFinal) {
      onFinal();
    }
  }

  setError(error) {
    this.error = error;
  }
}