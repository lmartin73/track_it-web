/**
 * Created by luthermartin-pers on 1/2/17.
 */
import Firebase from 'firebase'




function TiUserAccount (uid) {
     this.user;
     this.setUser = function (user) {
         this.user = user
     }

     
    this.loginAccountWithCompletion = function (email, password, callback) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
            this.user = result.user;
            console.log(result.user);
        }).catch(function (error) {
            if(error){
                alert(error.message);
            }
        })
    }

}

me = new TiUserAccount(here)
me.user  = "Luther"

export default TiUserAccount