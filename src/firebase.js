import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCzwWgtXQaB76K_jd_ssjU3Ys69-4UvEZ4',
  authDomain: 'uocify-uoc.firebaseapp.com',
  databaseURL: 'https://uocify-uoc.firebaseio.com',
  projectId: 'uocify-uoc',
  storageBucket: 'uocify-uoc.appspot.com',
  messagingSenderId: '681390493302',
  appId: '1:681390493302:web:d03f543b1a40a854c31957'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
