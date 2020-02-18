import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
      apiKey: "AIzaSyCPKR86TIEfRtsLQ7puPW8EPGrI5jfFOcw",
      authDomain: "code-b9c0c.firebaseapp.com",
      databaseURL: "https://code-b9c0c.firebaseio.com",
      projectId: "code-b9c0c",
      storageBucket: "code-b9c0c.appspot.com",
      messagingSenderId: "438941158391",
      appId: "1:438941158391:web:cc826fdd91bbee4d5e3cf2",
      measurementId: "G-4BGY1J3768"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}