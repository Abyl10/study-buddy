import {makeAutoObservable, makeObservable} from 'mobx';

export default class AuthStore {
  loading;
  isAuthorized;
  username;

  constructor() {
    this.loading = false;
    this.isAuthorized = false;
    this.username = '';
    makeAutoObservable(this);
  }

  setAuthorized(val, username) {
    this.isAuthorized = val;
    this.username = username;
  }
}