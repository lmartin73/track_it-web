/**
 * Created by luthermartin-pers on 1/5/17.
 */
import TiUserAccount from './TIAuth/TiUserAccount'
import * as firebase from 'firebase'
// This variable has global scope and is used to manage the function of the currently authenticated user
var config = {
    apiKey: "AIzaSyCqfR9LAidTZVNlQAPfDIHT4jERy_u4-U4",
    authDomain: "trackit-62807.firebaseapp.com",
    databaseURL: "https://trackit-62807.firebaseio.com",
    storageBucket: "trackit-62807.appspot.com",
};
firebase.initializeApp(config);
var currentUser = new TiUserAccount;
var storageRef = firebase.storage().ref()
export default currentUser;
// export firebase;
// export default storageRef;