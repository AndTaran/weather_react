import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhto_XKiDmL_pdkPph5YgRS3CkaqS9G0Y",
    authDomain: "weather-react-1868c.firebaseapp.com",
    projectId: "weather-react-1868c",
    storageBucket: "weather-react-1868c.appspot.com",
    messagingSenderId: "92780347544",
    appId: "1:92780347544:web:48adc8ff4831bed5abd0ed"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);