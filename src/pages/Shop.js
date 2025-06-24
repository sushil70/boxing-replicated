
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';
import img7 from '../elements/img/nacher.jpeg'
import { Link } from 'react-router-dom';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Shop = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");

  useEffect(() => {
    setLoading(true)
    async function getData() {
      let apiUrl = 'cmspage?page_id=shop';
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
    
    <div className="footermarginm mvpBgContainer mvp_container" id="newsMainContents">

      <Link to='/contact'>
      <div className="article_area_content nature" itemScope itemType="https://schema.org/Article">
        <img className='nature_img' src={img7} />
       </div>
       </Link>
    </div>
  )
};

export default Shop;