import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBLaxj94s3y4nmqqdUPylx6FbQSSFkKY5k",
  authDomain: "travel-guru-1bb45.firebaseapp.com",
  projectId: "travel-guru-1bb45",
  storageBucket: "travel-guru-1bb45.appspot.com",
  messagingSenderId: "798366558379",
  appId: "1:798366558379:web:eeee08b48d2fe982756fee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
