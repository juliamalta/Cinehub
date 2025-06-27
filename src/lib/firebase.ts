// lib/firebase.ts
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDB3QITiVKEzO0AOapf_CKuVb0entk_vwg',
    authDomain: 'cinehub-743f1.firebaseapp.com',
    projectId: 'cinehub-743f1',
    storageBucket: 'cinehub-743f1.firebasestorage.app',
    messagingSenderId: '418724839377',
    appId: '1:418724839377:web:0ba7539478674608a6aaf0',
    measurementId: 'G-FXK9VKXNSH',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
