
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Comingsoon = (props) => {

  
  return (
    <div className="mvpBgContainer mvp_container">
    <div className="service_content contentShadow" style={{backgroundImage: 'linear-gradient(to top, rgb(71, 72, 76) 10%, rgb(23, 26, 31) 100%)', position: 'relative', minHeight: 49}}>
      <div className="fContactForm" style={{padding: '100px 0 80px !important', textAlign: 'center'}}>			
        <img className="v-center ls-is-cached lazyloaded" alt="espanol comming soon" data-src="https://www.mvpboxing.com/assets/images/forum-coming-soon-1.png" src="https://www.mvpboxing.com/assets/images/forum-coming-soon-1.png" />
      </div>
    </div>
  </div>
  )
};

export default Comingsoon;