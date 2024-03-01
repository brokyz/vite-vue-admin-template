<template>
  <el-container>
    <el-aside width="auto">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './Aside'
import Header from './Header'
import request from '@/utils/request.js'

export default {
  name: 'Layout',
  components: { Aside, Header },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      location.reload()
    },
  },
  created() {
    request({
      method: 'post',
      url: '/sys/login',
      params: {
        username: 'admin',
        password: 'admin',
      },
    }).then((res) => {
      console.log(res)
    })
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
  flex-direction: column;
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
