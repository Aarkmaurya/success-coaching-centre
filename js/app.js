import { auth, db } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { doc, getDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// 1. Auth Guard (सुरक्षा: बिना लॉगिन पेज एक्सेस न हो)
onAuthStateChanged(auth, async (user) => {
    const protectedPages = ['dashboard.html', 'notes.html', 'tests.html', 'profile.html', 'admin.html'];
    const currentPath = window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPath) && !user) {
        window.location.href = "login.html";
    } else if (user) {
        loadUserProfile(user.uid);
    }
});

// 2. User Profile Fetching (डैशबोर्ड और प्रोफाइल में डेटा दिखाना)
async function loadUserProfile(uid) {
    const docRef = doc(db, "students", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        if (document.getElementById('student-name')) document.getElementById('student-name').innerText = data.fullName;
        if (document.getElementById('p-name')) document.getElementById('p-name').innerText = data.fullName;
    }
}

// 3. Logout Function
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
            window.location.href = "index.html";
        });
    });
}

// 4. Test Handling (टेस्ट शुरू करने का लॉजिक)
window.startTest = async (testId) => {
    // यहाँ Firestore से टेस्ट के सवाल फेच करने का कोड लिखें
    alert("टेस्ट शुरू हो रहा है: " + testId);
};

// 5. Theme Initialization (प्रोफाइल थीम याद रखना)
window.onload = () => {
    const savedTheme = localStorage.getItem('user-theme') || 'default';
    document.documentElement.setAttribute('data-theme', savedTheme);
};

console.log("Success Coaching System Initialized");

