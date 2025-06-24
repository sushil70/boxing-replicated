
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';
import { Link } from 'react-router-dom';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Sitemap = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");
  const [pagetitle, setPagetitle ]= useState("");

  useEffect(() => {
    async function getData() {
      let apiUrl = 'cmspage?page_id=sitemap';
      const url = GLOBALS.API_BASE_URL+apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPagedata(json.data.content);
        setPagetitle(json.data.page_title);
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
    <div className="mvpBgContainer mvp_container" id="newsMainContents">
  <div className="article_area_content odds_section sitemap mx-0 w-100">
    <h1 className="titles_article border_titles_article sitemapTitle">MVPBOXING.com Sitemap</h1>
    <div id="sitemapLinks" className="odds-div">
      <div id="sitemapLevel" className="row mx-1">
        <div className="col-12">
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="HOME">HOME</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="ALL NEWS">ALL NEWS</Link>
              </li>
              <li>
                <Link to="/talent-representation/boxing" title="Boxing">Boxing</Link>
              </li>
              <li>
                <Link to="/news-mma" title="MMA">MMA</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="ESPAÑOL">ESPAÑOL</Link>
              </li>
              <li>
                <Link to="/espanol-boxeo" title="Boxeo">Boxeo</Link>
              </li>
              <li>
                <Link to="espanol-amm" title="AMM">AMM</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="FIGHT WORLD">FIGHT WORLD</Link>
              </li>
              <li>
                <Link to="/" title="Fight Poll">Fight Poll</Link>
              </li>
              <li>
                <Link to="/Injuries" title="Body Scan">Body Scan</Link>
              </li>
            </ul>
          </div>
         
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="MORE">MORE</Link>
              </li>
              <li>
                <Link to="/article/muhammad-ali-boxing-reform-act" title="Ali Reform Act">Ali Reform Act</Link>
              </li>
              <li>
                <Link to="https://boxrec.com/" title="Box Rec">Box Rec</Link>
              </li>
              <li>
                <Link to="https://www.wada-ama.org/en/prohibited-list" title="Anti-Doping Policy">Anti-Doping Policy</Link>
              </li>
              <li>
                <Link to="/article/unified_boxing_rules" title="Boxing Rules">Boxing Rules</Link>
              </li>
              <li>
                <Link to="/" title="Athlete’s Brain Health">Athlete’s Brain Health</Link>
              </li>
              <li>
                <Link to="/" title="TICKETS">TICKETS</Link>
              </li>
              <li>
                <Link to="/" title="EVENTS">EVENTS</Link>
              </li>
              <li>
                <Link to="/" title="FIGHT ZONE">FIGHT ZONE</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="WATCH">WATCH</Link>
              </li>
              <li>
                <Link to="/talent-representation/boxing" title="BOXING">BOXING</Link>
              </li>
              <li>
                <Link to="/news-mma" title="MMA">MMA</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="MVP BOXING">MVP BOXING</Link>
              </li>
              <li>
                <Link to="/about" title="About">About</Link>
              </li>
              <li>
                <Link to="/community" title="Community">Community</Link>
              </li>
              <li>
                <Link to="/launchingsoon" title="Shop">Shop</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/videos/all-access/FIGHT-HIGHLIGHTS-Josh-Warrington-vs-Luis-Alberto-Lopez" title="ALL ACCESS VIDEOS">ALL ACCESS VIDEOS</Link>
              </li>
              <li>
                <Link to="/videos/boxing-training/art-of-the-jab" title="Boxing Training">Boxing Training</Link>
              </li>
              <li>
                <Link to="/videos/mma-training/5-stance-basics-mma-fighting" title="MMA Training">MMA Training</Link>
              </li>
              <li>
                <Link to="/videos/all-access/FIGHT-HIGHLIGHTS-Josh-Warrington-vs-Luis-Alberto-Lopez" title="ALL ACCESS">ALL ACCESS</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="PROGRAMS">PROGRAMS</Link>
              </li>
              <li>
                <Link to="/article/boxing" title="Boxing Training">Boxing Training</Link>
              </li>
              <li>
                <Link to="/article/brazilian-jiu-jitsu" title="BJJ Training">BJJ Training</Link>
              </li>
              <li>
                <Link to="/article/online-training" title="Online Training">Online Training</Link>
              </li>
              <li>
                <Link to="/mvp-kids/kid-reporter" title="Kids & Juniors">Kids &amp; Juniors</Link>
              </li>
              <li>
                <Link to="/article/seminars" title="Seminars">Seminars</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/launchingsoon" title="forum">forum</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="EXPERTISE">EXPERTISE</Link>
              </li>
              <li>
                <Link to="/services/talent-representation" title="Talent Rep.">Talent Rep.</Link>
              </li>
              <li>
                <Link to="/services/consulting" title="Consulting">Consulting</Link>
              </li>
              <li>
                <Link to="/services/promotions" title="Promotions">Promotions</Link>
              </li>
              <li>
                <Link to="/services/sponsorships" title="Sponsorship">Sponsorship</Link>
              </li>
              <li>
                <Link to="services/marketing" title="Marketing">Marketing</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="MVPBOXING +">MVPBOXING +</Link>
              </li>
              <li>
                <Link to="/talent-representation/boxing" title="Boxing">Boxing</Link>
              </li>
              <li>
                <Link to="/news-mma" title="MMA">MMA</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/mvp-kids/kid-reporter" title="MVP BOXING APP">MVP BOXING APP</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="MVP KIDS">MVP KIDS</Link>
              </li>
              <li>
                <Link to="/mvp-kids/football" title="Football">Football</Link>
              </li>
              <li>
                <Link to="/mvp-kids/baseball" title="Baseball">Baseball</Link>
              </li>
              <li>
                <Link to="/mvp-kids/unboxed" title="Unboxed">Unboxed</Link>
              </li>
              <li>
                <Link to="/mvp-kids/kid-reporter" title="Kid Reporter">Kid Reporter</Link>
              </li>
              <li>
                <Link to="/mvp-kids/kid-reporter" title="More">More</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="HELP">HELP</Link>
              </li>
              <li>
                <Link to="/Partnership" title="Partnership Inquiries">Partnership Inquiries</Link>
              </li>
              <li>
                <Link to="/Support" title="Support">Support</Link>
              </li>
              <li>
                <Link to="/contact" title="Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/article/custom_workout" title="WORKOUTS">WORKOUTS</Link>
              </li>
              <li>
                <Link to="/article/custom_workout" title="Boxing">Boxing</Link>
              </li>
              <li>
                <Link to="/article/custom_workout" title="Thai Boxing">Thai Boxing</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="SCHEDULES">SCHEDULES</Link>
              </li>
              <li>
                <Link to="/talent-representation/boxing" title="Boxing">Boxing</Link>
              </li>
              <li>
                <Link to="/news-mma" title="MMA">MMA</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="PODCAST">PODCAST</Link>
              </li>
              <li>
                <Link to="/podcasts/boxing" title="Boxing">Boxing</Link>
              </li>
              <li>
                <Link to="/podcasts/mma" title="MMA">MMA</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="MVP FIT">MVP FIT</Link>
              </li>
              <li>
                <Link to="/article/skills" title="Skill Development">Skill Development</Link>
              </li>
              <li>
                <Link to="/article/athlete-assessment" title="Athlete Assessment">Athlete Assessment</Link>
              </li>
              <li>
                <Link to="/article/fitness_training" title="Fitness Training">Fitness Training</Link>
              </li>
              <li>
                <Link to="/article/custom_workout" title="Custom Workout">Custom Workout</Link>
              </li>
              <li>
                <Link to="/article/corp_performance" title="Corp. Performance">Corp. Performance</Link>
              </li>
              <li>
                <Link to="/article/speed" title="Speed Training">Speed Training</Link>
              </li>
              <li>
                <Link to="/article/injury_prevention" title="Injury Prevention">Injury Prevention</Link>
              </li>
              <li>
                <Link to="/article/biomechanicstechnique" title="Biomechanics">Biomechanics</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="FIGHTER TOOLS">FIGHTER TOOLS</Link>
              </li>
              <li>
                <Link to="/article/link-between-cte-and-football-players" title="Concussion">Concussion</Link>
              </li>
              <li>
                <Link to="/article/cut-treatment" title="Cut Treatment">Cut Treatment</Link>
              </li>
              <li>
                <Link to="/article/womens-sports-injuries" title="Q-Angle">Q-Angle</Link>
              </li>
              <li>
                <Link to="/article/vo2-max" title="VO2-MAX">VO2-MAX</Link>
              </li>
              <li>
                <Link to="/article/taping-and-bracing" title="Taping & Bracing">Taping &amp; Bracing</Link>
              </li>
              <li>
                <Link to="/article/for-women" title="For Women">For Women</Link>
              </li>
              <li>
                <Link to="/article/tabata-protocol" title="Tabata Protocol">Tabata Protocol</Link>
              </li>
              <li>
                <Link to="/article/lactate-threshold" title="Lactate Threshold">Lactate Threshold</Link>
              </li>
            </ul>
          </div>
          <div className="row mx-1">
            <ul>
              <li className="linksHeading">
                <Link to="/" title="LEGAL">LEGAL</Link>
              </li>
              <li>
                <Link to="/Privacy_Policy" title="Privacy Policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/Terms_of_use" title="Terms of Use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/Advertise_With_Us" title="Advertise With Us">Advertise With Us</Link>
              </li>
              <li>
                <Link to="/Cookie_Policy" title="Cookie Policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="clear" />
        </div>
      </div>
    </div>
  </div>
</div>
  )
};

export default Sitemap;