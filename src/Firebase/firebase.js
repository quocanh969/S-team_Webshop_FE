import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyD-EfHtGM7bVH5awBEJPyewkmNlHEA6fhY",
    authDomain: "webshop-5a249.firebaseapp.com",
    databaseURL: "https://webshop-5a249.firebaseio.com",
    projectId: "webshop-5a249",
    storageBucket: "webshop-5a249.appspot.com",
    messagingSenderId: "804993777350",
    appId: "1:804993777350:web:cd527839e231cb32af21c7",
    measurementId: "G-E68NBPFMZM"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default};