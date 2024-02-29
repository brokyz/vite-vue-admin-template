<template>
  <div class="header">
    <el-dropdown>
      <div class="avatar-box">
        <el-avatar :size="50">user</el-avatar>
        <i>username</i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-setting">应用设置</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" @click.native="logout"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      location.reload()
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
}

.avatar-box,
.el-dropdown {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 20px;
  .el-avatar {
    margin-right: 10px;
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
