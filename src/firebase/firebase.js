import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz0NFCyPBXzH4PFjlTwTk3sNFzYBZHuD4",
  authDomain: "fimlyverse-2f597.firebaseapp.com",
  projectId: "fimlyverse-2f597",
  storageBucket: "fimlyverse-2f597.appspot.com",
  messagingSenderId: "660116922348",
  appId: "1:660116922348:web:23756acd8c4fe8db75eac9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;