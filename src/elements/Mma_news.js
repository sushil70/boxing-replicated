
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const MmaNews = (props) => {

  const [loading, setLoading] = useState(false);
  const [news, setNews ]= useState([]);

  useEffect(() => {
    setLoading(true)
    async function getDataBoxingNews() {
      let apiUrl = 'maafightstrems';
      const url = GLOBALS.API_BASE_URL+apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setNews(json.data);
        setLoading(false)
      } catch (error) {
        console.error(error.message);
      }
    }
    getDataBoxingNews();
    return () => {
      // Cleanup logic here
    };
  }, []);

  
  return (
    <>
     <header>
       <div className="header-text"><a href="javascript:void(0)">MMA NEWS</a></div>
    </header>
    <div className="row nomargin bg-grey0 news_data">
      {
        news.map((item, i) => {
          return (
      <div key={i} className="col-sm-12 mt15 flex-col nopadding feed">
        <i id="menuIcon" className="ml10 fa fa-chevron-right chevron-icon" />
        <div className="clear-left mr15 row mx-1">
          <p className="box-img col-4 pl-2">
            <img className="img-fluid lazyload" data-src={item.image} src={item.image} />
            </p>

            <Link to={item.id}  className="list-item caption news-caption col-8 pl-2 pr-3 txt-black text-left news_link">
                <strong className="news-title">{item.title}</strong>
                {item.content}
            </Link>
            </div>
      </div>
        )
      })
    }
    </div>
    </>
    
  )
};

export default MmaNews;