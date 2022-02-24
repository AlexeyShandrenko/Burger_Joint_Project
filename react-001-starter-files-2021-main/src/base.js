import Rebase from "re-base";
import firebase from "firebase/app";
require('firebase/database')

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAF_cDeAOuZBpl4nAGUok79B_Pw31RxFvc",
    authDomain: "very-hot-burgers-1c560.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-1c560-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}
export default base