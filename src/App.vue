<template>
  <div id="new-user">
    <input type="text" placeholder="Tambahkan nama" id="name" ref="name">
    <input type="number" placeholder="Tambahkan umur" id="age" ref="age">
    <input type="submit" id="submit-user" @click="newUser" value="Submit">
  </div>
  <table id="list-user" class="table table-striped table-bordered">
    <tbody>
      <tr v-if="users == undefined || users.length === 0">
        <td>No data</td>
      </tr>
      <tr v-else v-for="user in users" :key="user.name" >
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
      </tr>
    </tbody>
  </table>
  <div id="delete-user">
    <input type="text" placeholder="Hapus nama" id="delName" ref="delName">
    <input type="submit" id="submit-user" @click="deleteUser" value="Submit">
  </div>
  <div id="edit-user">
    <input type="text" placeholder="Nama mana yang edit" id="editName" ref="editName">
    <input type="number" placeholder="Edit umur" id="editAge" ref="editAge">
    <input type="submit" id="submit-user" @click="editUser" value="Submit">
  </div>
</template>

<script>


export default {
  name: 'NewUser',
  data() {
    return {
      users: []
    }
  },
  methods: {
    newUser: function() {
      const n = this.$refs.name.value
      const a = this.$refs.age.value

      if (!n || !a) {
        return
      }

      this.$store.commit('addUser', {
        name: n,
        age: a
      })

      this.users = this.$store.getters.users
    },
    deleteUser: function() {
      const name = this.$refs.delName.value
      if (!name) {
        return
      }

      this.$store.commit('removeUser', { name: name })
      this.users = this.$store.getters.users
    },
    editUser: function() {
      const name = this.$refs.editName.value
      const age = this.$refs.editAge.value

      console.log(name, age)
      if (!name ||!age) {
        return
      }

      this.$store.commit('editUser', {
        name: name,
        age: age
      })
      this.users = this.$store.getters.users
    }
  }
}

</script>