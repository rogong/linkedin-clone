import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { auth, provider } from '../firebase';
import { collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore';

import db from '../firebase';
import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from './actionType';


const storage = getStorage();

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  articles: payload
})

export function signInGoogleAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export const getUserGoogleAuth = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};

export const signOutGoogleAPI = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const postArticleAPI = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (payload.image != '') {
      const storageRef = ref(storage, `images/${payload.image.name}`);

      const uploadTask = uploadBytesResumable(storageRef, Blob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error.code);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
            const docRef = addDoc(collection(db, 'articles'), {
              actor: {
                email: payload.user.email,
                title: payload.user.displayName,
                date:  payload.timestamp,
                image: payload.user.photoURL,
              },
              video: payload.video,
              sharedImg: downloadURL,
              comments: 0,
              description: payload.description,
            }).then(function () {
              console.log('Post created');
              
            });
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      // dispatch(setLoading(true))
      const docRef = addDoc(collection(db, 'articles'), {
        actor: {
          email: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: '',
        comments: 0,
        description: payload.description,
      }).then(function () {
        console.log('Post created');
        console.log('Document written with ID: ', docRef.id);
      });
      dispatch(setLoading(false));
    }
  };
};

export const getArticlesAPI =  () => {
  return (dispatch) => {
    //let payload;
    
    const  q = query(collection(db, 'articles'), orderBy('actor.title', 'desc'));

         getDocs(q).then((articlesData) => {

          const   payload =  articlesData.docs.map((doc) => ({ ...doc.data(), id: doc.id}));

          dispatch(getArticles(payload));

          console.log(payload);
         });


  

      
      
  };
};
