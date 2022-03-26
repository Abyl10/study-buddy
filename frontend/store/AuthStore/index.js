import {action, makeAutoObservable, makeObservable} from 'mobx';
import BaseStore from "../BaseStore";

export default class AuthStore {
  loading;
  isAuthorized;

  constructor() {
    this.loading = false;
    this.isAuthorized = false;
    makeAutoObservable(this);
  }

  setAuthorized(val) {
    this.isAuthorized = val;
  }
}