<template>
  <el-container>
    <el-aside width="300px">Aside</el-aside>
    <el-container>
      <el-header
        ><el-button type="primary" @click="logout">退出</el-button></el-header
      >
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      location.reload()
    },
  },
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
