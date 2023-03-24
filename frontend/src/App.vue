

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/recipes">Recipes</router-link>
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'App',
};
</script>