<template>
  <div class="header">
    <Menu></Menu>
    <Avatar class="avatar"></Avatar>
  </div>
</template>

<script>
import Avatar from './Avatar'
import Menu from './Menu'
export default {
  name: 'Header',
  components: { Avatar, Menu },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
}

.avatar {
  margin-left: auto;
}
</style>
