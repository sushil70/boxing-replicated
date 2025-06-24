
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Videos = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");
  
  return (
       <div className="mvpBgContainer mvp_container" id="newsMainContent">
  <div className="content_section">
    <div id="wrapper" className="video-wrapper">
      <div className="videos-block">
        <div className="videos-title">
          ALL ACCESS VIDEOS
        </div>
        <div className="video-main">
          <div className="videoContainer">
            <ul id="box1" className="box_images d-md-inline-block d-none">
              <li>
                <a href="https://www.mvpboxing.com/videos/boxing-training/punch-speed" title="Punch Speed">
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="lazyload " alt="Punch Speed" data-src="https://www.mvpboxing.com/assets/menusImg/fc6f190eefe424def7cdf436dda9eff12.jpg" /></div>
                </a>
              </li>
              <li>
                <a href="https://www.mvpboxing.com/videos/boxing-training/heavy-bag-training" title="Heavy Bag Training">
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="lazyload " alt="Heavy Bag Training" data-src="https://www.mvpboxing.com/assets/menusImg/fc6f190eefe424def7cdf436dda9eff8.jpg" /></div>
                </a>
              </li>
              <li>
                <a href="https://www.mvpboxing.com/videos/boxing-training/correct-boxing-technique" title="Correct Boxing Technique ">
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="lazyload " alt="Correct Boxing Technique " data-src="https://www.mvpboxing.com/assets/menusImg/090949d28c50cc86e6c9ae3cce020670.jpg" /></div>
                </a>
              </li>
              <li>
                <a href="https://www.mvpboxing.com/videos/boxing-training/how-to-jump-rope" title="How to jump Rope">
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="lazyload " alt="How to jump Rope" data-src="https://www.mvpboxing.com/assets/menusImg/ce9b4aa9c42797b7dc61911c0654a343.jpg" /></div>
                </a>
              </li>
              <li>
                <a href="https://www.mvpboxing.com/videos/boxing-training/double-end-bag" title="Double End Bag">
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="lazyload " alt="Double End Bag" data-src="https://www.mvpboxing.com/assets/menusImg/873ffb78829fd5d1a6c97bdd95e1cee4.jpg" /></div>
                </a>
              </li>
            </ul>
            <iframe className="lazyload" data-src="https://youtube.com/embed/6_XupXmtymc?autoplay=1&mute=1" webkitallowfullscreen mozallowfullscreen width={560} allowFullScreen frameBorder={0} />
          </div>
          <h1 className="video-title">
            Boxing </h1>
          <div className="video-desc">
          </div>
        </div>
        <div className="videos-alt">
          <div className="videos-title" style={{textTransform: 'unset !important'}}>
            Boxing Training </div>
          <div className="arrows">
            <a href="https://www.mvpboxing.com/videos/all-access"><i className="fa prev-arrow fa-caret-square-o-left" /></a>
            <a href="https://www.mvpboxing.com/videos/mma-training"><i className="fa prev-arrow fa-caret-square-o-right" /></a>
          </div>
          <div className="text-center video-block" itemScope itemType="https://schema.org/ItemList">
            <ul className="box_images row mx-0 d-flex justify-content-center">
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/art-of-the-jab" title="Art of the Jab">
                  <meta itemProp="uploadDate" content="2018-07-07 12:19:16" />
                  <meta itemProp="description" content="Art of the Jab" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/d6fe2447e333e6b9ed34d6293c933a89.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Art of the Jab" data-src="https://www.mvpboxing.com/assets/menusImg/d6fe2447e333e6b9ed34d6293c933a89.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Art of the Jab</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/effective-boxing-stance" title="Effective Boxing Stance">
                  <meta itemProp="uploadDate" content="2018-07-07 12:23:03" />
                  <meta itemProp="description" content="Effective Boxing Stance" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/f7655c029bf61c015b035d4f8642ff34.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Effective Boxing Stance" data-src="https://www.mvpboxing.com/assets/menusImg/f7655c029bf61c015b035d4f8642ff34.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Effective Boxing Stance</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/boxing-punches" title="Boxing Punches">
                  <meta itemProp="uploadDate" content="2018-07-07 12:25:19" />
                  <meta itemProp="description" content="Boxing Punches" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/d162810e082f893211045d0fe8743d4d.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing Punches" data-src="https://www.mvpboxing.com/assets/menusImg/d162810e082f893211045d0fe8743d4d.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing Punches</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/one-two-combo" title="One, Two Combo">
                  <meta itemProp="uploadDate" content="2018-07-07 12:27:09" />
                  <meta itemProp="description" content="One, Two Combo" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/170a0a4193cfb22cd99e34786f7936fb.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="One, Two Combo" data-src="https://www.mvpboxing.com/assets/menusImg/170a0a4193cfb22cd99e34786f7936fb.jpg" /></div>
                  <div className="video-title"><span itemProp="name">One, Two Combo</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/punch-set-ups" title="Punch Set ups">
                  <meta itemProp="uploadDate" content="2018-07-07 12:27:59" />
                  <meta itemProp="description" content="Punch Set ups" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/f7f6c2d1685e63e3fb7b5190ddf7f8da.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Punch Set ups" data-src="https://www.mvpboxing.com/assets/menusImg/f7f6c2d1685e63e3fb7b5190ddf7f8da.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Punch Set ups</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/punch-speed" title="Punch Speed">
                  <meta itemProp="uploadDate" content="2018-07-07 12:29:01" />
                  <meta itemProp="description" content="Punch Speed" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/fc6f190eefe424def7cdf436dda9eff12.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Punch Speed" data-src="https://www.mvpboxing.com/assets/menusImg/fc6f190eefe424def7cdf436dda9eff12.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Punch Speed</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/heavy-bag-training" title="Heavy Bag Training">
                  <meta itemProp="uploadDate" content="2018-07-07 12:30:29" />
                  <meta itemProp="description" content="Heavy Bag Training" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/fc6f190eefe424def7cdf436dda9eff8.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Heavy Bag Training" data-src="https://www.mvpboxing.com/assets/menusImg/fc6f190eefe424def7cdf436dda9eff8.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Heavy Bag Training</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/correct-boxing-technique" title="Correct Boxing Technique ">
                  <meta itemProp="uploadDate" content="2018-07-07 12:35:26" />
                  <meta itemProp="description" content="Correct Boxing Technique " />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/090949d28c50cc86e6c9ae3cce020670.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Correct Boxing Technique " data-src="https://www.mvpboxing.com/assets/menusImg/090949d28c50cc86e6c9ae3cce020670.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Correct Boxing Technique </span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/how-to-jump-rope" title="How to jump Rope">
                  <meta itemProp="uploadDate" content="2018-07-07 12:47:42" />
                  <meta itemProp="description" content="How to jump Rope" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/ce9b4aa9c42797b7dc61911c0654a343.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="How to jump Rope" data-src="https://www.mvpboxing.com/assets/menusImg/ce9b4aa9c42797b7dc61911c0654a343.jpg" /></div>
                  <div className="video-title"><span itemProp="name">How to jump Rope</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/double-end-bag" title="Double End Bag">
                  <meta itemProp="uploadDate" content="2019-08-23 18:16:17" />
                  <meta itemProp="description" content="Double End Bag" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/873ffb78829fd5d1a6c97bdd95e1cee4.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Double End Bag" data-src="https://www.mvpboxing.com/assets/menusImg/873ffb78829fd5d1a6c97bdd95e1cee4.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Double End Bag</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/technical-training-with-gamboa-and-manny" title="Technical Training With Gamboa And Manny">
                  <meta itemProp="uploadDate" content="2018-07-07 12:23:03" />
                  <meta itemProp="description" content="Technical Training With Gamboa And Manny" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/e5a15698cc35b3766857bd4ebfb12d44.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Technical Training With Gamboa And Manny" data-src="https://www.mvpboxing.com/assets/menusImg/e5a15698cc35b3766857bd4ebfb12d44.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Technical Training With Gamboa And Manny</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/training-with-monica" title="Training With Monica">
                  <meta itemProp="uploadDate" content="2018-07-07 12:23:03" />
                  <meta itemProp="description" content="Training With Monica" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/e5a15698cc35b3766857bd4ebfb12d45.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Training With Monica" data-src="https://www.mvpboxing.com/assets/menusImg/e5a15698cc35b3766857bd4ebfb12d45.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Training With Monica</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/MVP-BOXING-THE-SOURCE-FOR-BOXING-and-MMA-TRAINING" title="MVP BOXING">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="MVP BOXING" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z255g7b6cbe790ce987998875d5ee8b255.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="MVP BOXING" data-src="https://www.mvpboxing.com/assets/menusImg/z255g7b6cbe790ce987998875d5ee8b255.jpg" /></div>
                  <div className="video-title"><span itemProp="name">MVP BOXING</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/MANNY-MASSON-SHADOW-BOXING" title="MANNY">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="MANNY" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z256g7b6cbe790ce987998875d5ee8b256.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="MANNY" data-src="https://www.mvpboxing.com/assets/menusImg/z256g7b6cbe790ce987998875d5ee8b256.jpg" /></div>
                  <div className="video-title"><span itemProp="name">MANNY</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-1" title="MMA">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="MMA" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z257g7b6cbe790ce987998875d5ee8b257.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="MMA" data-src="https://www.mvpboxing.com/assets/menusImg/z257g7b6cbe790ce987998875d5ee8b257.jpg" /></div>
                  <div className="video-title"><span itemProp="name">MMA</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-2" title="MMA">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="MMA" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z258g7b6cbe790ce987998875d5ee8b258.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="MMA" data-src="https://www.mvpboxing.com/assets/menusImg/z258g7b6cbe790ce987998875d5ee8b258.jpg" /></div>
                  <div className="video-title"><span itemProp="name">MMA</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-3" title="MMA">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="MMA" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z259g7b6cbe790ce987998875d5ee8b259.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="MMA" data-src="https://www.mvpboxing.com/assets/menusImg/z259g7b6cbe790ce987998875d5ee8b259.jpg" /></div>
                  <div className="video-title"><span itemProp="name">MMA</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-4" title="MMA">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="MMA" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z260g7b6cbe790ce987998875d5ee8b260.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="MMA" data-src="https://www.mvpboxing.com/assets/menusImg/z260g7b6cbe790ce987998875d5ee8b260.jpg" /></div>
                  <div className="video-title"><span itemProp="name">MMA</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-5" title="MMA">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="MMA" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z261g7b6cbe790ce987998875d5ee8b261.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="MMA" data-src="https://www.mvpboxing.com/assets/menusImg/z261g7b6cbe790ce987998875d5ee8b261.jpg" /></div>
                  <div className="video-title"><span itemProp="name">MMA</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-6" title="Training">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Training" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z262g7b6cbe790ce987998875d5ee8b262.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Training" data-src="https://www.mvpboxing.com/assets/menusImg/z262g7b6cbe790ce987998875d5ee8b262.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Training</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-7" title="MMA">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="MMA" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z263g7b6cbe790ce987998875d5ee8b263.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="MMA" data-src="https://www.mvpboxing.com/assets/menusImg/z263g7b6cbe790ce987998875d5ee8b263.jpg" /></div>
                  <div className="video-title"><span itemProp="name">MMA</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-8" title="Boxing">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Boxing" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z264g7b6cbe790ce987998875d5ee8b264.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing" data-src="https://www.mvpboxing.com/assets/menusImg/z264g7b6cbe790ce987998875d5ee8b264.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-9" title="Boxing">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Boxing" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z265g7b6cbe790ce987998875d5ee8b265.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing" data-src="https://www.mvpboxing.com/assets/menusImg/z265g7b6cbe790ce987998875d5ee8b265.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-10" title="Boxing">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Boxing" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z266g7b6cbe790ce987998875d5ee8b266.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing" data-src="https://www.mvpboxing.com/assets/menusImg/z266g7b6cbe790ce987998875d5ee8b266.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-11" title="Boxing">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Boxing" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z267g7b6cbe790ce987998875d5ee8b267.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing" data-src="https://www.mvpboxing.com/assets/menusImg/z267g7b6cbe790ce987998875d5ee8b267.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-12" title="Boxing">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Boxing" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z268g7b6cbe790ce987998875d5ee8b268.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing" data-src="https://www.mvpboxing.com/assets/menusImg/z268g7b6cbe790ce987998875d5ee8b268.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-13" title="Boxing">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Boxing" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z269g7b6cbe790ce987998875d5ee8b269.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing" data-src="https://www.mvpboxing.com/assets/menusImg/z269g7b6cbe790ce987998875d5ee8b269.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-14" title="Boxing">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Boxing" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z270g7b6cbe790ce987998875d5ee8b270.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing" data-src="https://www.mvpboxing.com/assets/menusImg/z270g7b6cbe790ce987998875d5ee8b270.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-15" title="Boxing">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Boxing" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z271g7b6cbe790ce987998875d5ee8b271.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing" data-src="https://www.mvpboxing.com/assets/menusImg/z271g7b6cbe790ce987998875d5ee8b271.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
              <li className="col-6  px-2 item" itemProp="itemListElement" itemScope itemType="https://schema.org/VideoObject">
                <a itemProp="url" href="https://www.mvpboxing.com/videos/boxing-training/Manny-Massons-Boxing-Training-for-MMA-16" title="Boxing">
                  <meta itemProp="uploadDate" content="2022-03-05 12:23:03" />
                  <meta itemProp="description" content="Boxing" />
                  <meta itemProp="thumbnailUrl" content="https://www.mvpboxing.com/assets/menusImg/z272g7b6cbe790ce987998875d5ee8b272.jpg" />
                  <div className="training_pic">
                    <i className="fa fa-play-circle" />
                    <img className="img-fluid lazyload" itemProp="thumbnail" alt="Boxing" data-src="https://www.mvpboxing.com/assets/menusImg/z272g7b6cbe790ce987998875d5ee8b272.jpg" /></div>
                  <div className="video-title"><span itemProp="name">Boxing</span><br /><br /><span className="video-span">View &gt;&gt;</span></div>
                </a>
              </li>
            </ul>
          </div>
          <div className="slick-dots">
            <a href="https://www.mvpboxing.com/videos/all-access/"><i className="fa fa-circle " /></a>
            <a href="https://www.mvpboxing.com/videos/boxing-training/"><i className="fa fa-circle active" /></a>
            <a href="https://www.mvpboxing.com/videos/mma-training/"><i className="fa fa-circle  " /></a>
          </div>
        </div>
        {/* ends (.boxing_training_pics) */}
        <div className="comments-block" style={{marginTop: 5}}>
          {/* <div class="mvp-comment-box"></div> */}
          {/* ends (.mvp-comment-box) */}
          <div id="comment-policy" className="comment-policy publisher-anchor-color  ">
            <div className="content">
              <h2 className="title">MVPBOXING.COM Comment Policy
                <i aria-hidden="true" className="fa fa-5x fa-comments-o " />
              </h2>
              <p>"Hey, why isn't my comment displaying?!"</p>
              <p>Please read our <a href="/comment_policy" target="_blank" className="policy-link">Comment Policy</a> before commenting.</p>
            </div>
          </div>
          <div className="comments">
            <div className="main-title w-100 row mx-0">
              <div className="col-7 pl-1"><i className="fa fa-comments-o" /> <span id="total_comments">0</span> <span>Comments</span></div>
              <div id="share-block" className="col-5 text-right pr-1"><i className="fa fa-share-alt" /> Share</div>
            </div>
            <div className="comment-block">
              <div className="social-share-block" style={{display: 'none'}}>
                {/* AddToAny BEGIN */}
                <span className="social-icons a2a_kit a2a_kit_size_32 a2a_default_style">
                  <a className="a2a_button_facebook" href="#" title="Facebook" />
                  <a className="a2a_button_twitter" href="#" title="Twitter" />
                  <a className="a2a_button_whatsapp" href="#" title="WhatsApp" />
                  <a className="a2a_button_facebook_messenger" href="#" title="Facebook Messenger" />
                  <a className="a2a_button_reddit" href="#" title="Reddit" />
                  <a className="a2a_button_pinterest" href="#" title="Pinterest" />
                  <a className="a2a_button_email" href="#" title="Email" />
                </span>
                {/* AddToAny END */}
              </div>
              <div className="mvp-comment-box comments-container" id="comments-container" style={{border: '1px solid #cccccc', backgroundColor: '#ffffff', minHeight: 120, margin: 15, borderRadius: '3px 3px 3px 3px', fontWeight: 'bold', fontStyle: 'italic', paddingTop: 29}}>MVPBoxing Commenting <br />coming soon.!</div>
              {/* ends (.content-separator2) */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clear" />
  </div>
</div>

  )
};

export default Videos;