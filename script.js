document.querySelectorAll('.cat-link').forEach(link => {
    link.addEventListener('click', function(event) {
        // Optional: Show a fun cat message before navigating
        alert('Meow! Heading to ' + this.textContent);
        // The link will still work after the alert
    });
});