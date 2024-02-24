<template>
  <div style="display: flex; width: 100%">
    <div class="container">
      <h1>404</h1>
      <p>页面未找到</p>
      <p>对不起，您访问的页面不存在或已被移除。</p>
      <p><router-link to="/">返回首页</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: '404',
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 30px;
}

a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
</style>
