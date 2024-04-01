import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// import { collection, addDoc } from "firebase/firestore";
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

// ---------------------------session storage section-------------------------------------++++

let userinfo = JSON.parse(sessionStorage.getItem("user-info"));

let printname = document.querySelectorAll(".name");
let outbtn = document.getElementById("obtn");
let mon = document.getElementById("mon");
let printmon = document.getElementById("printmon");

outbtn.addEventListener("click", () => {
  sessionStorage.removeItem("user-creds");
  sessionStorage.removeItem("user-info");
  window.location.href = "monthly.html";
  window.close("profile.html");
});

printname.forEach((names) => {
  names.innerHTML = `Name:- ${userinfo.firstname + " " + userinfo.lastname}`;
});

// -----------------------------------------GATTING DOM LOAD--------------------------------++
// ===========to print content =============++++

let fmilk = document.getElementById("firstmilk");
let smilk = document.getElementById("secondmilk");
let tmilk = document.getElementById("thirdmilk");
let famount = document.getElementById("firstamount");
let samount = document.getElementById("secondamount");
let tamount = document.getElementById("thirdamount");
let milktotal = document.getElementById("milktotal");
let amounttotal = document.getElementById("amounttotal");
let pop1 = document.getElementById("pop1");
let pop2 = document.getElementById("pop2");

// ----------------------------------------firestore Database Section---------------------------++++

let email = JSON.parse(sessionStorage.getItem("user-creds"));

const getData = async () => {
  const docRef = doc(db, email, mon.value);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    fmilk.innerHTML = docSnap.data().firstWMilk;
    smilk.innerHTML = docSnap.data().secondWMilk;
    tmilk.innerHTML = docSnap.data().thirdWMilk;
    famount.innerHTML = docSnap.data().firstWAmount;
    samount.innerHTML = docSnap.data().secondWAmount;
    tamount.innerHTML = docSnap.data().thirdWAmount;
    const milk1 = parseInt(docSnap.data().firstWMilk);
    const milk2 = parseInt(docSnap.data().secondWMilk);
    const milk3 = parseInt(docSnap.data().thirdWMilk);
    const amount1 = parseInt(docSnap.data().firstWAmount);
    const amount2 = parseInt(docSnap.data().secondWAmount);
    const amount3 = parseInt(docSnap.data().thirdWAmount);
    let milkTotal = milk1 + milk2 + milk3;
    let amountTotal = amount1 + amount2 + amount3;
    milktotal.innerHTML = milkTotal;
    amounttotal.innerHTML = amountTotal;
    // console.log(milkTotal + "    " + amountTotal);
    pop1.classList.remove("hidden");
    setTimeout(() => {
      pop1.classList.add("hidden");
    }, 4000);
    pop2.classList.add("hidden");
  } else {
    fmilk.innerHTML = "--";
    smilk.innerHTML = "--";
    tmilk.innerHTML = "--";
    famount.innerHTML = "--";
    samount.innerHTML = "--";
    tamount.innerHTML = "--";
    milktotal.innerHTML = "--";
    amounttotal.innerHTML = "--";
    pop1.classList.add("hidden");
    setTimeout(() => {
      pop2.classList.add("hidden");
    }, 4000);
    pop2.classList.remove("hidden");
  }
};

mon.addEventListener("change", getData);
