import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
        apiKey: "AIzaSyBquWcbDe29jwENrD84G7eouNVt9aU8u74",
authDomain: "qr-code-87f61.firebaseapp.com",
projectId: "qr-code-87f61",
storageBucket: "qr-code-87f61.appspot.com",
messagingSenderId: "369982978095",
appId: "1:369982978095:web:14aabbde2891ad6eafeeda"
});
// Firebase storage reference
export const storage = getStorage(app);

