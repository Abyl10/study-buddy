import { makeObservable, action, observable } from "mobx";
import BaseStore from "../BaseStore";


export default class SigninStore extends BaseStore {

  constructor(authMock, authStore) {
    super();
    this.authStore = authStore;
    this.authMock  = authMock;
    makeObservable(this, {
      authStore: observable,
      authMock: observable,
      signIn: action,
    });
  }

  async signIn(username, password) {
    await this.makeRequest({
      request: () => this.authMock.signIn(username, password),
      success: () => {
        this.authStore.setAuthorized(true);
        console.log('signin success');
      },
      error: () => {
        this.error = 'signin error';
        console.log('signin error');
      }
    })
  }
}