let btn = document.getElementById('btn')
let member;
let memcode = document.getElementById('code')

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAXrcQ8a7TGcSv87F_hmahZTEL_6e0cka8",
   authDomain: "dairy-mangement.firebaseapp.com",
   databaseURL: "https://dairy-mangement-default-rtdb.firebaseio.com",
   projectId: "dairy-mangement",
   storageBucket: "dairy-mangement.appspot.com",
   messagingSenderId: "259568622943",
   appId: "1:259568622943:web:f01ba428c4c6ebd191aaea"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 import{getDatabase, ref, set, child, get, update, remove} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
 const db=getDatabase();

 
 
 btn.addEventListener('click', () => {
    
        
         let shift = document.getElementById('choices1').value
         let date = document.getElementById('date').value
         let milkt = document.getElementById('choices2').value
         let fat = document.getElementById('fat').value
         let snf = document.getElementById('snf').value
         let qua = document.getElementById('qua').value
         let rate;
         if (fat == 3.2) {
             if (snf == 8.3) {
                 rate = 26.10;
                }
                else if (snf == 8.4) {
                    rate = 27.10;
                }
                else if (snf == 8.5) {
                    rate = 28.10;
                }
                else if (snf == 8.6) {
                    rate = 28.20;
                }
                else if (snf == 8.7) {
                    rate = 28.30;
                }
                else {
                    rate = "Invalid";
                }
    }
    if (fat == 3.3) {
        if (snf == 8.3) {
            rate = 26.40;
        }
        else if (snf == 8.4) {
            rate = 27.40;
        }
        else if (snf == 8.5) {
            rate = 28.40;
        }
        else if (snf == 8.6) {
            rate = 28.50;
        }
        else if (snf == 8.7) {
            rate = 28.60;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 3.4) {
        if (snf == 8.3) {
            rate = 26.70;
        }
        else if (snf == 8.4) {
            rate = 27.70;
        }
        else if (snf == 8.5) {
            rate = 28.70;
        }
        else if (snf == 8.6) {
            rate = 28.80;
        }
        else if (snf == 8.7) {
            rate = 28.90;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 3.5) {
        if (snf == 8.3) {
            rate = 27.00;
        }
        else if (snf == 8.4) {
            rate = 28.00;
        }
        else if (snf == 8.5) {
            rate = 29.00;
        }
        else if (snf == 8.6) {
            rate = 29.10;
        }
        else if (snf == 8.7) {
            rate = 29.20;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 3.6) {
        if (snf == 8.3) {
            rate = 28.70;
        }
        else if (snf == 8.4) {
            rate = 29.00;
        }
        else if (snf == 8.5) {
            rate = 29.30;
        }
        else if (snf == 8.6) {
            rate = 29.40;
        }
        else if (snf == 8.7) {
            rate = 29.50;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 3.7) {
        if (snf == 8.3) {
            rate = 29.00;
        }
        else if (snf == 8.4) {
            rate = 29.30;
        }
        else if (snf == 8.5) {
            rate = 29.60;
        }
        else if (snf == 8.6) {
            rate = 29.70;
        }
        else if (snf == 8.7) {
            rate = 29.80;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 3.7) {
        if (snf == 8.3) {
            rate = 29.00;
        }
        else if (snf == 8.4) {
            rate = 29.30;
        }
        else if (snf == 8.5) {
            rate = 29.60;
        }
        else if (snf == 8.6) {
            rate = 29.70;
        }
        else if (snf == 8.7) {
            rate = 29.80;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 3.8) {
        if (snf == 8.3) {
            rate = 29.30;
        }
        else if (snf == 8.4) {
            rate = 29.60;
        }
        else if (snf == 8.5) {
            rate = 29.90;
        }
        else if (snf == 8.6) {
            rate = 30.00;
        }
        else if (snf == 8.7) {
            rate = 30.10;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 3.9) {
        if (snf == 8.3) {
            rate = 29.60;
        }
        else if (snf == 8.4) {
            rate = 29.90;
        }
        else if (snf == 8.5) {
            rate = 30.20;
        }
        else if (snf == 8.6) {
            rate = 30.30;
        }
        else if (snf == 8.7) {
            rate = 30.40;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.0) {
        if (snf == 8.3) {
            rate = 29.90;
        }
        else if (snf == 8.4) {
            rate = 30.20;
        }
        else if (snf == 8.5) {
            rate = 30.50;
        }
        else if (snf == 8.6) {
            rate = 30.60;
        }
        else if (snf == 8.7) {
            rate = 30.70;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.1) {
        if (snf == 8.3) {
            rate = 30.20;
        }
        else if (snf == 8.4) {
            rate = 30.50;
        }
        else if (snf == 8.5) {
            rate = 30.80;
        }
        else if (snf == 8.6) {
            rate = 30.90;
        }
        else if (snf == 8.7) {
            rate = 30.70;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.2) {
        if (snf == 8.3) {
            rate = 30.50;
        }
        else if (snf == 8.4) {
            rate = 30.80;
        }
        else if (snf == 8.5) {
            rate = 31.10;
        }
        else if (snf == 8.6) {
            rate = 31.20;
        }
        else if (snf == 8.7) {
            rate = 31.30;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.3) {
        if (snf == 8.3) {
            rate = 30.80;
        }
        else if (snf == 8.4) {
            rate = 31.10;
        }
        else if (snf == 8.5) {
            rate = 31.40;
        }
        else if (snf == 8.6) {
            rate = 31.50;
        }
        else if (snf == 8.7) {
            rate = 31.60;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.4) {
        if (snf == 8.3) {
            rate = 31.10;
        }
        else if (snf == 8.4) {
            rate = 31.40;
        }
        else if (snf == 8.5) {
            rate = 31.70;
        }
        else if (snf == 8.6) {
            rate = 31.80;
        }
        else if (snf == 8.7) {
            rate = 31.90;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.5) {
        if (snf == 8.3) {
            rate = 31.40;
        }
        else if (snf == 8.4) {
            rate = 31.70;
        }
        else if (snf == 8.5) {
            rate = 32.00;
        }
        else if (snf == 8.6) {
            rate = 32.10;
        }
        else if (snf == 8.7) {
            rate = 32.20;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.6) {
        if (snf == 8.3) {
            rate = 31.70;
        }
        else if (snf == 8.4) {
            rate = 32.00;
        }
        else if (snf == 8.5) {
            rate = 32.30;
        }
        else if (snf == 8.6) {
            rate = 32.40;
        }
        else if (snf == 8.7) {
            rate = 32.50;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.7) {
        if (snf == 8.3) {
            rate = 32.00;
        }
        else if (snf == 8.4) {
            rate = 32.30;
        }
        else if (snf == 8.5) {
            rate = 32.60;
        }
        else if (snf == 8.6) {
            rate = 32.70;
        }
        else if (snf == 8.7) {
            rate = 32.80;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.8) {
        if (snf == 8.3) {
            rate = 32.30;
        }
        else if (snf == 8.4) {
            rate = 32.60;
        }
        else if (snf == 8.5) {
            rate = 32.90;
        }
        else if (snf == 8.6) {
            rate = 33.00;
        }
        else if (snf == 8.7) {
            rate = 33.10;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 4.9) {
        if (snf == 8.3) {
            rate = 32.60;
        }
        else if (snf == 8.4) {
            rate = 32.90;
        }
        else if (snf == 8.5) {
            rate = 33.20;
        }
        else if (snf == 8.6) {
            rate = 33.30;
        }
        else if (snf == 8.7) {
            rate = 33.40;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.0) {
        if (snf == 8.3) {
            rate = 32.90;
        }
        else if (snf == 8.4) {
            rate = 33.20;
        }
        else if (snf == 8.5) {
            rate = 33.50;
        }
        else if (snf == 8.6) {
            rate = 33.60;
        }
        else if (snf == 8.7) {
            rate = 33.70;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.1) {
        if (snf == 8.3) {
            rate = 33.20;
        }
        else if (snf == 8.4) {
            rate = 33.50;
        }
        else if (snf == 8.5) {
            rate = 33.80;
        }
        else if (snf == 8.6) {
            rate = 33.90;
        }
        else if (snf == 8.7) {
            rate = 34.00;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.2) {
        if (snf == 8.3) {
            rate = 33.50;
        }
        else if (snf == 8.4) {
            rate = 33.80;
        }
        else if (snf == 8.5) {
            rate = 34.10;
        }
        else if (snf == 8.6) {
            rate = 34.20;
        }
        else if (snf == 8.7) {
            rate = 34.30;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.3) {
        if (snf == 8.3) {
            rate = 33.80;
        }
        else if (snf == 8.4) {
            rate = 34.10;
        }
        else if (snf == 8.5) {
            rate = 34.40;
        }
        else if (snf == 8.6) {
            rate = 34.50;
        }
        else if (snf == 8.7) {
            rate = 34.60;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.4) {
        if (snf == 8.3) {
            rate = 34.10;
        }
        else if (snf == 8.4) {
            rate = 34.40;
        }
        else if (snf == 8.5) {
            rate = 34.70;
        }
        else if (snf == 8.6) {
            rate = 34.80;
        }
        else if (snf == 8.7) {
            rate = 34.90;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.5) {
        if (snf == 8.8) {
            rate = 36.70;
        }
        else if (snf == 8.9) {
            rate = 37.10;
        }
        
        else if (snf == 9.0) {
            rate = 37.50;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.6) {
        if (snf == 8.8) {
            rate = 37.20;
        }
        else if (snf == 8.9) {
            rate = 37.60;
        }

        else if (snf == 9.0) {
            rate = 38.00;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.7) {
        if (snf == 8.8) {
            rate = 37.70;
        }
        else if (snf == 8.9) {
            rate = 38.10;
        }
        
        else if (snf == 9.0) {
            rate = 38.50;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.8) {
        if (snf == 8.8) {
            rate = 38.20;
        }
        else if (snf == 8.9) {
            rate = 38.60;
        }
        
        else if (snf == 9.0) {
            rate = 39.00;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 5.9) {
        if (snf == 8.8) {
            rate = 38.70;
        }
        else if (snf == 8.9) {
            rate = 39.10;
        }
        
        else if (snf == 9.0) {
            rate = 39.50;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.0) {
        if (snf == 8.8) {
            rate = 39.20;
        }
        else if (snf == 8.9) {
            rate = 39.60;
        }
        
        else if (snf == 9.0) {
            rate = 40.00;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.1) {
        if (snf == 8.8) {
            rate = 39.50;
        }
        else if (snf == 8.9) {
            rate = 39.90;
        }
        
        else if (snf == 9.0) {
            rate = 40.30;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.2) {
        if (snf == 8.8) {
            rate = 39.80;
        }
        else if (snf == 8.9) {
            rate = 40.20;
        }
        
        else if (snf == 9.0) {
            rate = 40.60;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.3) {
        if (snf == 8.8) {
            rate = 40.10;
        }
        else if (snf == 8.9) {
            rate = 40.50;
        }
        
        else if (snf == 9.0) {
            rate = 40.90;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.4) {
        if (snf == 8.8) {
            rate = 40.40;
        }
        else if (snf == 8.9) {
            rate = 40.80;
        }
        
        else if (snf == 9.0) {
            rate = 41.20;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.5) {
        if (snf == 8.8) {
            rate = 40.70;
        }
        else if (snf == 8.9) {
            rate = 41.10;
        }
        
        else if (snf == 9.0) {
            rate = 41.50;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.6) {
        if (snf == 8.8) {
            rate = 41.00;
        }
        else if (snf == 8.9) {
            rate = 41.40;
        }
        
        else if (snf == 9.0) {
            rate = 41.80;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.7) {
        if (snf == 8.8) {
            rate = 41.30;
        }
        else if (snf == 8.9) {
            rate = 41.70;
        }
        
        else if (snf == 9.0) {
            rate = 42.10;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.8) {
        if (snf == 8.8) {
            rate = 41.60;
        }
        else if (snf == 8.9) {
            rate = 42.00;
        }
        
        else if (snf == 9.0) {
            rate = 42.40;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 6.9) {
        if (snf == 8.8) {
            rate = 41.90;
        }
        else if (snf == 8.9) {
            rate = 42.30;
        }
        
        else if (snf == 9.0) {
            rate = 42.70;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.0) {
        if (snf == 8.8) {
            rate = 42.20;
        }
        else if (snf == 8.9) {
            rate = 42.60;
        }
        
        else if (snf == 9.0) {
            rate = 43.00;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.1) {
        if (snf == 8.8) {
            rate = 42.50;
        }
        else if (snf == 8.9) {
            rate = 42.90;
        }
        
        else if (snf == 9.0) {
            rate = 43.30;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.2) {
        if (snf == 8.8) {
            rate = 42.80;
        }
        else if (snf == 8.9) {
            rate = 43.20;
        }
        
        else if (snf == 9.0) {
            rate = 43.60;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.3) {
        if (snf == 8.8) {
            rate = 43.10;
        }
        else if (snf == 8.9) {
            rate = 43.50;
        }
        
        else if (snf == 9.0) {
            rate = 43.90;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.4) {
        if (snf == 8.8) {
            rate = 43.40;
        }
        else if (snf == 8.9) {
            rate = 43.80;
        }
        
        else if (snf == 9.0) {
            rate = 44.20;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.5) {
        if (snf == 8.8) {
            rate = 43.70;
        }
        else if (snf == 8.9) {
            rate = 44.10;
        }
        
        else if (snf == 9.0) {
            rate = 44.50;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.6) {
        if (snf == 8.8) {
            rate = 44.00;
        }
        else if (snf == 8.9) {
            rate = 44.40;
        }
        
        else if (snf == 9.0) {
            rate = 44.80;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.7) {
        if (snf == 8.8) {
            rate = 44.30;
        }
        else if (snf == 8.9) {
            rate = 44.70;
        }
        
        else if (snf == 9.0) {
            rate = 45.10;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.8) {
        if (snf == 8.8) {
            rate = 44.60;
        }
        else if (snf == 8.9) {
            rate = 45.00;
        }
        
        else if (snf == 9.0) {
            rate = 45.40;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 7.9) {
        if (snf == 8.8) {
            rate = 44.90;
        }
        else if (snf == 8.9) {
            rate = 45.30;
        }
        
        else if (snf == 9.0) {
            rate = 45.70;
        }
        else {
            rate = "Invalid";
        }
    }
    if (fat == 8.0) {
        if (snf == 8.8) {
            rate = 45.20;
        }
        else if (snf == 8.9) {
            rate = 45.60;
        }
        
        else if (snf == 9.0) {
            rate = 46.0;
        }
        else {
            rate = "Invalid";
        }
    }

    function getData(){
        const dbget=ref(db)
         get(child(dbget , "MemDetails/"+memcode.value)).then((snapshot)=>{
            if (snapshot.exists()){
               member=snapshot?.val()?.NameOfMember;
            }
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    const timeString = currentDate.toLocaleTimeString();
    let outwin=document.getElementById('output')
    outwin.innerHTML="--------Milk Purchase slip--------<br>";
    outwin.insertAdjacentHTML('beforeend',"Pragati Milk Dairy<br>")
    outwin.insertAdjacentHTML('beforeend',"Date: "+date+"<br>")
outwin.insertAdjacentHTML('beforeend',"Shift: "+shift+"<br>")
outwin.insertAdjacentHTML('beforeend',"------------------------------------<br>")
outwin.insertAdjacentHTML('beforeend',"Member_Code: "+memcode?.value+"<br>")
outwin.insertAdjacentHTML('beforeend',"Name: "+member+"<br>")
outwin.insertAdjacentHTML('beforeend',"Milk_Type:&nbsp;  "+milkt+"<br>")
outwin.insertAdjacentHTML('beforeend',"FAT%: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+fat+"<br>")
outwin.insertAdjacentHTML('beforeend',"SNF%: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+snf+"<br>")
outwin.insertAdjacentHTML('beforeend',"Quantity(Lit): "+qua+"<br>")
outwin.insertAdjacentHTML('beforeend',"Rate(per/lit):&nbsp; "+rate+"<br>")
let Amount=rate*qua;
function fixDecimalLength(Amount, decimalLength) {
    return Number(Amount.toFixed(decimalLength));
}
outwin.insertAdjacentHTML('beforeend',"Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+fixDecimalLength(Amount, 2)+"<br>")
outwin.insertAdjacentHTML('beforeend',"------------------------------------<br>")
outwin.insertAdjacentHTML('beforeend',"Slip_Date:  "+dateString+"   "+timeString+"<br>")
outwin.insertAdjacentHTML('beforeend',"-------------Visit Again-----------")
})
}
getData();

})

let print=document.getElementById('print')
print.addEventListener('click',(e)=>{
    let printContents = document.getElementById('output').innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
})