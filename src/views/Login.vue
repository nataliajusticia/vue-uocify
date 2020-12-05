<template>
  <section class="main-section box-auth">
    <img width="100" alt="uocify logo" src="@/assets/icon.svg">
    <h1 class="main-title">Iniciar sesión</h1>
    <p class="box-auth__intro">Inicia sesión en uocify para disfrutar de miles de canciones.</p>

    <form @submit.prevent="login" class="box-auth__form">
      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input placeholder="Correo electrónico" type="email" id="email" class="form-control" v-model="user.email">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Contraseña</label>
        <input placeholder="Contraseña" type="password" id="password" class="form-control" v-model="user.password">
      </div>
      <button type="submit" class="btn">Iniciar sesión</button>
    </form>

    <div v-if="error" class="alert">{{ error }}</div>

    <p class="box-auth__bottom">¿No tienes cuenta? <router-link class="link" to="/register">Regístrate</router-link></p>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push({ path: this.redirect || '/' }, onComplete => { }, onAbort => { })
        })
        .catch(error => {
          this.error = error.message
        })

      console.log(`Sesión iniciada correctamente con el correo: ${this.user.email}`)
    }
  }
}
</script>
