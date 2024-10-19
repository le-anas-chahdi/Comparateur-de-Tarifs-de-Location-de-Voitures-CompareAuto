import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Pour Firestore
import { getStorage } from "firebase/storage"; // Pour Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyBLj4T8a2QUGRUxhVX-kvj4QxslKh0ToVQ",
    authDomain: "comparetarifs-24a17.firebaseapp.com",
    projectId: "comparetarifs-24a17",
    storageBucket: "comparetarifs-24a17.appspot.com",
    messagingSenderId: "666177056601",
    appId: "1:666177056601:web:3dd4bfb85fbba6732c6648",
    measurementId: "G-JQXZYQEHXJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialisation Firestore
const storage = getStorage(app); // Initialisation Storage

export { auth, db, storage };
