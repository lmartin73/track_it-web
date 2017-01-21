/**
 * Created by luthermartin-pers on 1/2/17.
 */
import * as firebase from 'firebase'




class TiUserAccount{




    loginAccountWithCompletion = function (email, password, callback) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
            if(callback != null){
                //TODO set the currentUser object.
                callback(user,null)

            }

        }).catch(function (error) {
            if(error){
                if(callback != null){
                    callback(null,error)
                }

            }
        })
    };

    createUserAccountWithCompletion = function (email, password, callback) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
            if(callback != null){
                firebase.auth().onAuthStateChanged(function(user) {
                    this.user = user;
                    callback(user, null)
                });



            }
        }).catch(function (error) {
            if(error){
                if(callback != null){
                    callback(null, error);
                }
            }
        })
    };

    signOutUser = function (callback) {
        firebase.auth().signOut().then(function () {
            //signout successful
            callback(null);
        }).then(function (error) {
            callback(error);
        });
    }

    sendPasswordResetEmailWithCompletion = function (email) {
        firebase.auth().sendPasswordResetEmail(email)

    }

    changePasswordWithCompletion(password, callback){
        var currentUser = firebase.auth().currentUser;
        currentUser.updatePassword(password).then(function () {
            //update successful
            callback(null);
        }).catch(function (error) {
            //update unsucessful
            callback(error);
        })
    }



}

export default TiUserAccount