// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    var navbar = document.querySelector('.navbar'); // Select the navbar
    var footer = document.querySelector('footer'); // Select the footer

    // Change navbar and footer background colors based on dark mode state
    if (document.body.classList.contains('dark-mode')) {
        navbar.classList.replace('navbar-info', 'navbar-dark'); // Replace navbar-info with navbar-dark
        footer.classList.replace('bg-info', 'bg-dark'); // Replace bg-info with bg-dark
        document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-sun"></i>'; // Change icon to sun
    } else {
        navbar.classList.replace('navbar-dark', 'navbar-info'); // Replace navbar-dark with navbar-info
        footer.classList.replace('bg-dark', 'bg-info'); // Replace bg-dark with bg-info
        document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-moon"></i>'; // Change icon to moon
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