
import React, {useState, useEffect} from 'react';

import GLOBALS from '../../elements/Globals';
import Loader from '../../elements/Loader';

import { Link, useSearchParams } from "react-router-dom";
import $ from 'jquery';

const NewsBoxing = (props) => {

  const [loading, setLoading] = useState(false);
  const [newsdata, setNewsdata ]= useState([]);
  let [currPage, setCurrPage ]= useState(1);
  let [searchParams, setSearchParams] = useSearchParams();

  let currentPage = 1;

  useEffect(() => {
    async function getData(currentPage) {
      setLoading(true)
      let apiUrl = 'dropboxingnews?p='+currentPage;
      const url = GLOBALS.API_BASE_URL+apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setNewsdata(json.data);
        setLoading(false)
      } catch (error) {
        console.error(error.message);
      }
    }
    getData(currentPage);

    $('.nextPage').on('click', function(){
      currentPage++;
      setCurrPage(currentPage)
      getData(currentPage);
    })

    $('.previousPage').on('click', function(){
      currentPage--;
      if(currentPage > 0){
        setCurrPage(currentPage)
        getData(currentPage);
      }else{
        currentPage++;
        setCurrPage(currentPage)
      }
    })

    return () => {
      // Cleanup logic here
    };
  }, []);

  
  return (
    <div className="mvpBgContainer mvp_container" id="newsMainContent">
  <div className="news_articles_content">
    <div className="left_content_area odds_section">
      <h1 className="titles_article sch_title">BOXING NEWS</h1>
      <ul className="sch_tabs">
        <li className="ative_tab p-1"><Link to="/news-boxing">Boxing</Link></li>
        <li className="ml-3 p-1"><Link to="/news-mma">MMA</Link></li>
      </ul>
      <div className="top_pager d-none d-md-block">
        <div className="left news_prev_post">
          <Link to="/news-boxing" className="margin-left-0 previousPage">
            <div className="odds_arrow_left left" />Prev</Link>
          <Link className="margin-left-1 nextPage" to="/news-boxing">Next<div className="odds_arrow_right right" /></Link>
        </div>
        <div className="clear" />
      </div>
      <div className="news_data_container">
        <div className="news_data">
        <Loader loading={loading} />
          <div className="row nomargin bg-white" itemScope itemType="https://schema.org/ItemList">
          {
            newsdata.map((item, i) => {
              return (
                <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
                  <div className="clear-left mr15 row mx-1">
                    <p className="box-img col-3 col-md-2 pl-1 pr-0">
                    <img itemProp="image" className="img-fluid lazyload" width={100} alt={item.title} src={item.image}/>
                    <em itemProp="datePublished">{item.datecreated}</em>
                    <em className="comment-count-block"><i className="fa fa-comment" aria-hidden="true" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                    <Link itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" to={item.url+"/"+currPage} >
                    <strong itemProp="headline" className="news-title">{item.title}</strong>
                    {item.title}</Link>
                  </div>
                </div>
              )
            })
          }
            
          </div>
        </div>
        <div className="top_pager">
          <div className="right news_prev_post">
            <Link to="/news-boxing" className="margin-left-0 previousPage">
              <div className="odds_arrow_left left" />Prev</Link>
            <Link to="/news-boxing" style={{display: 'flex'}} className='nextPage'>Next<div className="odds_arrow_right right" /></Link>
          </div>
          <div className="clear" />
        </div>
      </div>
      <div className="bottom_pager" />
    </div>
  </div>
</div>


  )
};

export default NewsBoxing;