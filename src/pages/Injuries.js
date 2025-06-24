
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from "jquery";

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const BodyInjuries = (props) => {

  useEffect(() => {

    $('.scan .item').on('click', function(){
      $("html, body").animate({ scrollTop: 0 }, "slow");
    })

  }, []);
  
  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
  {/* <div class="ad d-none d-md-block">
	<input type="hidden" name="IL_IN_ARTICLE">
</div> */}
  <div className="service_content pt-4" id="scan_flash" style={{minHeight: 58}}>
    <div id="middle_inner_wraper1">
      <div id="body-scan-injury" className="row nomargin">
        <div id="male-body-cont" className="col-sm-12 d-flex justify-content-center">
          <div className="scan" id="scan">
            <img title="Male Injuries" alt="Male Injuries" data-src="assets/body-scan-injuries/body_scan_male001.png" className="maleImage lazyloaded" src="assets/body-scan-injuries/body_scan_male001.png" />
            <div className="scan01" style={{height: 0}} />
            <Link title="Head Injury" to="/body-injury/male-head-injury" className="item item1" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item1.png" title="Head Injury" alt="Head Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item1.png" /></Link>
            <Link title="Facial Injury" to="/body-injury/male-facial-injury" className="item item2" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item2.png" title="Facial Injury" alt="Facial Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item2.png" /></Link>
            <Link title="Shoulder Injury" to="/body-injury/male-shoulder-injury" className="item item3" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item3.png" title="Shoulder Injury" alt="Shoulder Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item3.png" /></Link>
            <Link title="Wrist Injury" to="/body-injury/male-wrist-injury" className="item item4" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item4.png" title="Wrist Injury" alt="Wrist Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item4.png" /></Link>
            <Link title="Lowback Injury" to="/body-injury/male-lowback-injury" className="item item5" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item6.png" title="Lowback Injury" alt="Lowback Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item6.png" /></Link>
            <Link title="Elbow Injury" to="/body-injury/male-elbow-injury" className="item item6" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item5.png" title="Elbow Injury" alt="Elbow Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item5.png" /></Link>
            <Link title="Lowback Injury" to="/body-injury/male-lowback-injury" className="item item7" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item7.png" title="Lowback Injury" alt="Lowback Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item7.png" /></Link>
            <Link title="Knee Injury" to="/body-injury/male-knee-injury" className="item item8" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item8.png" title="Knee Injury" alt="Knee Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item8.png" /></Link>
            <Link title="Lowerleg Injury" to="/body-injury/male-lowerleg-injury" className="item item9" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item9.png" title="Lowerleg Injury" alt="Lowerleg Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item9.png" /></Link>
            <Link title="Foot Injury" to="/body-injury/male-foot-injury" className="item item10" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item10.png" title="Foot Injury" alt="Foot Injury" className="img lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item10.png" /></Link>
            <Link title="Ankle Injury" to="/body-injury/male-ankle-injury" className="item item11" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item11.png" title="Ankle Injury" alt="Ankle Injury" className="img ls-is-cached lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item11.png" /></Link>
          </div>
        </div>
        <div id="female-body-cont" className="col-sm-12 d-flex justify-content-center">
          <div className="scan" id="scan02">
            <img title="Female Injuries" alt="Female Injuries" data-src="assets/body-scan-injuries/body_scan_female001.png" className=" ls-is-cached lazyloaded" src="assets/body-scan-injuries/body_scan_female001.png" />
            <div className="scan02" style={{height: 0}} />
            <Link title="Shoulder Injury" to="/body-injury/female-shoulder-injury" className="item item1" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item3.png" title="Shoulder Injury" alt="Shoulder Injury" className="img ls-is-cached lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item3.png" /></Link>
            <Link title="Elbow Injury" to="/body-injury/female-elbow-injury" className="item item2" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item5.png" title="Elbow Injury" alt="Elbow Injury" className="img ls-is-cached lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item5.png" /></Link>
            <Link title="Wrist Injury" to="/body-injury/female-wrist-injury" className="item item3" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item4.png" title="Wrist Injury" alt="Wrist Injury" className="img ls-is-cached lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item4.png" /></Link>
            <Link title="Lowback Injury" to="/body-injury/female-lowback-injury" className="item item4" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item6.png" title="Lowback Injury" alt="Lowback Injury" className="img ls-is-cached lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item6.png" /></Link>
            <Link title="Knee Injury" to="/body-injury/female-knee-injury" className="item item5" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item8.png" title="Knee Injury" alt="Knee Injury" className="img ls-is-cached lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item8.png" /></Link>
            <Link title="Lowerleg Injury" to="/body-injury/female-lowerleg-injury" className="item item6" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item9.png" title="Lowerleg Injury" alt="Lowerleg Injury" className="img ls-is-cached lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item9.png" /></Link>
            <Link title="Ankle Injury" to="/body-injury/female-ankle-injury" className="item item7" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item11.png" title="Ankle Injury" alt="Ankle Injury" className="img ls-is-cached lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item11.png" /></Link>
            <Link title="Foot Injury" to="/body-injury/female-foot-injury" className="item item8" style={{opacity: 1}}><img data-src="assets/body-scan-injuries/item10.png" title="Foot Injury" alt="Foot Injury" className="img ls-is-cached lazyloaded hvr-bounce-out" src="assets/body-scan-injuries/item10.png" /></Link>
          </div>
        </div>
      </div>
      {/* ends (#body-scan-injury) */}
    </div>
    {/* ends (#middle_inner_wraper) */}
  </div>
  {/* ends (.service_content) */}
  {/* <div class="ad">
  <input type="hidden" name="IL_IN_ARTICLE">
    </div> */}
</div>
  )
};

export default BodyInjuries;