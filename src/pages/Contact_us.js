
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Contact_us = (props) => {

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
<div className="mvpBgContainer mvp_container" id="newsMainContents">
  <div className="content_section">
    <div id="wrapper">
      <div className="left-content">
        <div id="form-area">
          <div className="form">
            <form id="contact-form" method="post" noValidate="novalidate">
              <input type="text" placeholder="Full Name" name="cf_name" id="cf_name" /><br />
              <input type="email" placeholder="Email Address" name="cf_email" id="cf_email" /><br />
              <textarea placeholder="HOW MAY WE HELP YOU?" name="cf_message" id="cf_message" defaultValue={""} />
              <button type="submit" className="submit" id="submit">Send Message  
                <div className="popup_box">
                  <div className="pop_up_msg">
                    <p>Test Data</p>
                    <a>Test Data</a>
                  </div>
                </div>
              </button></form></div>
          <div className="address-area">
            <h2>Masson, LLC</h2>
            <p>360 East South Water St.<br /> Chicago, IL 60601</p>
            <ul>
              <li>Phone: <a href="tel:312-399-5390">312-399-5390</a>; Fax: <a href="tel:312-951-0896">312-951-0896</a></li>
              <li>Email: <a href="mailto:info@mvpboxing.com">info@mvpboxing.com</a></li>
            </ul>
          </div>
        </div>
        <div id="contact">
          <img className=" lazyloaded" alt="Contact" data-src="https://www.mvpboxing.com/assets/images/world.jpg" src="https://www.mvpboxing.com/assets/images/world.jpg" />
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-01 masterTooltip" title="Los Angeles,USA">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-02 masterTooltip" title="Las Uegas,USA">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-03 masterTooltip" title="Chicago,IL USA Masson LLC. 312-399-5390">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-04 masterTooltip" title="New York City (NUC),USA">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-05 masterTooltip" title="Germany">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-06 masterTooltip" title="Sweden 46706886829">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-07 masterTooltip" title="Poland">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-08 masterTooltip" title="Russia">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-09 masterTooltip" title="Tokyo,JAPAN">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-10 masterTooltip" title="Sydney,Australia">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-11 masterTooltip" title="South Africa">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-12 masterTooltip" title="Brazil,SA">+<div className="circle" /><div className="circle2" /></a>
          <a href="http://mvpboxing.com/contact/" className="place-icon place-icon-13 masterTooltip" title="Argentina,SA">+<div className="circle" /><div className="circle2" /></a>
          <div className="info">
            <h2>INFO:</h2>
            <p>Roll your mouse over the hotspots for
              more info. Click on a hotspot to open
              the link to the web location of that
              specific hotspot</p>
          </div>
        </div>
        <div className="site-bg">
          <a><img className=" lazyloaded" alt="Contact" data-src="https://www.mvpboxing.com/assets/images/site_bg.jpg" src="https://www.mvpboxing.com/assets/images/site_bg.jpg" /></a>
        </div></div>
      <div className="clear" />
    </div>
  </div>
</div>

  )
};

export default Contact_us;