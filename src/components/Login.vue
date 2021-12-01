<template>
  <div>
      <h1>Log in</h1>
      <div v-if="this.$route.query.signupsuccess" class="alert alert-success">Thanks for signing up, please log in now.</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>