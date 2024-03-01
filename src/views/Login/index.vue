<template>
  <div style="display: flex; width: 100%">
    <div class="login-container">
      <h2>登录</h2>
      <form @submit.prevent="login">
        <input type="text" placeholder="用户名" required v-model="username" />
        <input type="password" placeholder="密码" required v-model="password" />
        <button type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import NProgress from 'nprogress' // progress bar
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('user/login', {
        username: this.username,
        password: this.password,
      })
      console.log('pushed to /')
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 300px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 10% auto auto;
}

.login-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-container form {
  display: flex;
  flex-direction: column;
}

.login-container input {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
}

.login-container button {
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

.login-container button:hover {
  background-color: #45a049;
}
</style>
