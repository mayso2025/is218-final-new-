// script.js
document.addEventListener('DOMContentLoaded', function() {
    const formHTML = `
        <form id="newsletterForm">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required>

            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Subscribe</button>
        </form>
    `;

    // Create a container div
    const container = document.createElement('div');
    container.innerHTML = formHTML;

    // Append the form to the body
    document.body.appendChild(container);

    // Add event listener for form submission
    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        const apiUrl = 'https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members';
        const apiKey = 'YOUR_API_KEY';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'apikey ' + apiKey,
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success, e.g., show a thank you message to the user
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors, e.g., display an error message to the user
        });
    });
});


