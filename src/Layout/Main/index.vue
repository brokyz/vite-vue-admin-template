<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
}
</style>
