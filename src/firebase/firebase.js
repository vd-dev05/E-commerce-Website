import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyC5kc30_lftK44rAM8PcpIAS_bSD_gq4wM",
  authDomain: "e-com-8e496.firebaseapp.com",
  projectId: "e-com-8e496",
  storageBucket: "e-com-8e496.appspot.com",
  messagingSenderId: "957150258163",
  appId: "1:957150258163:web:d2b33e47d246b6ea65e886",
  databaseURL:"https://e-com-8e496-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)

