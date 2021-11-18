import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth} from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBAkNPiG1LX2-PlScZm_TOpTUGk6t3IBL4",
    authDomain: "themer-9acfa.firebaseapp.com",
    projectId: "themer-9acfa",
    storageBucket: "themer-9acfa.appspot.com",
    messagingSenderId: "7529407824",
    appId: "1:7529407824:web:131e68a658f17811fef855",
    measurementId: "G-81CX61MV51"
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);

