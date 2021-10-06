import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUMrJe_qEZb0vbyLRmWg2oj5K0jodZiCw",
  authDomain: "jtk-store.firebaseapp.com",
  projectId: "jtk-store",
  storageBucket: "jtk-store.appspot.com",
  messagingSenderId: "169613491536",
  appId: "1:169613491536:web:14cbafafeabe3e55efc055"
};

const app = initializeApp(firebaseConfig);
export default app;