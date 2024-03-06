<template>
  <el-container>
    <el-aside width="auto">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Nav></Nav>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './Aside'
import Header from './Header'
import Main from './Main'
import Nav from './Nav'

export default {
  name: 'Layout',
  components: { Aside, Header, Main, Nav },
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
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  display: flex;
  flex-direction: column;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  display: flex;
  flex-direction: column;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
