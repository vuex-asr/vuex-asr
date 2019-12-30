<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <p>{{ somethingElse }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "local Message",
        firstName: "local firstName",
        lastName: "local lastName",
        somethingElse: "jahoeee, this is it!",
      }
    },
    computed: {},
    methods: {},
    watch: {},
    created(){
      // console.log("this.$options.computed in created", {...this.$options.computed});
      // console.log("this.$options.data", this.$options.data);
      // console.log("this in created", {...this});
      //
      // // unset this.message;
      //
      // this.$options.data = null;
      // console.log("this.$options.data", this.$options.data);
    },
    mounted(){},
  };
</script>

<style lang="scss" scoped>

</style>
