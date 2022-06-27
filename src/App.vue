<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  :root {
    --white: #eee;
    --black: #333;
    --component-bg: #ebebeb;
    --red: #f44336;
    --blue: #3f51b5;
  }

  body {
    margin: 0;
  }

  body * {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header {
    color: var(--white);
    background-color: var(--blue);
    padding: 1rem 1rem 0 1rem;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
    border-top: 1px solid var(--white);
    background-color: var(--blue);
  }

  nav a {
    color: var(--white);
    text-decoration: none;
    font-weight: bold;
  }

  button, input {
    border: none;
    border-radius: 3px;
    padding: 8px 12px;
    cursor: pointer;
  }

  button:active {
    opacity: .9;
  }
</style>
