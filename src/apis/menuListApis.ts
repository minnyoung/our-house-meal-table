import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";
import { MenuType } from "../store/userMenuStore";

export async function getMenuList() {
  const docData = doc(firestore, "food", "MenuList");
  const querySnapshot = await getDoc(docData);
  try {
    const data = await querySnapshot.data();
    return data;
  } catch {
    console.log("데이터 없음");
  }
}

export async function setUserMenuList(menuList: MenuType[], userId: string) {
  try {
    await setDoc(doc(firestore, "users", userId), { menuList });
    alert("저장되었습니다.");
  } catch (e) {
    console.log("등록 중 에러가 발생했습니다.", e);
  }
}

export async function getUserMenuList(userId: string) {
  const docData = doc(firestore, "users", userId);
  const querySnapshot = await getDoc(docData);
  try {
    const data = await querySnapshot.data();
    return data;
  } catch (e) {
    console.log("유저의 메뉴리스트를 가져오는 중 에러가 발생했습니다.", e);
  }
}
