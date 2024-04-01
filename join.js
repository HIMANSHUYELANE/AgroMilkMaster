
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {getFirestore, doc , setDoc} from"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  import{getAuth, createUserWithEmailAndPassword } from"https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAXrcQ8a7TGcSv87F_hmahZTEL_6e0cka8",
    authDomain: "dairy-mangement.firebaseapp.com",
    databaseURL: "https://dairy-mangement-default-rtdb.firebaseio.com",
    projectId: "dairy-mangement",
    storageBucket: "dairy-mangement.appspot.com",
    messagingSenderId: "259568622943",
    appId: "1:259568622943:web:f01ba428c4c6ebd191aaea"
  };

  const app = initializeApp(firebaseConfig);
  const db=getFirestore();
  const auth=getAuth(app);


  let email=document.getElementById('email')
  let pass=document.getElementById('pass')
  let fname=document.getElementById('fname')
  let sname=document.getElementById('sname')
  console.log(fname.value) 
  console.log(sname.value)
  let btn=document.getElementById('sbtn')
  let popup=document.getElementById('pop')

  // function pop(){
  //   
  // }

  let registerUser= evn =>{
    evn.preventDefault();
    

    createUserWithEmailAndPassword(auth,email.value,pass.value)
    .then(async(credentials)=>{
        var ref=doc(db , email?.value, "Name")
        await setDoc(ref,{
          firstname:fname.value,
          lastname:sname.value,
        })

        // alert("Account is created head to monthly data")
        console.log(fname.value)
        console.log(sname.value)
        popup.classList.toggle("hidden");
        console.log(popup)
    })
    .catch((error)=>{
        alert("Something Wrong"+error)
    })
  }

  btn.addEventListener('click',registerUser);