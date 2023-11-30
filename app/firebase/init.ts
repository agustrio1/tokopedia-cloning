import { getAuth, User as FirebaseUser, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

export type User = FirebaseUser;

// Konfigurasi Firebase Anda
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_Id
};

const app = initializeApp(firebaseConfig);

// Dapatkan instance auth setelah inisialisasi aplikasi
const auth = getAuth(app);

export { auth, onAuthStateChanged,};