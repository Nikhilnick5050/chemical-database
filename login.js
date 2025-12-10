// Your existing JavaScript code...
// (all your current code for particles, chemical data, etc.)

// ================ ADD LOGIN CODE HERE ================
// Login Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Login Elements
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const loginModalClose = document.getElementById('loginModalClose');
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Toggle Login Modal
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            loginModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Rest of the login code...
    // (copy the entire JavaScript code I provided earlier)
});

// More of your existing code if any...
