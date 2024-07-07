// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Check if there is a saved preference in localStorage
    var darkMode = localStorage.getItem('darkMode');
    
    // Set initial dark mode state based on localStorage
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeElements(true); // Update elements for dark mode
    }

    // Add event listener to toggle dark mode
    document.getElementById('darkModeToggle').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled'); // Save dark mode preference
        } else {
            localStorage.setItem('darkMode', 'disabled'); // Save light mode preference
        }
        updateDarkModeElements(document.body.classList.contains('dark-mode')); // Update elements based on current mode
    });

    // Function to update elements based on dark mode state
    function updateDarkModeElements(isDarkMode) {
        var navbar = document.querySelector('.navbar'); // Select the navbar
        var footer = document.querySelector('footer'); // Select the footer

        // Change navbar and footer background colors based on dark mode state
        if (isDarkMode) {
            navbar.classList.remove('navbar-info'); // Remove navbar-info class
            navbar.classList.add('navbar-dark', 'bg-dark'); // Add navbar-dark and bg-dark classes
            footer.classList.remove('bg-info'); // Remove bg-info class
            footer.classList.add('bg-dark'); // Add bg-dark class
            document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-sun"></i>'; // Change icon to sun
        } else {
            navbar.classList.remove('navbar-dark', 'bg-dark'); // Remove navbar-dark and bg-dark classes
            navbar.classList.add('navbar-info'); // Add navbar-info class
            footer.classList.remove('bg-dark'); // Remove bg-dark class
            footer.classList.add('bg-info'); // Add bg-info class
            document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-moon"></i>'; // Change icon to moon
        }
    }
});

// Contact Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting automatically

    // Validate form inputs
    if (!validateForm()) {
        return;
    }

    // Fetch form values
    var name = document.getElementById('name').value.trim(); // Get the value of the name input field
    var email = document.getElementById('email').value.trim(); // Get the value of the email input field
    var phone = document.getElementById('phone').value.trim(); // Get the value of the phone input field
    var message = document.getElementById('message').value.trim(); // Get the value of the message input field

    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';

    // Provide user feedback after submission
    alert('Message sent successfully!');
});

// Form Validation Function
function validateForm() {
    var name = document.getElementById('name').value.trim(); // Get the value of the name input field
    var email = document.getElementById('email').value.trim(); // Get the value of the email input field
    var message = document.getElementById('message').value.trim(); // Get the value of the message input field
    var phone = document.getElementById('phone').value.trim(); // Get the value of the phone input field

    // Validate empty fields
    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email format.');
        return false;
    }

    // Validate phone number
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Invalid phone number.');
        return false;
    }

    // If all fields are valid
    return true;
}
