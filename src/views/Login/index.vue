<template>
  <div style="display: flex; width: 100%">
    <div class="login-container">
      <h2>登录</h2>
      <form>
        <input
          type="text"
          placeholder="用户名"
          required
          v-model="this.username"
        />
        <input
          type="password"
          placeholder="密码"
          required
          v-model="this.password"
        />
        <button type="submit" @click="login">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: 'admin',
      password: 'admin',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('user/login')
      console.log('push')
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
