import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import candidates from "../../information/data.json";
import { TABLES_STORE } from "../constans/tables-store";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyD9rS2pPagLag5v5yvRyILtTduDI13d2Gk",
  authDomain: "pope-96ad7.firebaseapp.com",
  projectId: "pope-96ad7",
  storageBucket: "pope-96ad7.appspot.com",
  messagingSenderId: "703878004676",
  appId: "1:703878004676:web:8e48d382beb67f39ae2e91",
  measurementId: "G-LSD5C8HS8R",
};
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
getDatabase(app);

const database = getDatabase();
const postRef = ref(database, TABLES_STORE.POSTS);

onValue(
  postRef,
  (snapshot) => {
    !snapshot.exists() && set(postRef, candidates.data);
  },
  {
    onlyOnce: true,
  }
);
