
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const About = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");

  useEffect(() => {
    setLoading(true)
    async function getData() {
      let apiUrl = 'cmspage?page_id=partnership-inquiries';
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
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
  <div className="workout_content article_area_content text-justify">
    <div className="text-left">
      <p className="w-100 text-center py-0 mb-0"><strong className="csr-about">MVP BOXING</strong></p>
      <h1 className="csr-head w-100 text-center">PARTNERSHIP INQUIRIES</h1>
      <form id="partnership-form" method="post">
        <div className="contact-info">
          <address className="w-100 mx-auto text-center">
            <strong>
              <a href="tel:312-399-5390"><i className="fa fa-phone mr-3" />312-399-5390</a>
            </strong>
            <email>
              <a href="mailto:info@mvpboxing.com" className="text-lowercase"><i className="fa fa-envelope mr-3" />info@mvpboxing.com</a>
            </email>
            360 East South Water St.<br />
            Chicago, IL 60601
          </address>
        </div>
        <div className="form-group row mx-3">
          <input type="text" name="fname" className="form-control offset-md-4 col-md-4 col-12" placeholder="FIRST NAME" id="fname" />
          <label id="fname-error" className="offset-md-4 error col-md-4" htmlFor="fname" />
        </div>
        <div className="form-group row mx-3">
          <input type="text" name="lname" className="form-control offset-md-4 col-md-4 col-12" placeholder="LAST NAME" id="lname" />
          <label id="lname-error" className="offset-md-4 error col-md-4" htmlFor="lname" />
        </div>
        <div className="form-group row mx-3">
          <input type="text" name="cname" className="form-control offset-md-4 col-md-4 col-12" placeholder="COMPANY NAME" id="cname" />
          <label id="cname-error" className="offset-md-4 error col-md-4" htmlFor="cname" />
        </div>
        <div className="form-group row mx-3">
          <input type="c_email" name="c_email" className="form-control offset-md-4 col-md-4 col-12" placeholder="COMPANY EMAIL" id="c_email" />
          <label id="c_email-error" className="offset-md-4 error col-md-4" htmlFor="c_email" />
        </div>
        <div className="form-group row mx-3">
          <select name="region" className="form-control offset-md-4 col-md-4 col-12" id="region">
            <option disabled selected value>REGION</option>
            <option value="Americas">AMERICAS</option>
            <option value="Europe">EUROPE</option>
            <option value="Middle East, Africa and India">MIDDLE EAST, AFRICA &amp; INDIA</option>
            <option value="Asia Pacific">ASIA PACIFIC</option>
          </select>
          <label id="region-error" className="offset-md-4 error col-md-4" htmlFor="region" />
        </div>
        <div className="form-group row mx-3">
          <div className="col-md-4 offset-md-4 col-12 px-0">
            <textarea rows={5} cols={40} maxLength={2000} className="form-control chkCharacters" placeholder="HOW MAY WE HELP YOU?" name="comment" id="comment" defaultValue={""} />
            <label id="comment-error" className="error" htmlFor="comment" />
            <div className="remChar">You have <span>2000</span> characters remaining for your comment.</div>
          </div>
        </div>
        <div className="fcf formCaptcha form-group row mx-3">
          <div className="col-md-4" />
          <div className="col-md-4 col-12 px-0">
            <div className="g-recaptcha" data-callback="recaptchaCallback" data-expired-callback="recaptchaExpired" data-sitekey="6LcaChsUAAAAAHGA3btBzj_Bx2w-MMQbw53PwcRG" style={{marginTop: '3rem'}} />
            <input id="hidden-grecaptcha" name="hidden-grecaptcha" type="text" style={{opacity: 0, position: 'absolute', top: 0, left: 0, height: 1, width: 1}} />
            <label id="g-recaptcha-response-error" className="offset-md-4 col-md-4 col-12" htmlFor="g-recaptcha-response" />
          </div>
        </div>
        <input type="hidden" name="type" defaultValue="partnership-inquiry" />
        <div className="contactFormErr">
          <p />
        </div>
        <div className="page__links d-md-none d-block" style={{marginBottom: 10}}>
          <h3 className="page__links__title" />
          <button type="submit" className="page__links__link btn feat-link" name="fcf_form_submit" id="fcf_form_submit"><strong>Submit</strong>
            <i className="fa fa-chevron-right" />
          </button>
        </div>
        <div className="fcf formSubmit d-none d-md-block row mx-3 text-center">
          <div className="col-12 px-0">
            <button type="submit" name="fcf_form_submit" id="fcf_form_submit"><strong>SUBMIT</strong>
            </button>
          </div>
          <div className="clear" />
        </div>
      </form>
    </div>
  </div>
</div>
  )
};

export default About;