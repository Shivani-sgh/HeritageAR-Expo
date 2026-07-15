import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const getUserRole = async (uid) => {
  const snap = await getDoc(doc(db, "users", uid));

  if (snap.exists()) {
    return snap.data().role;
  }

  return "tourist";
};