<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <p>{{ somethingElse }}</p>
    <p>{{ someLocalComputed }}</p>
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
    computed: {
      someLocalComputed: function() {
        return "someLocalComputed is still here!!";
      }
    },
    methods: {},
    watch: {},
    created(){},
    mounted(){},
  };
</script>

<style lang="scss" scoped>

</style>
