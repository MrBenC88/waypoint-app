import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export const addTestUser = async () => {
  try {
    const userData = {
      name: "Test User",
      email: "test@example.com",
      createdAt: new Date(),
    };

    console.log("Attempting to add user: ", userData); // Debug log
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("Test user added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding test user: ", e);
  }
};

// export const fetchTestUsers = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     const users = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     // querySnapshot.forEach((doc) => {
//     //   console.log(`${doc.id} =>`, doc.data());
//     // });
//     console.log(users[0].name);
//     return users;
//   } catch (e) {
//     console.error("Error fetching users: ", e);
//   }
// };

export const fetchTestUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id, // document ID
      ...doc.data(), // all fields from Firestore
    }));
    console.log("Fetched users: ", users); // Debug log
    return users;
  } catch (e) {
    console.error("Error fetching users: ", e);
    return [];
  }
};
