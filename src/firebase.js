import firebase from 'firebase'

var firebaseConfig = {
  // aquí irá la configuración
}

const app = firebase.initializeApp(firebaseConfig)

export const db = app.database()
