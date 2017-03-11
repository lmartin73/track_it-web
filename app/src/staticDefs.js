/**
 * Created by luthermartin-pers on 1/5/17.
 */
//import TiUserInfo from './TIAuth/TiUserInfo';

import TiUserAccount from './TIAuth/TiUserAccount';
import TiUserInfo from "./TIAuth/TiUserInfo.js"

import * as firebase from 'firebase'
// This variable has global scope and is used to manage the function of the currently authenticated user
var config = {
    apiKey: "AIzaSyCqfR9LAidTZVNlQAPfDIHT4jERy_u4-U4",
    authDomain: "trackit-62807.firebaseapp.com",
    databaseURL: "https://trackit-62807.firebaseio.com",
    storageBucket: "trackit-62807.appspot.com",
};
firebase.initializeApp(config);


//export const dataRef = firebases
export const storageRef = firebase.storage().ref();
export const currentUserInfo = new TiUserInfo;
export const currentUserAccount = new TiUserAccount;
export const databaseRef = firebase.storage().ref();
