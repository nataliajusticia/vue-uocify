<template>
    <header>
    <nav class="navbar">
      <div class="navbar__brand">
        <router-link class="navbar__logo" to="/">
          <img src="@/assets/logo.svg" width="150" height="40" alt="uocify logo" loading="lazy" class="d-none d-sm-block">
          <img src="@/assets/icon.svg" width="40" height="40" alt="uocify logo" loading="lazy" class="d-sm-none">
        </router-link>

        <SearchBar />
      </div>

      <div class="navbar__user" v-if="isLoggedIn">
        <span class="user-name d-none d-sm-block">{{ currentUser }}</span>
        <span class="user-icon"><fa-icon icon="user" /></span>
        <a class="signout-icon link" @click.prevent="logOut"><fa-icon icon="sign-out-alt" /></a>
      </div>

      <div class="navbar__user" v-else>
        <span class="d-none d-sm-block user-login"><router-link to="/login" class="link">Iniciar sesión</router-link></span>
        <span class="d-none d-sm-block"><router-link to="/register" class="link">Registrar</router-link></span>
        <router-link to="/login" class="signin-icon link d-sm-none" aria-label="Log in"><fa-icon icon="sign-in-alt" /></router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import firebase from 'firebase'

export default {
  name: 'Header',
  components: {
    SearchBar
  },
  data () {
    return {
      isLoggedIn: null,
      currentUser: ''
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
        this.currentUser = user.email
      } else {
        this.isLoggedIn = false
      }
    })
  },
  methods: {
    logOut () {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push({ path: this.redirect || '/' }, onComplete => { }, onAbort => { })
        })
      })
    }
  }
}
</script>
