
import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';
import { Link } from 'react-router-dom';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='fa fa-chevron-right chevron_right_icon' onClick={onClick}></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='fa fa-chevron-left chevron_left_icon' onClick={onClick}
    />
  );
}

const Podcast = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");

  var settings = {
    infinite: true,
    slidesToShow: 2,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          swipeToSlide: true,
        }
      }
    ]
  };
  
  return (
    <>
       <header className='podcost_header'>
         <div className="header-text"><a href="#">PODCASTS</a></div>   
      </header>
      <Slider {...settings}>
        <div>
          <div className='podcost_contend_box'>
              <div className="podcost_contend_box_main">
                  <div className="podcost_contend_left">
                    <Link target='_blank' className="Link" to="https://open.spotify.com/show/6mEX6mQ7RlA6jnNwEy4XN0">
                    <img className='podcost_img' src={"assets/images/pp1.jpg"}/>
                  </Link>
                  </div>
                  <div className="podcost_contend_right">
                    <div className="podcost_contend_right_title">
                    <Link target='_blank' className="podcost_contend_right_title_Link" to="https://open.spotify.com/show/6mEX6mQ7RlA6jnNwEy4XN0">THE FIGHT</Link>
                    </div>
                  <div className="podcost_contend_right_description"><span className='podcost_contend_right_span'>Hall of Fame boxing commentator and trainer to 18 world champion fighters, Teddy Atlas shares his views on all things boxing. In addition to giving fight analysis, predictions, and a look at what’s happening behind the scenes in the boxing world, Teddy connects the tenets and lessons learned inside the ring to broader application in life. Hosted on Acast. See  for more information.</span></div>
                <div className="podcost_contend_right_ctaLink">
                  <Link target='_blank' className="Pill-button-with-graphics" to="https://open.spotify.com/show/6mEX6mQ7RlA6jnNwEy4XN0">Listen here
                   
                  </Link>
                </div>
                  </div>
              </div>

          </div>
        </div>

        <div>
          <div className='podcost_contend_box'>
              <div className="podcost_contend_box_main">
                  <div className="podcost_contend_left">
                    <Link target='_blank' className="Link" to="https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk">
                    <img className='podcost_img' src={"assets/images/pp2.jpg"}/>
                  </Link>
                  </div>
                  <div className="podcost_contend_right">
                    <div className="podcost_contend_right_title">
                    <Link target='_blank' className="podcost_contend_right_title_Link" to="https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk">THE JOE ROGAN EXPERIENCE</Link>
                    </div>
                  <div className="podcost_contend_right_description"><span className='podcost_contend_right_span'>The official podcast of comedian Joe Rogan.</span></div>
                <div className="podcost_contend_right_ctaLink">
                <Link target='_blank' className="Pill-button-with-graphics" to="https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk">Listen here
        </Link>
      </div>
                  </div>
              </div>

              </div>
        </div>

        <div>
          <div className='podcost_contend_box'>
              <div className="podcost_contend_box_main">
                  <div className="podcost_contend_left">
                    <Link target='_blank' className="Link" to="https://open.spotify.com/show/0e5hWNp8cvtzuM0vPOY0OD">
                    <img className='podcost_img' src={"assets/images/pp3.jpg"}/>
                  </Link>
                  </div>
                  <div className="podcost_contend_right">
                    <div className="podcost_contend_right_title">
                    <Link target='_blank' className="podcost_contend_right_title_Link" to="https://open.spotify.com/show/0e5hWNp8cvtzuM0vPOY0OD">WORTH A LISTEN</Link>
                    </div>
                  <div className="podcost_contend_right_description"><span className='podcost_contend_right_span'>Travel can do amazing things: broaden horizons, build relationships, and rejuvenate the soul. But often, those experiences come at a cost. This is Peak Travel, a new podcast from WHYY about how travel shapes communities in hot-spots around the world. We’ll share the wonder that comes with exploring new places, as well as the harm that our worst travel habits can cause. And we’ll try to figure out how we can do it better. Each episode transports you to a new destination. You’ll meet the people who call that place home, hear their stories.</span></div>
                <div className="podcost_contend_right_ctaLink">
                <Link target='_blank' className="Pill-button-with-graphics" to="https://open.spotify.com/show/0e5hWNp8cvtzuM0vPOY0OD">Listen here
                
        </Link>
      </div>
                  </div>
              </div>

              </div>
        </div>

        <div>
          <div className='podcost_contend_box'>
              <div className="podcost_contend_box_main">
                  <div className="podcost_contend_left">
                    <Link className="Link" target='_blank' to="https://open.spotify.com/show/64tVcrOKujpIggqO0X16JB">
                    <img className='podcost_img' src={"assets/images/5 Live Boxing.png"}/>
                  </Link>
                  </div>
                  <div className="podcost_contend_right">
                    <div className="podcost_contend_right_title">
                    <Link target='_blank' className="podcost_contend_right_title_Link" to="https://open.spotify.com/show/64tVcrOKujpIggqO0X16JB">5 LIVE BOXING WITH STEVE BUNCE</Link>
                    </div>
                  <div className="podcost_contend_right_description"><span className='podcost_contend_right_span'>All the latest discussion, news and reaction to Chris Eubank Jr v Conor Benn.</span></div>
                <div className="podcost_contend_right_ctaLink">
                <Link target='_blank' className="Pill-button-with-graphics" to="https://open.spotify.com/show/64tVcrOKujpIggqO0X16JB">Listen here
        </Link>
      </div>
                  </div>
              </div>

              </div>
        </div>
      </Slider>
    </>
  )
};

export default Podcast;