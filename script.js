// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    var navbar = document.querySelector('.navbar'); 
    var footer = document.querySelector('footer');

    // Change navbar and footer background colors based on dark mode state
    if (document.body.classList.contains('dark-mode')) {
        navbar.classList.replace('bg-info', 'bg-dark');
        footer.classList.replace('bg-info', 'bg-dark');
        document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-sun"></i>'; // Change icon to sun
    } else {
        navbar.classList.replace('bg-dark', 'bg-info');
        footer.classList.replace('bg-dark', 'bg-info');
        document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-moon"></i>'; // Change icon to moon
    }
});