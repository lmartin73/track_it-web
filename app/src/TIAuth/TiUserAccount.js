/**
 * Created by luthermartin-pers on 1/2/17.
 */
import * as firebase from 'firebase'
import {currentUserInfo} from "./../staticDefs"
import TiUserInfo from "./TiUserInfo.js"
import { Router, browserHistory } from 'react-router';




class TiUserAccount{

    loginAccountWithCompletion = function (email, password, callback) {


        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

          // ...
          if(error != null){
            callback(null,error);
          }

        });

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            this.user = user;
            currentUserInfo.setUser(user,(error)=>{

                    callback(user,error);
            })

          } else {
            // No user is signed in.
            browserHistory.push('/auth')
          }
        }.bind(this));

    };

    createUserAccountWithCompletion = function (email, password, firstName, lastName, callback) {

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
            firebase.auth().onAuthStateChanged(function(user) {
                 if (user) {
//                   this.user = user;
                   currentUserInfo.setUser(user,(error)=>{
                        if(error == null){
                            currentUserInfo.setFirstName(firstName);
                            currentUserInfo.setLastName(lastName);
                            currentUserInfo.setProfileEmail(email);
                        }
                        callback(user,error);
                   })

                 } else {
                   // No user is signed in.
                    browserHistory.push('/auth')
                 }
            }.bind(this));
        }).catch(function (error) {
           if(error){
               if(callback != null){
                   callback(null, error);
               }
           }
       });




    };

    signOutUser = function (callback) {
        firebase.auth().signOut().then(function () {
            //signout successful
            if(callback != null){
                callback(null);
            }

        }).then(function (error) {
            if(callback != null){
                callback(error);
            }

        });
    }

    sendPasswordResetEmail = function (email, callback) {
       firebase.auth().sendPasswordResetEmail(email).then(function(){
            //email sent
            callback(null)
       }, function(error){
            //error sending email.
            callback(error)
       })

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

export default TiUserAccount;