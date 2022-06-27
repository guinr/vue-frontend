<template>
  <header>
    <h1>User List</h1>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </header>
  <main>
    <ul>
      <li
        :key="user.uuid"
        v-for="user in users">
        <section>
          <span>Name: {{ user.name }}</span>
          <span>Age: {{ user.age }}</span>
        </section>
        <section>
          <button @click="editUser(user.uuid)">EDIT</button>
          <button class="delete" @click="deleteUser(user.uuid)">DELETE</button>
        </section>
      </li>
    </ul>
    <h4 v-if="users.length === 0">No users found =(</h4> 
  </main>
</template>

<script>
import { userService } from '@/lib'

export default {
  name: 'UserListView',
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      this.users = await userService.getUsers()
    },
    editUser(uuid) {
      this.$router.push(`/user-update/${uuid}`)
    },
    async deleteUser(uuid) {
      await userService.deleteUser(uuid)
      this.users = this.users.filter(user => user.uuid !== uuid)
    },
  },
}
</script>

<style scoped>
  main {
    padding: 1rem;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 3px;
    font-weight: bold;
    background-color: var(--component-bg);
  }

  section {
    display: flex;
    gap: 1rem;
  }

  button {
    font-weight: bold;
    color: var(--white);
    background-color: var(--blue);
    cursor: pointer;
  }

  .delete {
    background-color: var(--red);
  }
</style>
