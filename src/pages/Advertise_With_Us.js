
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const AdvertiseWithUs = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");
  const [pagetitle, setPagetitle ]= useState("");

  useEffect(() => {
    setLoading(true)
    async function getData() {
      let apiUrl = 'cmspage?page_id=advertise_with_us';
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
    <div className="mvpBgContainer mvp_container adver" id="newsMainContent">
  <div className="article_area_content">
    <h1 className="titles_article border_titles_article">Advertise on MVP Boxing on Your Terms</h1>
    <div className="workout_content borderNone text-left size-n-col1 margin-bottom-0">
      <p className="first"><a href="http://mvpboxing.com" target="_blank" title="MVPBoxing.com" className="text-red uk-text-bold">MVPBOXING.com</a> Your Way gives you the convenience and flexibility you need with the advertising impact you must have.</p>
      <div className="inline-content-1">
        <p className="uk-text-bold">Your Way provides customization to your specific MVPBOXING.com and MVP Boxing Mobile needs:</p>
        <ul>
          <li>Target at a local level</li>
          <li>Create your own custom run-of-site display ads with easy-to-use templates</li>
          <li>Plan your own campaign, within your budget</li>
          <li>Target specific dates for extra visibility for your brand or product</li>
          <li>Access the status of your campaign online - whenever you want!</li>
          <li>Optimize your campaign, testing different images, copy and colors</li>
        </ul>
      </div>
      <p>Please choose the option that best suits your advertising needs:</p>
      <div className="uk-grid-separation">
        <p>
          <a className="typeform-share text-red uk-text-bold" href="https://mvp.typeform.com/to/kPnBqG" data-mode={1} target="_blank" title="Advertise on MVPBOXING.COM">
            <i className="uk-icon uk-icon-minus-circle" />&nbsp;Under $3,000
          </a><br /> I have an advertising budget of $3,000 or less and would like to create a campaign now.<br />
        </p>
        <p>
          <a className="typeform-share text-red uk-text-bold" href="https://mvp.typeform.com/to/kPnBqG" data-mode={1} target="_blank" title="Advertise on MVPBOXING.COM">
            <i className="uk-icon uk-icon-plus-circle" />&nbsp;Over $3,000
          </a> I have an advertising budget of over
          <a className="typeform-share text-red uk-text-bold" href="https://mvp.typeform.com/to/kPnBqG" data-mode={1} target="_blank">$3,000 contact our sales team</a>
        </p>
      </div>
    </div>
  </div>
  
</div>
  )
};

export default AdvertiseWithUs;