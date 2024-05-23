// FIREBASE // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyAiQIj8yucnph0QeBZ8JGbob8exMEm7z9c",
            authDomain: "stickershub1-e7192.firebaseapp.com",
            projectId: "stickershub1-e7192",
            storageBucket: "stickershub1-e7192.appspot.com",
            messagingSenderId: "893978353658",
            appId: "1:893978353658:web:896666f7a750905e6bce43",
            measurementId: "G-5V1TH10FMT"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        