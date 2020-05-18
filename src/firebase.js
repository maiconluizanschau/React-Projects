import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

    //configuração do projeto do firebase
    let firebaseConfig = {
        apiKey: "AIzaSyAGOYfHt47gMCstkZPjxG8BHMEu4VwNdS4",
        authDomain: "reactapp-6d3a1.firebaseapp.com",
        databaseURL: "https://reactapp-6d3a1.firebaseio.com",
        projectId: "reactapp-6d3a1",
        storageBucket: "reactapp-6d3a1.appspot.com",
        messagingSenderId: "249637421535",
        appId: "1:249637421535:web:b337f251eb98c67098446a",
        measurementId: "G-WK79QECCFN"
      };
     

class Firebase{
  constructor(){
    app.initializeApp(firebaseConfig);

    //Referenciando a database para acessar em outros locais
    this.app = app.database();

    this.storage = app.storage();
  }

  login(email, password){
    return app.auth().signInWithEmailAndPassword(email, password)
  }

  logout(){
    return app.auth().signOut();
  }

  async register(nome, email, password){
    await app.auth().createUserWithEmailAndPassword(email, password)

    const uid = app.auth().currentUser.uid;

    return app.database().ref('usuarios').child(uid).set({
      nome: nome
    })

  }

  isInitialized(){
      return new Promise(resolve =>{
          app.auth().onAuthStateChanged(resolve);
      })
  }

  getCurrent(){
    return app.auth().currentUser && app.auth().currentUser.email
  }

  getCurrentUid(){
    return app.auth().currentUser && app.auth().currentUser.uid
  }

  async getUserName(callback){
    if(!app.auth().currentUser){
      return null;
    }

    const uid = app.auth().currentUser.uid;
    await app.database().ref('usuarios').child(uid)
    .once('value').then(callback);

  }

}

export default new Firebase();