import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB20gLAXq6xZRnLoM-86UaN1zti7rZdZKM",
    authDomain: "syncee-test-75725.firebaseapp.com",
    projectId: "syncee-test-75725",
    storageBucket: "syncee-test-75725.appspot.com",
    messagingSenderId: "851280051337",
    appId: "1:851280051337:web:2925b972657559fc7a9a58"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot);

  if(!userSnapshot.exists()){
  const {displayName, email} = userAuth;
  const createdAt = new Date();
  try {
    await setDoc(userDocRef, {
      displayName, email, createdAt
    });
  } catch (error) {
    console.log('Error has occurred: ',  error.message);
  }
  }
  return userDocRef;
}

