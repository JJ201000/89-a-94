<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
const firebaseConfig = {
apiKey: "AIzaSyDgDbxzmzQIWzIkPIixf4Uxlt3V1f054iM",
authDomain: "kwitter-9bb36.firebaseapp.com",
messagingSenderId: "624235812251",
appId: "1:624235812251:web:7e8f9f296ec67cc87d3d3e"
};
const app = initializeApp(firebaseConfig);
</script>

const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="bienvenido "+user_name;
function addRoom()
{
  room_name=document.getElementById("room_name").value;
}
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; 
      Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
