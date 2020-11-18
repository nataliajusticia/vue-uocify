<template>
  <section class="main-section box-auth">
    <img width="100" alt="uocify logo" loading="lazy" src="@/assets/icon.svg">
    <h1 class="main-title">Iniciar sesión</h1>
    <p class="box-auth__intro">Inicia sesión en uocify para disfrutar de miles de canciones.</p>

    <form @submit.prevent="login" class="box-auth__form">
      <div class="form-group">
        <label class="form-label" for="username">Email</label>
        <input placeholder="Correo electrónico" type="email" id="email" class="form-control" v-model="form.email">
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Contraseña</label>
        <input placeholder="Contraseña" type="password" id="password" class="form-control" v-model="form.password">
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
      form: {
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
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: 'Home' })
        })
        .catch(err => {
          this.error = err.message
        })
      // eslint-disable-next-line no-template-curly-in-string
      console.log(`Sesión iniciada correctamente con el correo: ${this.form.email}`)
    }
  }
}
</script>

<style lang="scss" >
</style>
