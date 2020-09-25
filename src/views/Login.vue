<template>
  <div class="login">
    <h1>Login</h1>
    <b-form @submit.prevent="login">
      <b-form-input v-model="email" type="email" placeholder="Email" />
      <b-form-input
          v-model="password"
          type="password"
          placeholder="Password"
      />
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import user from '@/store/modules/user'
import { EVENTS_PATH } from "@/utils/constants";

@Component
export default class Login extends Vue {
  email: string = '';
  password: string = '';

  async login() {
    await user.login({ email: this.email, password: this.password })
    if (user.isAuthenticated && !user.authError) {
      this.$router.push(EVENTS_PATH);
    }
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
