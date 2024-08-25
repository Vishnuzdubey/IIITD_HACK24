document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Extract values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        // Simulate sending data to server and show success message
        document.getElementById('response-message').textContent = 'Thank you for contacting us, ' + name + '! We will get back to you shortly.';
        document.getElementById('response-message').style.color = 'green';

        // Clear form fields
        document.getElementById('contact-form').reset();
    } else {
        // Show error message
        document.getElementById('response-message').textContent = 'Please fill in all fields.';
        document.getElementById('response-message').style.color = 'red';
    }
});