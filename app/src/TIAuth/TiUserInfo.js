/**
 * Created by luthermartin-pers on 1/6/17.
 */
import * as firebase from 'firebase'
import globalDefs from './src/staticDefs'

class TiUserInfo {

//User information reatime database paths

    // Class declarations
    USERDATAPATH = "users"
    USERPHONEPATH = "phone"
    USERADDRESSPATH = "address"
    USEREMAILPATH = "email"
    USERFIRSTNAMEPATH = "firstName"
    USERLASTNAMEPATH = "lastName";

    USERDATACACHED = 7;

    //path to user profile photos
    PROFILEIMAGEPATH = "users/photos/"
    MAXPHOTOSIZE = 1 * 2048 * 2048

    constructor(uid){
        this.uid = uid;
        this.firstName = null;
        this.lastName = null;
        this.address = null;

        this.phone = null;

        this.email = null;

        this.photoUrl = null;
        this.dataCached = 0;

        this.userPhotoStorageRef = globalDefs.storageRef.child(this.PROFILEIMAGEPATH).child(this.uid);

        this.userDataRef = firebase.database().ref().child(this.USERDATAPATH).child(this.uid);
        if(uid != null){
            this.isInitialized = true;
        }else {
            this.isInitialized = false;
        }

    }

    hasDataCached = function (){
        if(this.dataCached == this.USERDATACACHED){
            return true;
        }else{
            return false;
        }
    }

    
    setFirstName = function (name) {
        this.firstName = name;
        this.userDataRef.child(this.USERFIRSTNAMEPATH).set(name);
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


    // Call this routine to cache user data and setup listerns for data changes.
    downloadUserDataWithCompletion = function (callback) {

        //read first name;
        this.userDataRef.child(this.USERFIRSTNAMEPATH).on('value', function (snapshot) {
            this.dataCached += 1;
            this.firstName = snapshot.val();
            if(this.hasDataCached()){
                callback();

            }
        })

        //read last name
        this.userDataRef.child(this.USERLASTTNAMEPATH).on('value', function (snapshot) {
            this.dataCached += 1;
            this.lastName = snapshot.val();
            if(this.hasDataCached()){
                callback();

            }
        })

        //read phone number
        this.userDataRef.child(this.USERPHONEPATH).on('value', function (snapshot) {
            this.phone = {"phone": snapshot.val().phone, "type": snapshot.val().type};
            this.dataCached += 1;
            
            if(this.hasDataCached()){
                callback();

            }
        })

        //read email
        this.userDataRef.child(this.USEREMAILPATH).on('value', function (snapshot) {
            this.email = {"email": snapshot.val().email, "type": snapshot.val().type};

            this.dataCached += 1;
            if(this.hasDataCached()){
                callback();

            }
        })


        // read address
        this.userDataRef.child(this.USERADDRESSPATH).on('value', function (snapshot) {
            this.address = {"street1": snapshot.val().street1,
                            "street2": snapshot.val().street2,
                            "city": snapshot.val().city,
                            "state": snapshot.val().state,
                            "zip": snapshot.val().zip,
                            "country": snapshot.val().country };

            this.dataCached += 1;
            if(this.hasDataCached()){
                callback();

            }
        })
    }





}