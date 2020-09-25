import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';
import store from '@/store';
import { User } from '@/store/data-types';
import { Auth } from 'aws-amplify';

@Module({
  namespaced: true,
  name: 'Users',
  store,
  dynamic: true
})
class UserModule extends VuexModule {
  isAuthenticated: boolean = false;
  isRegistered: boolean = false;
  isConfirmed: boolean = false;
  authError: string = '';

  @Mutation
  setUser(user: User) {
    this.isAuthenticated = !!user;
  }
  @Mutation
  setRegister(isRegistered: boolean) {
    this.isRegistered = isRegistered;
  }
  @Mutation
  setConfirmed(isConfirmed: boolean) {
    this.isConfirmed = isConfirmed;
  }
  @Mutation
  setAuthError(error: string) {
    this.authError = error;
  }

  @Action
  async register({ email = '', password = '' }) {
    try {
      await Auth.signUp({
        username: email,
        password
      });
      this.setRegister(true);
    } catch (e) {
      this.setAuthError(e.message);
    }
  }
  @Action
  async confirmRegistration({ email = '', code = '' }) {
    try {
      await Auth.confirmSignUp(email, code);
      this.setConfirmed(true);
    } catch (e) {
      this.setAuthError(e.message);
    }
  }
  @Action
  async login({ email = '', password = '' }) {
    try {
      const user = await Auth.signIn(email, password);
      this.setUser(user);
    } catch (e) {
      this.setAuthError(e.message);
    }
  }
  @Action
  async logout() {
    const emptyState: User = {
      isAuthenticated: false,
      isRegistered: false,
      isConfirmed: false,
      authError: ''
    };
    await Auth.signOut();
    this.setUser(emptyState);
  }
  @Action
  clearAuthError() {
    this.setAuthError('');
  }
}

export default getModule(UserModule);
