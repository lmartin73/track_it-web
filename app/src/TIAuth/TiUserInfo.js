/**
 * Created by luthermartin-pers on 1/6/17.
 */
import * as firebase from 'firebase'
import {storageRef, currentUserInfo, currentUserAccount, databaseRef } from './../staticDefs'

class TiUserInfo{

//User information reatime database paths

    // Class declarations
    USERDATAPATH = "users"
    USERPHONEPATH = "phone"
    USERADDRESSPATH = "address"
    USEREMAILPATH = "email"
    USERFIRSTNAMEPATH = "firstName"
    USERLASTNAMEPATH = "lastName";





    //path to user profile photos
    PROFILEIMAGEPATH = "users/photos/"
    MAXPHOTOSIZE = 1 * 2048 * 2048

    constructor(){
        this.uid = null;
        this.firstName = null;
        this.lastName = null;
        this.address = null;
        this.phone = null;
        this.email = null;
        this.photoUrl = null;

        this.userPhotoStorageRef = "";
        this.userDataRef = "";
        this.isInitialized = false;


    }

    setUser = function(user, callback){
        this.uid = user.uid

        var error = "Failed to set user";
        if(this.uid != null){
            this.userPhotoStorageRef = storageRef.child(this.PROFILEIMAGEPATH + "/" + user.uid);
            this.userDataRef = firebase.database().ref(this.USERDATAPATH + "/" + user.uid);
            this.isInitialized = true;
            error = null;
            this.downloadUserDataWithCompletion(()=>{
                callback();
            })

        }


         callback(error);

    }

    hasDataCached = function (){
    console.log(this)
        if(this.USERPHONEFLAG &&
               this.USERADDRESSFLAG &&
               this.USEREMAILFLAG &&
               this.USERFIRSTNAMEFLAG &&
               this.USERLASTNAMEFLAG){

            return true;
        }else{
            return false;
        }
    }

    
    setFirstName = function (name) {
        this.firstName = name;
        this.userDataRef.child(this.USERFIRSTNAMEPATH).set(name);
    }

    setProfileEmail = function (email) {
        this.email = email;
        this.userDataRef.child(this.USEREMAILPATH).set(email);
    }

    getFirstName = function () {
        return this.firstName;
    }

    setLastName = function(name){
        this.lastName = name;
        this.userDataRef.child(this.USERLASTNAMEPATH).set(name);
    }

    getLastName = function () {
        return this.lastName;
    }

    getEmail = function() {
        return this.email;
    }

    setPhone = function (phone, type) {
        this.userDataRef.child(this.USERPHONEPATH).set({
            phone: phone,
            type: type
        });
    }

    getPhone = function () {
        return this.phone;
    }


    setAddress = function (street1,
                           street2,
                           city,
                           state,
                           zip,
                           country) {

        this.userDataRef.child(this.USERADDRESSPATH).set({
            street1: street1,
            street2: street2,
            city: city,
            state: state,
            zip: zip,
            country: country

        });
    }

    getAddress = function () {
        return this.address;
    }


    uploadPhotoWithCompletion = function(photoFilePath, callback){
        this.userPhotoStorageRef.put(photoFilePath).then(function(snapshot){
            //upload successful
            callback(null);
        }).catch(function(error){
            callback(error);
        })
    }

    downloadPhotoWithCompletion = function (callback) {
        this.userPhotoStorageRef.getDownloadURL().then(function (url) {
            //successfull download
            this.photoUrl = url;
            callback(url,null);
        }).catch(function (error) {
            callback(null,error);
        })
    }

    getPhoto = function(){
        return this.photoUrl;
    }

    USERPHONEFLAG = false
    USERADDRESSFLAG = false
    USEREMAILFLAG = false
    USERFIRSTNAMEFLAG = false
    USERLASTNAMEFLAG = false

    // Call this routine to cache user data and setup listerns for data changes.
    // This  data and storage ref must be setup prior to calling this method
    downloadUserDataWithCompletion = function (callback) {

        if(this.isInitialized == true){
            //read first name;

            this.userDataRef.child(this.USERFIRSTNAMEPATH).on('value', function (snapshot) {

                this.USERFIRSTNAMEFLAG = true;

               this.firstName = snapshot.val();

                //perform callback once all user information is stored locally if the caller this routine wants a callback
                if(this.hasDataCached()){
                    if(callback != null){
                        callback();
                    }
                }
            }.bind(this))

            //read last name
            this.userDataRef.child(this.USERLASTNAMEPATH).on('value', function (snapshot) {

                this.USERLASTNAMEFLAG = true;

                this.lastName = snapshot.val();
                if(this.hasDataCached()){
                    if(callback != null){
                        callback();
                    }

                }
            }.bind(this))

            //read phone number
            this.userDataRef.child(this.USERPHONEPATH).on('value', function (snapshot) {


                this.phone = {"phone": snapshot.val().number,
                               "type": snapshot.val().type};

                this.USERPHONEFLAG = true;

                if(this.hasDataCached()){
                    if(callback != null){
                        callback();
                    }

                }
            }.bind(this))

            //read email
            this.userDataRef.child(this.USEREMAILPATH).on('value', function (snapshot) {
              this.email = snapshot.val();

                this.USEREMAILFLAG = true;
                if(this.hasDataCached()){
                    if(callback != null){
                        callback();
                    }

                }
            }.bind(this))


            // read address
            this.userDataRef.child(this.USERADDRESSPATH).on('value', function (snapshot) {


                this.address = {"street1": snapshot.val().street1,
                       "street2": snapshot.val().street2,
                       "city": snapshot.val().city,
                       "state": snapshot.val().state,
                       "zip": snapshot.val().zip,
                       "country": snapshot.val().country };


                this.USERADDRESSFLAG = true;
                if(this.hasDataCached()){
                    if(callback != null){
                        callback();
                    }

                }
            }.bind(this))
        }

    };





}

export default TiUserInfo;