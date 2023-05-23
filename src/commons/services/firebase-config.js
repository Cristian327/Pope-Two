import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import candidates from "../../information/data.json";
import { TABLES_STORE } from "../constans/tables-store";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyD0PpMvNAorqVlkOAA6524ip6q2NKFY4O4",
  authDomain: "pope-ee717.firebaseapp.com",
  projectId: "pope-ee717",
  storageBucket: "pope-ee717.appspot.com",
  messagingSenderId: "887496932755",
  appId: "1:887496932755:web:0ef198d36d7ff2fe3f7c66",
  measurementId: "G-ELCYZ6GW1M",
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
