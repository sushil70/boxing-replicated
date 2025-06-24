
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const News = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");
  
  return (
    <>
       <div className="mvpBgContainer mvp_container" id="newsMainContent">
  <div className="news_articles_content">
    <div className="left_content_area odds_section">
      <h1 className="titles_article sch_title">BOXING NEWS</h1>
      <ul className="sch_tabs">
        <li className="ative_tab p-1"><a href="https://www.mvpboxing.com/news-boxing">Boxing</a></li>
        <li className="ml-3 p-1"><a href="https://www.mvpboxing.com/news-mma">MMA</a></li>
      </ul>
      <div className="top_pager d-none d-md-block">
        <div className="left news_prev_post">
          <a href="https://www.mvpboxing.com/news-boxing" className="margin-left-0">
            <div className="odds_arrow_left left" />Prev </a>
          <a className="margin-left-1" href="https://www.mvpboxing.com/news-boxing/?p=2">Next<div className="odds_arrow_right right" /></a>
        </div>
        <div className="clear" />
      </div>
      <div className="news_data_container">
        <div className="news_data">
          <div className="row nomargin bg-white" itemScope itemType="https://schema.org/ItemList">
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="‘I’m in the driver’s seat here’: Taylor explains why didn’t abide by deal with Serrano" src="https://cdn.vox-cdn.com/thumbor/7G2yW1H2jFjugtmJPvcT8_kk_Fc=/0x0:3498x2332/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/74014958/2208780727.0.jpg" /><em itemProp="datePublished">04/10/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744261804/Im-in-the-drivers-seat-here-Taylor-explains-why" target="_blank"><strong itemProp="headline" className="news-title">‘I’m in the driver’s seat here’: Taylor explains why didn’t abide by deal with Serrano</strong>
                  Katie Taylor is set for a trilogy match against Amanda Serrano this summer. | Photo by Ed Mulholla...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="⁠WBC exposes its own hypocrisy in latest dispute with Dmitry Bivol" src="https://s.yimg.com/os/creatr-uploaded-images/2025-04/1010dfa0-14db-11f0-bf55-a32097075de2" /><em itemProp="datePublished">04/10/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744251009/WBC-exposes-its-own-hypocrisy-in-latest-dispute" target="_blank"><strong itemProp="headline" className="news-title">⁠WBC exposes its own hypocrisy in latest dispute with Dmitry Bivol</strong>Dmitry Bivol is no longer boxing's undisputed light heavyweight champion. (Mark Robinson/Matchroom B...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><em itemProp="datePublished">04/10/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744251008/Taylor-and-Serrano-to-headline-again-at-Madison" target="_blank"><strong itemProp="headline" className="news-title">Taylor and Serrano to headline again at Madison Square Garden. This time, all the fighters are women</strong>NEW YORK (AP) — When Katie Taylor and Amanda Serrano fought three years ago at Madison Square Gard...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><em itemProp="datePublished">04/10/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744251007/Taylor-y-Serrano-encabezarn-la-primera-cartelera" target="_blank"><strong itemProp="headline" className="news-title">Taylor y Serrano encabezarán la primera cartelera femenina en el Madison Square Garden</strong>NUEVA YORK (AP) — Cuando Katie Taylor y Amanda Serrano pelearon hace tres años en el Madison Squa...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="Liam Cameron: Ben Whittaker rematch is &#39;life or death in boxing&#39; for me, clarifies r" src="https://s.yimg.com/os/creatr-uploaded-images/2025-04/a0b507c0-159e-11f0-bbfc-585bacd92696" /><em itemProp="datePublished">04/10/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744251006/Liam-Cameron-Ben-Whittaker-rematch-is-amp39life-or" target="_blank"><strong itemProp="headline" className="news-title">Liam Cameron: Ben Whittaker rematch is &amp;#39;life or death in boxing&amp;#39; for me, clarifies r</strong>One of the biggest news stories coming out of British boxing in the past week has been the dispute o...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><em itemProp="datePublished">04/10/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744251005/Amanda-Serrano-and-Katie-Taylor-spar-over-whether" target="_blank"><strong itemProp="headline" className="news-title">Amanda Serrano and Katie Taylor spar over whether 3rd fight should have featured 3-minute rounds</strong>NEW YORK (AP) — As they head for a third bout, Amanda Serrano and Katie Taylor have found somethin...</a>
              </div>
            </div>
          </div>
        </div>
        <div className="news_data">
          <div className="row nomargin bg-white" itemScope itemType="https://schema.org/ItemList">
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="Desperation in the Air: Eddie Hearn’s Misguided Approach to Luring Tyson Fury Back for a Fading Anth" src="https://www.boxingnews24.com/wp-content/uploads/2025/04/fury-aj-joshua.jpg" /><em itemProp="datePublished">04/09/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744240214/Desperation-in-the-Air-Eddie-Hearns-Misguided" target="_blank"><strong itemProp="headline" className="news-title">Desperation in the Air: Eddie Hearn’s Misguided Approach to Luring Tyson Fury Back for a Fading Anth</strong>
                  Promoter Eddie Hearn sounded desperate today during an interview, pleading with Tyson Fury to come ...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="Adeleye Retains British Title, Set for TKV Rematch After Disputed Sixth-Round Stoppage Marred by Ref" src="https://www.boxingnews24.com/wp-content/uploads/2025/04/100A9962.jpg" /><em itemProp="datePublished">04/09/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744240213/Adeleye-Retains-British-Title-Set-for-TKV-Rematch" target="_blank"><strong itemProp="headline" className="news-title">Adeleye Retains British Title, Set for TKV Rematch After Disputed Sixth-Round Stoppage Marred by Ref</strong>
                  David Adeleye and Jeamie TKV will meet in a rematch with Adeleye’s British heavyweight belt on th...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="Dmitry Bivol’s $8 Million Rejection: Did Fear of David Benavidez Outweigh a Lucrative Undisputed Tit" src="https://www.boxingnews24.com/wp-content/uploads/2025/02/Beterbiev-vs.-Bivol-II-Fight-Night5.jpg" /><em itemProp="datePublished">04/09/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744229418/Dmitry-Bivols-8-Million-Rejection-Did-Fear-of-David" target="_blank"><strong itemProp="headline" className="news-title">Dmitry Bivol’s $8 Million Rejection: Did Fear of David Benavidez Outweigh a Lucrative Undisputed Tit</strong>
                  Dmitry Bivol reportedly turned down an offer of $8 million to defend his undisputed light heavyweig...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="Jaron Ennis Sets Sights on Making History as a Four-Division Undisputed Champion, But Can Eddie Hear" src="https://www.boxingnews24.com/wp-content/uploads/2025/04/ennis-vs-stanionis23873.jpg" /><em itemProp="datePublished">04/09/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744229413/Jaron-Ennis-Sets-Sights-on-Making-History-as-a-Four" target="_blank"><strong itemProp="headline" className="news-title">Jaron Ennis Sets Sights on Making History as a Four-Division Undisputed Champion, But Can Eddie Hear</strong>
                  Jaron ‘Boots’ Ennis says his goal is to become a four-division undisputed champion before he re...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="‘I’m here to collect belts at 147’: Boots locked in for Stanionis unification" src="https://cdn.vox-cdn.com/thumbor/DqJgx-0GJdLMgO7C8CntjYVWv88=/0x415:4000x3082/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/74013978/2182663180.0.jpg" /><em itemProp="datePublished">04/09/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744229404/Im-here-to-collect-belts-at-147-Boots-locked-in-for" target="_blank"><strong itemProp="headline" className="news-title">‘I’m here to collect belts at 147’: Boots locked in for Stanionis unification</strong>
                  Jaron ‘Boots’ Ennis gets his first shot at unifying world titles this weekend. | Photo by Mark...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="Davis Focused on Rematch Despite Roach’s Bet/Number Claims" src="https://www.boxingnews24.com/wp-content/uploads/2025/02/Davis-vs-Roach-Weigh-ins17.jpg" /><em itemProp="datePublished">04/09/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744218618/Davis-Focused-on-Rematch-Despite-Roachs-BetNumber" target="_blank"><strong itemProp="headline" className="news-title">Davis Focused on Rematch Despite Roach’s Bet/Number Claims</strong>
                  Lamont Roach says Gervonta Davis changed his number after their controversial 12-round draw on Marc...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="Fans Accuse Lamont Roach of Celebrating Draw with Gervonta Davis Like a Victory, Prompting Angry Res" src="https://www.boxingnews24.com/wp-content/uploads/2025/03/Gervonta-Davis-vs-Lamont-Roach-Jr15.jpg" /><em itemProp="datePublished">04/09/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744218616/Fans-Accuse-Lamont-Roach-of-Celebrating-Draw-with" target="_blank"><strong itemProp="headline" className="news-title">Fans Accuse Lamont Roach of Celebrating Draw with Gervonta Davis Like a Victory, Prompting Angry Res</strong>
                  Lamont Roach responded to criticism today about the fans saying he’s treating his draw against Ge...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="Rozicki pulled from Jack fight with biceps tear" src="https://cdn.vox-cdn.com/thumbor/oI2IuEeqiY0bExPUlTJP2GR2ags=/1x0:5683x3788/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/74013765/1469817263.0.jpg" /><em itemProp="datePublished">04/09/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744218604/Rozicki-pulled-from-Jack-fight-with-biceps-tear" target="_blank"><strong itemProp="headline" className="news-title">Rozicki pulled from Jack fight with biceps tear</strong>
                  Photo by Francois Nel/Getty Images
                  Badou Jack needs a new opponent for his return to Riyadh Seaso...</a>
              </div>
            </div>
            <div className="col-sm-12 mt15 flex-col nopadding feed" itemProp="itemListElement" itemScope itemType="https://schema.org/NewsArticle">
              <div className="clear-left mr15 row mx-1">
                <p className="box-img col-3 col-md-2 pl-1 pr-0"><img itemProp="image" className="img-fluid lazyload" width={100} alt="‘It’s a big jump for him’: Warren says Miller a good step up fight for Wardley" src="https://cdn.vox-cdn.com/thumbor/yM-vu0A6DwiwQaDPNqQNUVuQSPE=/1x0:5677x3784/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/74013769/2208307890.0.jpg" /><em itemProp="datePublished">04/09/2025</em><em className="comment-count-block"><i className="fa fa-comment" />&nbsp;&nbsp;<span className="comment-count">0</span></em></p>
                <a itemProp="url" className="list-item caption news-caption col-9 col-md-10 px-2 text-left txt-black" href="https://www.mvpboxing.com/News/boxing/1744218603/Its-a-big-jump-for-him-Warren-says-Miller-a-good" target="_blank"><strong itemProp="headline" className="news-title">‘It’s a big jump for him’: Warren says Miller a good step up fight for Wardley</strong>
                  Frank Warren says Jarrell Miller has proven toughness as he gets ready to take on Fabio Wardley. |...</a>
              </div>
            </div>
          </div>
        </div>
        <div className="top_pager">
          <div className="right news_prev_post">
            <a href="https://www.mvpboxing.com/news-boxing" className="margin-left-0">
              <div className="odds_arrow_left left" />Prev </a>
            <a href="https://www.mvpboxing.com/news-boxing/?p=2" style={{display: 'flex'}}>Next<div className="odds_arrow_right right" /></a>
          </div>
          <div className="clear" />
        </div>
      </div>
      <div className="bottom_pager" />
    </div>
  </div>
</div>

    </>
  )
};

export default News;