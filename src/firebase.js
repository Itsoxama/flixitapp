// Import the functions you need from the SDKs you need

import * as asd from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMlDDhRpVrZ57MSmR4IKPIyUex1CoHtgU",
  authDomain: "flixit-55699.firebaseapp.com",
  projectId: "flixit-55699",
  storageBucket: "flixit-55699.appspot.com",
  messagingSenderId: "830799010064",
  appId: "1:830799010064:web:ad45b823a97fc94af1ad95"
};

// Initialize Firebase
 const app = asd.default.initializeApp(firebaseConfig);
 export default app