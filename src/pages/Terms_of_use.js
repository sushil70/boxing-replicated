
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const TermsOfUse = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");
  const [pagetitle, setPagetitle ]= useState("");

  useEffect(() => {
    setLoading(true)
    async function getData() {
      let apiUrl = 'cmspage?page_id=terms_of_use';
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
      <div className="article_area_content" itemScope itemType="https://schema.org/Article">
        <h1 itemProp="name" className="titles_article ">{pagetitle}</h1>
        <div className="workout_content text-justify page-loader">
        <Loader loading={loading} />
        <div dangerouslySetInnerHTML={{ __html: pagedata }} />
      </div>
    </div>
    </div>
  )
};

export default TermsOfUse;