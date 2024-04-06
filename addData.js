import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// import { collection, addDoc, doc } from "firebase/firestore";
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

let btn = document.getElementById("btn");
let month = document.getElementById("month");
let Id = document.getElementById("id");
let firstWMilk = document.getElementById("firstmilk");
let secondWMilk = document.getElementById("secondtmilk");
let thirdWMilk = document.getElementById("thirdmilk");
let firstWAmount = document.getElementById("firstamount");
let secondWAmount = document.getElementById("secondamount");
let thirdWAmount = document.getElementById("thirdamount");

let pop1 = document.getElementById("pop1");
let pop2 = document.getElementById("pop2");
let pop3 = document.getElementById("pop3");
let pop4 = document.getElementById("pop4");

// ------------------------ADD DATA SECTION----------------------------

const addData = async () => {
  const monthRef = month.value;
  if (Id.value) {
    try {
      await setDoc(doc(db, Id.value, monthRef), {
        firstWMilk: firstWMilk.value,
        secondWMilk: secondWMilk.value,
        thirdWMilk: thirdWMilk.value,
        firstWAmount: firstWAmount.value,
        secondWAmount: secondWAmount.value,
        thirdWAmount: thirdWAmount.value,
      });
      alert("Data Added Succussfully");
      console.log("Document written with ID:");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    alert("Account not exists!!");
  }
};

btn.addEventListener("click", addData);

// --------------------UPDATE DATA SECTION -----------------------+++

const btn1 = document.getElementById("btn1");

const updateData = async () => {
  if (Id.value) {
    const monthRef = month.value;

    try {
      await updateDoc(doc(db, Id.value, monthRef), {
        firstWMilk: firstWMilk.value,
        secondWMilk: secondWMilk.value,
        thirdWMilk: thirdWMilk.value,
        firstWAmount: firstWAmount.value,
        secondWAmount: secondWAmount.value,
        thirdWAmount: thirdWAmount.value,
      });
      alert("Data Updated Succussfully");

      console.log("Document written with ID:");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    // alert("Account not exists!!");
  }
};

btn1.addEventListener("click", updateData);

// ----------------------------------------DELETE DATA SECTION--------------------++++

const btn2 = document.getElementById("btn2");

const deleteData = async () => {
  if (Id.value) {
    const monthRef = month.value;

    try {
      await deleteDoc(doc(db, Id.value, monthRef), {});
      alert("Data Deleted Succussfully");
      console.log("Document written with ID:");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    // alert("Account not exists!!");
  }
};

btn2.addEventListener("click", deleteData);
