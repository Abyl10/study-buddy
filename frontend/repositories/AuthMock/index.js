import NetApi from "../NetApi";

export default class AuthMock extends NetApi {
  signInUrl = '/users/login/';
  signUpUrl = '/users/register/';

  constructor(http) {
    super(http);
  }

  async signIn(username, password) {
    try {
      console.log("started sign in")
      return this.post(this.signInUrl, {}, {
        username,
        password,
      });
    } catch (e) {
      console.log('AuthMock signIn error:' + JSON.stringify(e));
    }
  }

  async signUp(data) {
    try {
      return await this.props(this.sighUpUrl, {}, {
        params: data
      });
    } catch (e) {
      console.log('AtuhMock signUp error:' + JSON.stringify(e));
    }
  }
}