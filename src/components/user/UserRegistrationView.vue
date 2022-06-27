<template>
  <header>
    <h1>User {{ title }}</h1>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </header>
  <main>
    <section>
      <input v-model.trim="formUser.name" placeholder="Name" required />
      <input v-model.number="formUser.age" placeholder="Age" type="number" required />
      <button @click="createOrUpdateUser(formUser)">{{ submitText }}</button>
    </section>
  </main>
</template>

<script>
import { userService } from '@/lib'
export default {
  name: 'UserRegistrationView',
  props: {
    uuid: String,
  },
  data() {
    return {
      title: this.uuid ? 'Update' : 'Registration',
      submitText: this.uuid ? 'Update' : 'Register',
      formUser: {},
    }
  },
  created() {
    if (this.uuid) {
      this.fetchUser(this.uuid)
    }
  },
  methods: {
    async fetchUser(uuid) {
      this.formUser = await userService.getUser(uuid)
    },
    async createOrUpdateUser(formUser) {
      await userService.createOrUpdateUser(formUser).data
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
  main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    display: flex;
    align-items: space-around;
    justify-content: center;
    flex-wrap: wrap;
    width: 15rem;
    padding: 3rem;
    margin-top: 1rem;
    border-radius: 3px;
    gap: 1rem;
    background-color: var(--blue);
  }
</style>
