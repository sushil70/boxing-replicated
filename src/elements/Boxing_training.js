
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';
import { Link } from "react-router-dom"; 
import $ from 'jquery';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const BoxingTraining = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState([]);

  useEffect(() => {
       $('.DYBOXING_TRAINING_contend1').on('click', function(){
       $("html, body").animate({ scrollTop: 0 }, "slow");
        })
     setLoading(true)
        async function getData() {
          let apiUrl = 'trainings?trainning_type=dynamic_boxing';
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
    <div className="DYBOXING_TRAINING">
                <h3 className="DYBOXING_TRAINING_text">DYNAMIC BOXING TRAINING</h3>
                <div className="DYBOXING_TRAINING_contend1">
                  {pagedata.map((item, i) => {
                    return (
                      <div className="videos1"> <img src={item.image} className="videos1img" alt /> 
                        <Link to={item.youtubevideolink}>          			
                        <img src="assets/img/play.png" className="play_icon" alt />          		
                        </Link>
                    <div className="videos_text">
                      <div className="time">
                        <p className="time_text">{item.videoduration}</p>
                      </div>
                      <p className="video_text">Videos</p>
                      <p className="Fighting_off">{item.title}</p>
                    </div>
                  </div>
                    )
                  })}
                </div>
                <div className="DYBOXING_TRAINING_contend2" />
              </div>
  )
};

export default BoxingTraining;