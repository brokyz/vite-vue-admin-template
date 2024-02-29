<template>
  <el-container>
    <el-aside width="auto">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header
        ><el-button type="primary" @click="logout">退出</el-button></el-header
      >
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './Aside'
export default {
  name: 'Layout',
  components: { Aside },
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
  display: flex;
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
