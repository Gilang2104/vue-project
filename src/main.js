import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const app = createApp(App)

const store = createStore({
    state() {
        return {
            users: []
        }
    },
    getters: {
    users (state) {
    return state.users
        }
    },
    mutations: {
        addUser (state, user) {
            if (user.name !== undefined && typeof user.name ==='string') {
                state.users.push({
                    name: user.name,
                    age: user.age
                })
            }
        },
        removeUser (state, user) {
            if (user.name !== undefined && typeof user.name ==='string') {
                state.users = state.users.filter(u => u.name!== user.name)
            }
        },
        editUser (state, user) {
            if (user.name !== undefined && typeof user.name ==='string') {
                state.users = state.users.map(u => {
                    console.log(u)
                    if (u.name === user.name) {
                        u.age = user.age
                    }
                    return u
                })
            }
        }
    }
})

app.use(store).mount('#app')