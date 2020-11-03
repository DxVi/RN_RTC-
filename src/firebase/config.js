import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5pIKEoQ7qtHI1cWisogbjQ5lw6iwa6kU',
  authDomain: 'romblontranspo.firebaseapp.com',
  databaseURL: 'https://romblontranspo.firebaseio.com',
  projectId: 'romblontranspo',
  storageBucket: 'romblontranspo.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:1018728307082:ios:8d781438af844e8f7dd073',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
