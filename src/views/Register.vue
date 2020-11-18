<template>
  <main class="page-register">

    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg">
      <h1 class="main-title">Registro</h1>
      <p class="auth-intro">Regístrate en uocify para disfrutar de miles de canciones.</p>

      <form>
          <div class="form-group">
            <label class="form-label" for="username">Email</label>
            <input placeholder="Correo electrónico" type="email" id="email" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Contraseña</label>
            <input placeholder="Contraseña" type="password" id="password" class="form-control">
          </div>
          <button class="btn">Registrar</button>
      </form>

      <p class="auth-bottom">¿Ya tienes cuenta?   <router-link class="alink" to="/login">Inicia sesión</router-link></p>
    </section>

  </main>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'register',
  data () {
    return {
      // Completar
    }
  },
  methods: {
    register: function (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword('***completar***', '***completar***')
        .then(
          // Completar
        )
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss">
.page-register{
  display: flex;
  flex-direction: column;
  height: 100%;

  .main-title {
      margin-bottom: 20px;
  }
}
</style>
