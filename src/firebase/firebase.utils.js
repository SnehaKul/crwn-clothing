import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyWg2u_uCfWzu_Wcsw23C8OVWUG60KKWs",
    authDomain: "crwn-db-51f09.firebaseapp.com",
    databaseURL: 'https://crwn-db-51f09.firebaseio.com',
    projectId: "crwn-db-51f09",
    storageBucket: "crwn-db-51f09.appspot.com",
    messagingSenderId: "571553488914",
    appId: "1:571553488914:web:806434d92a3609909478cb",
    measurementId: "G-8PLER13136"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      try{
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
      }catch(error){
         console.log('error creating user ', error.message);
      }
    }
    return userRef;
  };

  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;