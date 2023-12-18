// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Create a container div
    const container = document.createElement('div');
    container.innerHTML = `
    <div id="mc_embed_shell">
    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
        <style type="text/css">
            #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        </style>
        <div id="mc_embed_signup">
        <form action="https://njit.us21.list-manage.com/subscribe/post?u=806d17f279cea77450fb64924&amp;id=9b256c8488&amp;f_id=007ef4e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
            <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-FNAME">First Name </label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div><div class="mc-field-group"><label for="mce-LNAME">Last Name </label><input type="text" name="LNAME" class=" text" id="mce-LNAME" value=""></div>
            <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display: none;"></div>
                <div class="response" id="mce-success-response" style="display: none;"></div>
            </div>
        <div aria-hidden="true" style="position: absolute; left: -5000px;">
            /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
            <input type="text" name="b_806d17f279cea77450fb64924_9b256c8488" tabindex="-1" value="">
        </div>
            <div class="optionalParent">
                <div class="clear foot">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                    <p style="margin: 0px auto;"><a href="http://eepurl.com/iGox_w" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
                </div>
            </div>
        </div>
        </form>
        </div>
    `;

    // Append the form to the body
    document.body.appendChild(container);

    // Add event listener for form submission
    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

        const apiUrl = 'https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members';
        const apiKey = 'e68bba544b40280cf4418040b19a4433-us21';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'apikey ' + apiKey,
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
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
