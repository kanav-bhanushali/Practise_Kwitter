var firebaseConfig = {
    apiKey: "AIzaSyCi8eCdv6VNpNcny7vMDu5iuMfzw1wiV5k",
    authDomain: "kwitter-e2f26.firebaseapp.com",
    databaseURL: "https://kwitter-e2f26-default-rtdb.firebaseio.com",
    projectId: "kwitter-e2f26",
    storageBucket: "kwitter-e2f26.appspot.com",
    messagingSenderId: "918074997480",
    appId: "1:918074997480:web:f0289797bb8e9322dc675d",
    measurementId: "G-T31LBWVW3N"
  };
  
firebase.initializeApp(firebaseConfig);

function addUser(){
    var username=document.getElementById("Kwitter_Username").value;
    firebase.database().ref("/").child(username).update({
        purpose:"Adding username"
    });
}