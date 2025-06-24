
import React, {useState, useEffect} from 'react';
import { useParams, Link} from "react-router-dom";

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Injury = (props) => {

  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");

  useEffect(() => {
    setLoading(true)
    async function getData() {
      let apiUrl = 'bodyinjury?page_id='+id;
      const url = GLOBALS.API_BASE_URL+apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPagedata(json.data);
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
      <h1 className="titles_article border_titles_article1">
        <span itemProp="name">{pagedata.page_title}</span>            
        <div className="socialInfo">
          <div className="left">mvpboxing                                    &nbsp;|&nbsp;
            <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;May 04, 2017, 12:05PM              </div>
          <div className="clear" />
        </div>{/* ends (.socialInfo) */}
      </h1>

        <div className="workout_content text-justify page-loader">
        <Loader loading={loading} />
        <div dangerouslySetInnerHTML={{ __html: pagedata.content }} />
      </div>
    </div>
    </div>
  )
};

export default Injury;