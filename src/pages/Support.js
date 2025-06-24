
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Support = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");
  const [pagetitle, setPagetitle ]= useState("");

  useEffect(() => {
    async function getData() {
      let apiUrl = 'cmspage?page_id=support';
      const url = GLOBALS.API_BASE_URL+apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPagedata(json.data.content);
        setPagetitle(json.data.page_title);
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
  
  <div className="service_content contentShadow">
    <div className="fContactForm p-3">
      <h1 className="titles_article text-center">support</h1>
      <div className="left fContactFormArea">
        <div className="supportList">
          <p className="supportTitle">Monitor Recommendations:</p>
          <p className="supportDesc">For best results please have your monitors resolution set to 1024x768 or higher</p>
        </div>
        <div className="supportList">
          <p className="supportTitle">Browser Requirements:</p>
          <p className="supportDesc">Internet Explorer 9.0+, <a href="#">(Get IE 7.0)</a></p>
        </div>
        <div className="supportList">
          <p className="supportTitle">JavaScript Requirements:</p>
          <p className="supportDesc">In order for the MVPboxing.com web site to function properly, JavaScript must be enabled</p>
        </div>
        <div className="supportList">
          <p className="supportTitle">Video Requirements:</p>
          <p className="supportDesc">Windows Media Player 7.0+, <a href="#">(Get Win Media Player 8.0+)</a></p>
        </div>
        <div className="supportList">
          <p className="supportTitle">Other Requirements:</p>
          <p className="supportDesc">Flash Player 10.0, <a href="#">(Get Flash Player 10.0+)</a></p>
        </div>
        <div className="supportList">
          <p className="supportTitle">Recommended Requirements:</p>
          <p className="supportDesc">Quick Time 5.0+, <a href="#">(Get Quick Time 7.0+)</a></p>
          <p className="supportDesc">Cable or DSL connection is recommended</p>
        </div>
        <div className="support-contact">For other help, please <Link to="/Contact" className="text-red underline">Contact Us</Link></div>
      </div>
      <div className="right fContactFormAd2" />
      <div className="clear" />
    </div>
  </div>
</div>
  )
};

export default Support;