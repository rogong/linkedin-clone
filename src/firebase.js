import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import  { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAM5UKxfJbpcBRzjxYOe7s9dwCFF_D6FRM",
  authDomain: "linked-clone-14c9b.firebaseapp.com",
  projectId: "linked-clone-14c9b",
  storageBucket: "linked-clone-14c9b.appspot.com",
  messagingSenderId: "1042064190611",
  appId: "1:1042064190611:web:8893c6349f8458b8ec7166"
};

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  
 



  export { auth, provider, app};
  export default db;
  