<template>
  <div class="header">
    <Avatar></Avatar>
  </div>
</template>

<script>
import Avatar from './Avatar'
export default {
  name: 'Header',
  components: { Avatar },
}
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
}
</style>
