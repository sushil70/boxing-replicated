
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Contact = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");

  useEffect(() => {
    setLoading(true)
    async function getData() {
      let apiUrl = 'cmspage?page_id=contact-us';
      const url = GLOBALS.API_BASE_URL+apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPagedata(json.data.content);
        setLoading(false)
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
    return () => {
      // Cleanup logic here
    };
  }, []);

  
  return (

    <div className="mvpBgContainer mvp_container" id="newsMainContents" style={{width: '100%'}}>
  {/* <div class="ad d-none d-md-block">
	<input type="hidden" name="IL_IN_ARTICLE">
</div> */}
  <div className="service_content-contact service_content contentShadow" style={{margin: 0, minHeight: 410}}>
    <div className="fContactForm">
      <h1 className=" titles_article text-center">contact us</h1>{/* ends (.contactPageTitle) */}
      <form id="contact-us-form" method="post" noValidate="novalidate">
        <div className="contact-info">
          <address className="w-100 mx-auto text-center">
            <strong>
              <a href="tel:312-399-5390"><i className="fa fa-phone mr-3" aria-hidden="true" />312-399-5390</a>
            </strong>
            <email>
              <a href="mailto:info@mvpboxing.com" className="text-lowercase"><i className="fa fa-envelope mr-3" aria-hidden="true" />info@mvpboxing.com</a>
            </email>
            360 East South Water St.<br />
            Chicago, IL 60601
          </address>
        </div>			<div className="form-group row mx-3">
          <select name="send_to_depart" className="form-control offset-md-4 col-md-4 col-12" id="send_to_depart">
            <option value selected>TOPIC</option>
            <option value="Programs">PROGRAMS</option>
            <option value="Services">SERVICES</option>
            <option value="Boxing_Training">BOXING TRAINING</option>
            <option value="GLOBAL_BRAND_PARTNERSHIPS">GLOBAL BRAND PARTNERSHIPS</option>
            <option value="LICENSING">LICENSING</option>
            <option value="STRATEGIC_INITIATIVES">STRATEGIC INITIATIVES</option>
            <option value="REP_&_MANAGEMENT">REP. &amp; MANAGEMENT</option>
            <option value="MARKETING_&_ADVERTISING">MARKETING &amp; ADVERTISING</option>
            <option value="PROMOTIONS">PROMOTIONS</option>
            <option value="EVENTS_&_TICKETS">EVENTS &amp; TICKETS</option>
            <option value="MEDIA_RELATIONS">MEDIA RELATIONS</option>
            <option value="Other">Other</option>
          </select>
          <label id="send_to_depart-error" className="offset-md-4 error col-md-4" htmlFor="send_to_depart" />
        </div>
        <div className="form-group row mx-3">
          <input type="cf_email" name="cf_email" className="form-control offset-md-4 col-md-4 col-12" placeholder="EMAIL ADDRESS" id="cf_email" />
          <label id="cf_email-error" className="offset-md-4 error col-md-4" htmlFor="cf_email" />
        </div>
        <div className="form-group row mx-3">
          <div className="col-md-4 offset-md-4 col-12 px-0">
            <textarea rows={5} cols={40} maxLength={2000} className="form-control chkCharacters" placeholder="HOW MAY WE HELP YOU?" name="cf_message" id="cf_message" defaultValue={""} />
            <label id="cf_message-error" className="error" htmlFor="cf_message" />
            <div className="remChar">You have <span>2000</span> characters remaining for your message.</div>
          </div>
        </div>
        <div className="fcf formCaptcha form-group row mx-3">
          <div className="col-md-4 offset-md-4 col-12 px-0">
            <div className="g-recaptcha" data-callback="recaptchaCallback" data-expired-callback="recaptchaExpired" data-sitekey="6LcaChsUAAAAAHGA3btBzj_Bx2w-MMQbw53PwcRG" style={{marginTop: '3rem'}}><div style={{width: 304, height: 78}}><div><iframe title="reCAPTCHA" width={304} height={78} role="presentation" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcaChsUAAAAAHGA3btBzj_Bx2w-MMQbw53PwcRG&co=aHR0cHM6Ly93d3cubXZwYm94aW5nLmNvbTo0NDM.&hl=en&v=w0_qmZVSdobukXrBwYd9dTF7&size=normal&cb=pcqafktvh3el" /></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: 250, height: 40, border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: 0, resize: 'none', display: 'none'}} defaultValue={""} /></div><iframe style={{display: 'none'}} /></div>
            {/* <div class="g-recaptcha" data-callback="recaptchaCallback" data-expired-callback="recaptchaExpired" data-sitekey="6Lcgpe4UAAAAABpiYg3wC0gm53wrjyE46SIUIK5P" style="margin-top: 3rem;"></div> */}
            <input id="hidden-grecaptcha" name="hidden-grecaptcha" type="text" style={{opacity: 0, position: 'absolute', top: 0, left: 0, height: 1, width: 1}} />
            <label id="g-recaptcha-response-error" className="col-md-offset-4 col-md-4 col-12" htmlFor="g-recaptcha-response" />
          </div>
        </div>
        <input type="hidden" name="type" defaultValue="footer-contact" />
        <div className="contactFormErr"><p /></div>
        <div className="page__links d-md-none d-block" style={{marginBottom: 10}}>
          {/* <div class="fcf formSubmit form-group row mx-3"> */}
          <h3 className="page__links__title" />
          <button type="submit" className="page__links__link btn feat-link" name="fcf_form_submit" id="fcf_form_submit"><strong>Submit</strong>
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </button>
        </div>
        <div className="fcf formSubmit d-none d-md-block row mx-3 text-center">
          <div className="col-12 px-0">
            {/* <div class="col-md-4 col-12 px-0 webformSubmit text-center w-100"> */}
            <button type="submit" name="fcf_form_submit" id="fcf_form_submit"><strong>SUBMIT</strong>
            </button>
          </div>
          <div className="clear" />
        </div>
      </form>
      <div className="right fContactFormAd2" />
      <div className="clear" />
    </div>{/* ends (.fContactForm) */}
  </div>{/* ends (.service_content) */}
  {/* <div class="ad">
  <input type="hidden" name="IL_IN_ARTICLE">
    </div> */}
</div>


  )
};

export default Contact;