<template>
  <header>
    <h1>Home</h1>
    <nav>
      <router-link to="/user-list">User List</router-link>
      <router-link to="/user-registration">User Registration</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
