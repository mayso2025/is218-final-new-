//modified code from Mailchimps embedded form + chatGPT assistance 

import React, { useEffect } from 'react';

const SignUpForm = () => {
  useEffect(() => {
    // Load Mailchimp validation script
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    // Place your script logic here
    (function($) {
      window.fnames = new Array();
      window.ftypes = new Array();
      fnames[0] = 'EMAIL';
      ftypes[0] = 'email';
      fnames[1] = 'FNAME';
      ftypes[1] = 'text';
      fnames[2] = 'LNAME';
      ftypes[2] = 'text';
      fnames[3] = 'ADDRESS';
      ftypes[3] = 'address';
      fnames[4] = 'PHONE';
      ftypes[4] = 'phone';
      fnames[5] = 'BIRTHDAY';
      ftypes[5] = 'birthday';
    })(jQuery);
    var $mcj = jQuery.noConflict(true);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  return (
    <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <style type="text/css">
        {`
          #mc_embed_signup {
            background: #fff;
            clear: left;
            font: 14px Helvetica, Arial, sans-serif;
            width: 600px;
          }

          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
             We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        `}
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://njit.us21.list-manage.com/subscribe/post?u=806d17f279cea77450fb64924&amp;id=9b256c8488&amp;f_id=007ef4e6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <h2>Subscribe To Our Newsletter Now For A Free Coffee and Pastry On Your First Visit!</h2>
          <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
          <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" /></div>
          <div className="mc-field-group"><label htmlFor="mce-FNAME">First Name </label><input type="text" name="FNAME" className="text" id="mce-FNAME" value="" /></div>
          <div className="mc-field-group"><label htmlFor="mce-LNAME">Last Name </label><input type="text" name="LNAME" className="text" id="mce-LNAME" value="" /></div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          </div>
          
          <div className="optionalParent">
            <div className="clear foot">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
              <p style={{ margin: '0px auto' }}>
                <a href="http://eepurl.com/iGox_w" title="Mailchimp - email marketing made easy and fun">
                  <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                    <img
                      className="refferal_badge"
                      src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                      alt="Intuit Mailchimp"
                      style={{
                        width: '220px',
                        height: '40px',
                        display: 'flex',
                        padding: '2px 0px',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;


