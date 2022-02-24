//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDSRPFVrC5t5hkifV5myKr1KM8uQLmo8Is",
      authDomain: "kwitter-bbe70.firebaseapp.com",
      databaseURL: "https://kwitter-bbe70-default-rtdb.firebaseio.com",
      projectId: "kwitter-bbe70",
      storageBucket: "kwitter-bbe70.appspot.com",
      messagingSenderId: "1058797710956",
      appId: "1:1058797710956:web:0f0e80395503b2c00af249"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
   //Start code

   //End code
      } });  }); }
    getData();

    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}