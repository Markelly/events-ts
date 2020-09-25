<template>
  <div class="register">
    <h1>Register</h1>
    <b-form v-if="step === steps.register" class="form" @submit.prevent="register">
      <b-form-input v-model="email" type="email" placeholder="Email" />
      <b-form-input
          v-model="password"
          type="password"
          placeholder="Password"
      />
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
    <b-form v-if="step === steps.confirm" class="form" @submit.prevent="confirm">
      <b-form-input v-model="email" type="email" placeholder="Email" />
      <b-form-input v-model="code" placeholder="Code" />
      <b-button type="submit" variant="primary">Confirm</b-button>
    </b-form>
    <a class="form-link" @click="gotoLoginPage">Already have an account? Login</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import user from '@/store/modules/user';
import { EVENTS_PATH, LOGIN_PATH } from "@/utils/constants";

const steps = {
  register: "REGISTER",
  confirm: "CONFIRM"
};

@Component
export default class Register extends Vue {
  email: string = '';
  password: string = '';
  code: string = '';
  steps: object = {...steps};
  step: string = steps.register;

  async register() {
    await user.register({ email: this.email, password: this.password });
    if (user.isRegistered) {
      this.step = this.steps.confirm;
    }
  }

  async confirm() {
    await user.confirmRegistration({ email: this.email, code: this.code });
    await user.login({ email: this.email, password: this.password });
    if (user.isRegistered) {
      this.$router.push(EVENTS_PATH);
    }
  }

  gotoLoginPage(){
    this.$router.push(LOGIN_PATH);
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-ts.scss';
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
