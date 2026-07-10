import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 🔥 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3g79nduIPbw_5xiLbtVo7E_3z_sAnicI",
  authDomain: "heritagear-47d74.firebaseapp.com",
  projectId: "heritagear-47d74",
  storageBucket: "heritagear-47d74.firebasestorage.app",
  messagingSenderId: "775518123185",
  appId: "1:775518123185:web:3347921cb85a06c5641e90"
};

// ✅ Prevent duplicate initialization (VERY IMPORTANT)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// 🔥 Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export everything properly
export { auth, db };
export default app;