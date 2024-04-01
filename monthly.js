import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXrcQ8a7TGcSv87F_hmahZTEL_6e0cka8",
  authDomain: "dairy-mangement.firebaseapp.com",
  databaseURL: "https://dairy-mangement-default-rtdb.firebaseio.com",
  projectId: "dairy-mangement",
  storageBucket: "dairy-mangement.appspot.com",
  messagingSenderId: "259568622943",
  appId: "1:259568622943:web:f01ba428c4c6ebd191aaea",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

let email = document.getElementById("email");
let pass = document.getElementById("pass");
let btn = document.getElementById("sbtn");

// const gettingFullName = async() => {
//   const q = query(collection(db, "userAuthList"));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//   });
// }
let loginUser = (evn) => {
  evn.preventDefault();
  // gettingFullName();
  signInWithEmailAndPassword(auth, email.value, pass.value)
    .then(async (credentials) => {
      var ref = doc(db, email.value, "Name");
      const docSnap = await getDoc(ref);

      if (docSnap.exists()) {
        sessionStorage.setItem(
          "user-info",
          JSON.stringify({
            // email: docSnap.data().email,
            firstname: docSnap.data().firstname,
            lastname: docSnap.data().lastname,
          })
        );
        sessionStorage.setItem(
          "user-creds",
          JSON.stringify(credentials.user.email)
        );
        window.open("profile.html", "_blank");
      }
    })
    .catch((error) => {
      alert("Something went wrong" + error);
    });
};

btn.addEventListener("click", loginUser);
