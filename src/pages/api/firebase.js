import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiAt3hvyk8g5-FVLI4L9dcVYj8A9F_vIo",
  authDomain: "styluxe-b4110.firebaseapp.com",
  projectId: "styluxe-b4110",
  storageBucket: "styluxe-b4110.appspot.com",
  messagingSenderId: "582569923785",
  appId: "1:582569923785:web:e2e6e158c106a531032918",
  databaseURL: process.env.DATA_BASE_URL,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);