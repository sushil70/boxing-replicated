
import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const ExternalPage = (props) => {

 const location = useLocation();
 const queryParams = new URLSearchParams(location.search);
 const url = queryParams.get('url');

 const [externalUrl, setExternalUrl ]= useState([]);

  useEffect(() => {
    async function getData() {
      setExternalUrl(url)
    }
    getData();
    return () => {
      // Cleanup logic here
    };
  }, []);

  
  return (
    <div className="mvpBgContainer mvp_container podcost_externalpage">
      <iframe className='iframe_podcost_h' src={externalUrl} width="100%" height="450" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  )
};

export default ExternalPage;