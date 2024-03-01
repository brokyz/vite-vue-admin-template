<template>
  <el-menu
    class="el-menu-aside"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <div class="web-name">
      <i>Template</i>
    </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <i
      class="el-icon-s-unfold fold-icon"
      v-if="isCollapse"
      @click="isCollapse = !isCollapse"
    ></i>
    <i
      class="el-icon-s-fold fold-icon"
      v-else
      @click="isCollapse = !isCollapse"
    ></i>
  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="scss" scoped>
.web-name {
  height: 60px;
  line-height: 60px;
  i {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
  }
}

.el-menu-aside {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.el-menu-aside:not(.el-menu--collapse) {
  width: 240px;
}

.fold-icon {
  margin-top: auto;
  margin-bottom: 20px;
  font-weight: lighter;
  font-size: 25px;
  cursor: pointer;
}
</style>
