
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const SidebarBottom = (props) => {

  const [loading, setLoading] = useState(false);
  const [news, setNews ]= useState([]);

  useEffect(() => {
    setLoading(true)
    async function getDataBoxingNews() {
      let apiUrl = 'headline';
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
      <div className='headlines'>BOXING HEADLINES</div>
    </header>
    <div className="row nomargin bg-grey0 news_data">
      {
        news.map((item, i) => {
          return (
            <div key={i} className="headlines-item-block"> 
            <i id="menuIcon" className="headlines-contend" />
             <div className="">
                <Link to={item.id}  className="headlines-text">
                <strong className="headlines-text-item">{item.title}</strong>
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

export default SidebarBottom;