//import firebase from 'firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

//const firebaseConfig = {
//    apiKey: "AIzaSyAPuPUGhHS2Ljxs0zLglhH7_EPvXP8hRRw",
//    authDomain: "pi-pets-donation.firebaseapp.com",
//    projectId: "pi-pets-donation",
//    storageBucket: "pi-pets-donation.appspot.com",
//    messagingSenderId: "90690991322",
//    appId: "1:90690991322:web:e535277e324b3503c6a1e3"
//  };

  const firebaseConfig = {
    apiKey: "AIzaSyBLAMLOwlW_rv3_CWDUt4ToL2GoMKW8CY4",
    authDomain: "pets-2022.firebaseapp.com",
    projectId: "pets-2022",
    storageBucket: "pets-2022.appspot.com",
    messagingSenderId: "345684180697",
    appId: "1:345684180697:web:193ba614f7c42d4734c8c8"
  }

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const auth = firebase.auth()

  const profileCollection = db.collection('profile')
  const animaisCollection = db.collection ('animais')

  export {
    db, auth, profileCollection, animaisCollection
  }
