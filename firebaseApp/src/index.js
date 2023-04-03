import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get, set } from "firebase/database";


// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAdm7sROFsEY5ueb4SKhY6qTY3AyZ9coSU",
  authDomain: "blacklist-b111d.firebaseapp.com",
  projectId: "blacklist-b111d",
  storageBucket: "blacklist-b111d.appspot.com",
  messagingSenderId: "105547405622",
  appId: "1:105547405622:web:0eabb4a06aa772e51cbb97"
});

const auth = getAuth(firebaseApp);

//   Detect auth state
onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log('loged in!');
  } else {
    console.log('No user');
  }
});

const dbRef = ref(getDatabase());
get(child(dbRef, 'channelBlacklist')).then((snapshot) => {
  if (snapshot.exists()) {
    snapshot.forEach(childSnapshot => {
      //check each channel name
      
      const db = getDatabase();
      set(ref(db, "seenChannels"), {
        key1: childSnapshot.val()
      });
      console.log(childSnapshot.val());
    });
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


