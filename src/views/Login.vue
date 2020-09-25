<template>
  <div class="login">
    <h1>Login</h1>
    <b-form class="form" @submit.prevent="login">
      <b-form-input v-model="email" type="email" placeholder="Email" />
      <b-form-input
          v-model="password"
          type="password"
          placeholder="Password"
      />
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
    <a class="form-link" @click="gotoRegisterPage">Don't have an account? Register</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import user from '@/store/modules/user'
import { EVENTS_PATH, REGISTER_PATH } from "@/utils/constants";

@Component
export default class Login extends Vue {
  email: string = '';
  password: string = '';

  async login() {
    await user.login({ email: this.email, password: this.password })
    if (user.isAuthenticated && !user.authError) {
      await this.$router.push(EVENTS_PATH);
    }
  }

  gotoRegisterPage(){
    this.$router.push(REGISTER_PATH);
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-ts.scss';
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
