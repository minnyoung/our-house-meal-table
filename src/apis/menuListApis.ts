import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";

export async function getMenuList() {
  const docData = doc(firestore, "food", "mainMenu");
  const querySnapshot = await getDoc(docData);
  try {
    const data = await querySnapshot.data();
    return data;
  } catch {
    console.log("데이터 없음");
  }
}
