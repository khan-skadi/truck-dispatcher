import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

import { createFirestoreInstance } from "redux-firestore";
import store from "../store/store.js";

const fbConfig = {
  apiKey: "AIzaSyA4y8VjlODcq48s79crUx1eypGJ0o0L7pI",
  authDomain: "truck-dispatcher-6050d.firebaseapp.com",
  databaseURL: "https://truck-dispatcher-6050d.firebaseio.com",
  projectId: "truck-dispatcher-6050d",
  storageBucket: "truck-dispatcher-6050d.appspot.com",
  messagingSenderId: "399693021654",
  appId: "1:399693021654:web:1d74ce0279116e79e0a477",
  measurementId: "G-D21MTX0DNK",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

firebase.initializeApp(fbConfig);
export const db = firebase.firestore();

export default rrfProps;
