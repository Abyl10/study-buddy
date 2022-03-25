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
}