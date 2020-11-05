import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../StateProvider';
import { firebase } from '../../firebase/config'

export default function AppLoaderScreen({navigation}) {
    const [{user, email, fullname}, dispatch] = useStateValue();
    const [loading, setLoading] = useState(true)

   

    useEffect(() => {
        const usersRef = firebase.firestore().collection('users');
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            usersRef
              .doc(user.uid)
              .get()
              .then((document) => {
              //  console.log(document.data())
              dispatch({
                 type: 'SET_USER',
                 user: document.data().id,
                 email: document.data().email,
                 fullname: document.data().fullName,                 
               })
               setLoading(false)
              })
              .catch((error) => {
                setLoading(false)
              });
          } else {
            setLoading(false)            
          }
        });
      }, []);
   
      if (loading) {
        console.log("user>>>", user)	
        return (	          
         <>         
         Loading...</>	
        )	
      }

  return (
    <>
      {
        user ?
        (
          navigation.navigate('Home')
        ):
        (
          navigation.navigate('Login')
        )
      }
    </>
  );
}