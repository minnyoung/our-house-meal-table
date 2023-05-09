import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../firebase-config";

export default function Firebase() {
  async function firebaseAdd() {
    try {
      const docRef = await addDoc(collection(firestore, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function firebaseRead() {
    const querySnapshot = await getDocs(collection(firestore, "food"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  return (
    <div>
      <button type="button" onClick={firebaseAdd}>
        create
      </button>
      <button type="button" onClick={firebaseRead}>
        read
      </button>
    </div>
  );
}
