<template>
  <div>
    <h1>HelloWorld: vuex/count</h1>
    <p>this.$store.getters.num: {{ this.$store.getters.num }}</p>
    <p>this.$store.state.count.num: {{ this.$store.state.count.num }}</p>
    <p>
      this.$store.getters["count/doubleNum"]:
      {{ this.$store.getters["count/doubleNum"] }}
    </p>
    <el-button type="primary" @click="add">add</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    add() {
      this.$store.dispatch("count/numAdd");
      console.log(this.$store);
    },
  },
};
</script>

<style lang="scss" scoped></style>
