// Replace [VERSION] with a version like 10.12.0
import { initializeApp } from "https://www.gstatic.com/firebasejs/[VERSION]/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/[VERSION]/firebase-firestore.js";

// Your Firebase Config (from Project HaGalil)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "hagalil.firebaseapp.com",
  projectId: "hagalil",
  storageBucket: "hagalil.firebasestorage.app",
  messagingSenderId: "244183429187",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save to Firestore on click
document.getElementById('btn').addEventListener('click', async () => {
    try {
        const docRef = await addDoc(collection(db, "test_collection"), {
            message: "Hello from GitHub Pages!",
            time: new Date()
        });
        alert("Data saved with ID: " + docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});
