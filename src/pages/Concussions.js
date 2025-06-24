
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';
import { Link } from 'react-router-dom';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Concussions = (props) => {

  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata ]= useState("");

  useEffect(() => {
    setLoading(true)
    async function getData() {
      let apiUrl = 'cmspage?page_id=partnership-inquiries';
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
    
   <div className="mvpBgContainer mvp_container" id="newsMainContents" style={{width: '100%'}}>
  {/* <div class="ad d-none d-md-block">
<input type="hidden" name="IL_IN_ARTICLE">
    </div> */}
  <div className="news_articles_content" itemScope itemType="https://schema.org/Article" style={{width: '100%'}}>
    <div className="left_content_area" style={{margin: 0}}>
      <h1 className="titles_article border_titles_article1">
        <span itemProp="name">The Link Between CTE, Boxing and Football | MVP Boxing</span>            <div className="socialInfo">
          <div className="left">mvpboxing                                    &nbsp;|&nbsp;
            <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;March 28, 2018, 07:47PM              </div>
          <div className="clear" />
        </div>{/* ends (.socialInfo) */}
      </h1>
      <div className="workout_content update-workout_content">
        <div style={{margin: '25px 0 25px 0'}}>
          <img src="/assets/userfiles/images/brain_cte.jpg" style={{width: '100%', height: 'auto'}} />
        </div>
        <div id="accordion" className="accordion">
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse0" aria-expanded="true" aria-controls="collapse0">
              <div className="card-header" id="heading0">
                <h5 className="mb-0 question">
                  <strong>What is CTE ( Chronic Traumatic Encephalopathy)?</strong>
                  <span className="right"><i className="arrow fa fa-arrow-down" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse0" className="collapse show" aria-labelledby="heading0" data-parent="#accordion">
              <div className="card-body">
                <p><strong>Chronic traumatic encephalopathy (CTE)</strong> is a progressive degenerative disease, diagnosed post-mortem in individuals with a history of multiple concussions and other forms of head injury. A variant of the condition, Dementia Pugilistica (DP), is primarily associated with prize fighting and American football. CTE has been most commonly found in professional athletes participating in the following sports:</p>
                <ul className="pl-1">
                  <li><i className="fa fa-check-square-o" aria-hidden="true" />&nbsp;American football</li>
                  <li><i className="fa fa-check-square-o" aria-hidden="true" />&nbsp;Prize fighters (Boxing / MMA)</li>
                  <li><i className="fa fa-check-square-o" aria-hidden="true" />&nbsp;Ice hockey, professional wrestling, rugby</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
              <div className="card-header" id="heading1">
                <h5 className="mb-0 question">
                  <strong>Causes</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
              <div className="card-body">
                <p>The latest research findings suggest that there’s a direct correlation between the blast exposure by military service personnel and/or a concussive head injury by individuals who have experienced head trauma resulting in degeneration of brain tissue and the subsequent development of CTE (accumulation of toxic tau protein). Individuals with CTE may show symptoms of dementia, such as memory loss, aggression, confusion and depression, which may appear within months of the trauma or decades later. Repeated concussions and injuries less serious than concussions ("sub-concussions") incurred during the play of contact sports over a long time period may result in the development of CTE. The brain changes in CTE and DP are similar and are delayed effects of repeated concussions and sub-concussions of the brain.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
              <div className="card-header" id="heading2">
                <h5 className="mb-0 question">
                  <strong>Epidemiology</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
              <div className="card-body">
                <p>CTE is a neurological degenerative disease found in individuals who have been subjected to repetitive traumatic head injuries. Amateur and professional level athletes (prize fighters/ footballers) are the largest demographic to suffer from CTE due to frequent concussions sustained during play in contact-sports. Other individuals that have been diagnosed with CTE were involved in military service, had a previous history of chronic seizures and/ or were involved in activities resulting in head-banging. Reports of CTE have steadily increased in younger athletes, most likely due to athletes becoming bigger and stronger thus, producing greater magnitudes of force in collision.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
              <div className="card-header" id="heading3">
                <h5 className="mb-0 question">
                  <strong>Signs and symptoms</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
              <div className="card-body">
                <p>In order to diagnose a person with CTE, brain imaging must be done to the patient and even then it is difficult to determine the severity. A true diagnosis can be attained from brain biopsy, but this test comes at the risk of death for the patient. Due to the difficulty of diagnosing CTE, it is most commonly diagnosed posthumously.</p>
                <p>Diagnosis of CTE is frequently ascertained from patients' medical histories, i.e. past traumatic brain injuries, and secondary symptoms, including: disorientation, confusion, vertigo, headache, poor judgment, overt dementia, slowed muscular movements, staggered gait, impeded speech, tremors and deafness.</p>
                <p>Individuals suffering from CTE may also progress through three stages of the disease. The first stage is characterized by its disturbances and psychotic symptoms. In the second stage of the disease the patient may exhibit erratic behavior, memory loss, and the initial symptoms of Parkinson's disease. The final stage is dementia as well as symptoms related to Parkinson's disease.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
              <div className="card-header" id="heading4">
                <h5 className="mb-0 question">
                  <strong>Prevention</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
              <div className="card-body">
                <p>Recently, investigators demonstrated that immobilizing the head during a blast exposure prevented the learning and memory deficits associated with CTE that occurred when the head was not immobilized. This research, represent the first case series of postmortem brains from U.S. military personnel who were exposed to a blast and/or a concussive injury.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
              <div className="card-header" id="heading5">
                <h5 className="mb-0 question">
                  <strong>Diagnosis</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
              <div className="card-body">
                <p>The lack of distinct biomarkers for CTE means there is no definitive way of diagnosing CTE, except with a brain biopsy or post-mortem autopsy. Neuroimaging can detect subtle changes in axonal integrity of CTE and structural lesions of advanced CTE.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
              <div className="card-header" id="heading6">
                <h5 className="mb-0 question">
                  <strong>History</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
              <div className="card-body">
                <p>In 2008, the Sports Legacy Institute joined with the Boston University School of Medicine (BUSM) to form the Center for the Study of Traumatic Encephalopathy (CSTE). Brain Injury Research Institute (BIRI) also studies the impact of concussions.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
              <div className="card-header" id="heading6">
                <h5 className="mb-0 question">
                  <strong>American Football</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
              <div className="card-body">
                <p>In 2002, Dr. Bennet Omalu, a forensic pathologist and neuropathologist in Pittsburgh, Pennsylvania found CTE in the brains of Mike Webster, Terry Long, Andre Waters, Justin Strzelczyk and Tom McHale. Omalu, in 2012 a medical examiner and associate adjunct professor in California, was a co-founder of BIRI and reportedly in 2012 participated in the autopsy of Junior Seau.</p>
                <p>Several former National Football League (NFL) players have been diagnosed post-mortem with CTE. Since 2008, autopsies of eleven professional American football players by neuropathologist Dr. Ann McKee revealed CTE. Former Detroit Lions lineman and eight-time Pro Bowler Lou Creekmur, former Houston Oilers and Miami Dolphins linebacker John Grimsley.</p>
                <p>Former Tampa Bay Buccaneers guard Tom McHale, former Cincinnati Bengals wide receiver Chris Henry, and former Chicago Bears safety Dave Duerson, have all been diagnosed post-mortem with CTE. Other football players diagnosed with CTE include Cookie Gilchrist and Wally Hilgenberg.</p>
                <p>An autopsy conducted in 2010 on the brain of Owen Thomas, a 21-year-old junior lineman at the University of Pennsylvania who committed suicide, showed early stages of CTE, making him the youngest person to be diagnosed with the condition. Thomas was the second amateur football player diagnosed with CTE, after Mike Borich, who died at 42. The doctors who performed the autopsy indicated that they found no causal connection between the nascent CTE and Thomas's suicide. There were no records of Thomas missing any playing time due to concussion, but as a player who played hard and "loved to hit people," he may have played through concussions and received thousands of subconcussive impacts on the brain.</p>
                <p>In July, 2011, Colt tight end John Mackey died after several years of deepening symptoms of frontotemporal dementia. BUSM was reported to be planning to examine his brain for signs of CTE.</p>
                <p>In 2012, retired NFL player Junior Seau committed suicide with a gunshot wound to the chest. There was speculation that he suffered brain damage due to CTE. Seau's family donated his brain tissue to the National Institute of Neurological Disorders and Stroke.</p>
                <table border={0} cellPadding={0} cellSpacing={0} style={{width: '100%'}}>
                  <tbody>
                    <tr>
                      <td>
                        <p>On July 27, 2012, an autopsy report concluded that the former Atlanta Falcons safety Ray Easterling, who committed suicide in April 2012, had CTE.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
              <div className="card-header" id="heading7">
                <h5 className="mb-0 question">
                  <strong>Ice hockey</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordion">
              <div className="card-body">
                <p>Athletes from other sports have also been identified as having CTE, such as hockey player Bob Probert. Neuropathologists at Boston University diagnosed Reg Fleming as the first hockey player known to have the disease. This discovery was announced in December 2009, six months after Fleming's death.</p>
                <p>Rick Martin, best known for being part of the Buffalo Sabres' French Connection, was diagnosed with CTE after his brain was posthumously analyzed. Martin was the first documented case of an ice hockey player not known as an enforcer to have developed CTE; Martin was believed to have developed the disease primarily as a result of a severe concussion he suffered in 1977 while not wearing a helmet. The disease was low-grade and asymptomatic in his case, not affecting Martin's cognitive abilities; Martin died of unrelated causes in March 2011 at the age of 59.</p>
                <p>Also within a few months in 2011, the deaths of three hockey "enforcers"—Derek Boogaard from a combination of too many painkillers and alcohol, Rick Rypien, an apparent suicide, and Wade Belak, who, as Rypien, had reportedly suffered from depression; and all with a record of fighting, blows to the head and concussions—led to more concerns about CTE. Boogaard's brain was examined by BUSM, which in October 2011 determined the presence of CTE. One National Hockey League player known in part for leading "the thump parade", Shawn Thornton of the Boston Bruins, mulled the "tragic coincidence" of the three recent league deaths and said their concurrence was just that, while defending the role of fighting on the rink.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse8" aria-expanded="true" aria-controls="collapse8">
              <div className="card-header" id="heading8">
                <h5 className="mb-0 question">
                  <strong>Wrestling</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#accordion">
              <div className="card-body">
                <p>In 2007, neuropathologists from the Sports Legacy Institute (an organization co-founded by Christopher Nowinski) examined the brain of Chris Benoit, a professional wrestler with the WWE. Chris Benoit had apparently killed his wife and son before committing suicide. Originally the suicide and the double murder of his wife and son were thought to be due to the abuse of anabolic steroids. However, a brain biopsy identified pathognomonic brain tissue changes of CTE: large aggregation of tau protein as manifested by neurofibrillary tangles and neuropil threads, which cause neurodegeneration.</p>
                <p>In 2009, Bennet Omalu discovered CTE in recently retired wrestler Andrew "Test" Martin, who died at age 33 from a drug overdose.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
              <div className="card-header" id="heading9">
                <h5 className="mb-0 question">
                  <strong>NHL</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#accordion">
              <div className="card-body">
                <p>Derek Boogaard, one of the National Hockey League's most aggressive players, suffered from Chronic Traumatic Encephalopathy, or CTE, a degenerative brain disease that results from repetitive trauma to the head, an autopsy of his brain has revealed.</p>
                <p>Boogaard's death in May was ruled accidental after he consumed alcohol and the powerful painkiller oxycodone.</p>
                <p>Dr. Ann McKee, co-director of the VA CSTE Brain Bank, collaboration between Boston University, the Department of Veterans Administration, and the Sports Legacy Institute - made the discovery. She has diagnosed more than 50 athlete brains with CTE.</p>
                <p>Individuals affected by CTE can exhibit Alzheimer’s like symptoms, but CTE can only be diagnosed postmortem. It’s most commonly found in athletes who suffered repeated head trauma, such as football players, prize fighters and hockey players.</p>
                <p>Boogaard was one of the NHL’s most feared players. He played left wing for the Minnesota Wild from 2005 to 2010 and then joined the New York Rangers for the 2010-2011, season. He was best known as the enforcer - the player who physically, and often violently, checked a player with an offensive play.</p>
                <p>Boogaard was considered to be one of the toughest fighters in the NHL. In his NHL history of 277 games, he scored just three goals, had 589 penalty minutes and reportedly participated in 174 career fights.</p>
                <p>Boogaard had been unable to play since December 2010 because of injuries from a hockey fight, including a concussion. His family said Boogaard had reportedly had his “bell rung” at least 20 times, but did not always report the hits. He was diagnosed with post-concussion syndrome twice.</p>
                <p>Boogaard also struggled with drug addiction for the two years before his death. Since then, he had reportedly begun to act abnormally, was emotionally unstable and had problems with short-term memory and orientation. When Boogaard died, his family agreed to send his brain to the Brain Bank in hopes of finding some answers.</p>
                <p>While there is evidence of CTE in Boogaard’s brain, Dr. Bob Stern, one of the bank’s co-directors, is quick to point out the difficulties in determining how CTE contributed to Boogaard’s addiction and behavior.</p>
                <p>“Boogaard's clinical history was complex, so it is unclear as to if or how much CTE contributed to his behavior, addiction or death. However, CTE appears to be a progressive disease in some individuals, so even if it was not directly affecting Boogaard’s quality of life and overall functioning before he died, it is possible it could have in the future.”</p>
                <p>Stern couldn't say with certainty that Boogaard's position as an enforcer was a factor in the development of CTE.</p>
                <p>“Is it fighting? The regular play of the game? The big hits? We just don’t know what would lead to the disease, " Stern said. “We know that exposure to repetitive brain trauma is necessary to the development of the disease, but not sufficient.”</p>
                <p>On average, according to Stern, half of all professional hockey games have some sort of fight. Stern said there is discussion within the NHL and amateur leagues to either diminish or get rid of fighting. Fighting and enforcing is unique to Canadian and American hockey; it is not allowed in the Olympics.</p>
                <p>Chris Nowinski, another of the Bank’s co-directors, added, “Unfortunately, this finding does not contribute to our knowledge of the risks of normal hockey play for most participants, as very few hockey players engage in as many fights as Boogaard.” “Athletes and parents should know that anyone who experiences repetitive brain trauma may be at risk to develop CTE, but we are hopeful that risk is small in hockey.” Nowinski added that two other young non-NHL professional hockey players studied did not show signs of CTE at postmortem examination. However, the risks in hockey can’t be ignored. There is constant, fast-moving contact and fights. As Stern said, “It's boxing on ice.”</p>
              </div>
            </div>
          </div>
        </div>
        <p>Article by:&nbsp;Wikipedia;&nbsp;Reference:&nbsp;Nadia Kounang-CNN Medical;&nbsp;Published by:&nbsp;<strong>mvpboxing.com</strong></p>
      </div>{/* ends (.workout_content) */}
      <div className="page__links" style={{marginBottom: 10}}>
        <h3 className="page__links__title" />
        <Link className="page__links__link btn feat-link" target="_self" to="/contact">
          <strong>Contact Us</strong>
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </Link>
      </div>
      <div className="content-separator">&nbsp;</div>{/* ends (.content-separator) */}
      <div className="socialInfo">
          <div className="text-center social-sharing-info bottom-social-share">
         <p className="social-share-block"><i className="share-icon fas fa-share-alt" aria-hidden="true" /><span className="social-icons a2a_kit a2a_kit_size_32 a2a_default_style" style={{lineHeight: 0}}><a className="a2a_button_facebook" href="/#facebook" title="Facebook" target="_blank" rel="nofollow noopener"><span className="a2a_svg a2a_s__default a2a_s_facebook" style={{backgroundColor: 'rgb(8, 102, 255)'}}><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16" /></svg></span><span className="a2a_label">Facebook</span></a><a className="a2a_button_twitter" href="/#twitter" title="Twitter" target="_blank" rel="nofollow noopener"><span className="a2a_svg a2a_s__default a2a_s_twitter" style={{backgroundColor: 'rgb(29, 155, 240)'}}><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M28 8.557a10 10 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.7 9.7 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.94 4.94 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a5 5 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174q-.476-.001-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.9 9.9 0 0 1-6.114 2.107q-.597 0-1.175-.068a13.95 13.95 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013q0-.32-.015-.637c.96-.695 1.795-1.56 2.455-2.55z" /></svg></span><span className="a2a_label">Twitter</span></a>
         <a className="a2a_button_whatsapp" href="/#whatsapp" title="WhatsApp" target="_blank" rel="nofollow noopener"><span className="a2a_svg a2a_s__default a2a_s_whatsapp" style={{backgroundColor: 'rgb(18, 175, 10)'}}><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" fillRule="evenodd" d="M16.21 4.41C9.973 4.41 4.917 9.465 4.917 15.7c0 2.134.592 4.13 1.62 5.832L4.5 27.59l6.25-2.002a11.24 11.24 0 0 0 5.46 1.404c6.234 0 11.29-5.055 11.29-11.29 0-6.237-5.056-11.292-11.29-11.292m0 20.69c-1.91 0-3.69-.57-5.173-1.553l-3.61 1.156 1.173-3.49a9.35 9.35 0 0 1-1.79-5.512c0-5.18 4.217-9.4 9.4-9.4s9.397 4.22 9.397 9.4c0 5.188-4.214 9.4-9.398 9.4zm5.293-6.832c-.284-.155-1.673-.906-1.934-1.012-.265-.106-.455-.16-.658.12s-.78.91-.954 1.096c-.176.186-.345.203-.628.048-.282-.154-1.2-.494-2.264-1.517-.83-.795-1.373-1.76-1.53-2.055s0-.445.15-.584c.134-.124.3-.326.45-.488.15-.163.203-.28.306-.47.104-.19.06-.36-.005-.506-.066-.147-.59-1.587-.81-2.173-.218-.586-.46-.498-.63-.505-.168-.007-.358-.038-.55-.045-.19-.007-.51.054-.78.332-.277.274-1.05.943-1.1 2.362-.055 1.418.926 2.826 1.064 3.023.137.2 1.874 3.272 4.76 4.537 2.888 1.264 2.9.878 3.43.85.53-.027 1.734-.633 2-1.297s.287-1.24.22-1.363c-.07-.123-.26-.203-.54-.357z" clipRule="evenodd" /></svg></span><span className="a2a_label">WhatsApp</span></a><a className="a2a_button_facebook_messenger" href="/#facebook_messenger" title="Facebook Messenger" target="_blank" rel="nofollow noopener"><span className="a2a_svg a2a_s__default a2a_s_facebook_messenger" style={{backgroundColor: 'rgb(0, 132, 255)'}}><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M16 5C9.986 5 5.11 9.56 5.11 15.182c0 3.2 1.58 6.054 4.046 7.92V27l3.716-2.06c.99.276 2.04.425 3.128.425 6.014 0 10.89-4.56 10.89-10.183S22.013 5 16 5m1.147 13.655L14.33 15.73l-5.423 3 5.946-6.31 2.816 2.925 5.42-3-5.946 6.31z" /></svg></span><span className="a2a_label">Messenger</span></a>
         <a className="a2a_button_reddit" href="/#reddit" title="Reddit" target="_blank" rel="nofollow noopener"><span className="a2a_svg a2a_s__default a2a_s_reddit" style={{backgroundColor: 'rgb(255, 69, 0)'}}><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M28.543 15.774a2.953 2.953 0 0 0-2.951-2.949 2.88 2.88 0 0 0-1.9.713 14.1 14.1 0 0 0-6.85-2.044l1.38-4.349 3.768.884a2.452 2.452 0 1 0 .24-1.176l-4.274-1a.6.6 0 0 0-.709.4l-1.659 5.224a14.3 14.3 0 0 0-7.316 2.029 2.9 2.9 0 0 0-1.872-.681 2.942 2.942 0 0 0-1.618 5.4 5 5 0 0 0-.062.765c0 4.158 5.037 7.541 11.229 7.541s11.22-3.383 11.22-7.541a5 5 0 0 0-.053-.706 2.96 2.96 0 0 0 1.427-2.51m-18.008 1.88a1.753 1.753 0 0 1 1.73-1.74 1.73 1.73 0 0 1 1.709 1.74 1.71 1.71 0 0 1-1.709 1.711 1.733 1.733 0 0 1-1.73-1.711m9.565 4.968a5.57 5.57 0 0 1-4.081 1.272h-.032a5.58 5.58 0 0 1-4.087-1.272.6.6 0 0 1 .844-.854 4.5 4.5 0 0 0 3.238.927h.032a4.5 4.5 0 0 0 3.237-.927.6.6 0 1 1 .844.854zm-.331-3.256a1.726 1.726 0 1 1 1.709-1.712 1.717 1.717 0 0 1-1.712 1.712z" /></svg></span><
         span className="a2a_label">Reddit</span></a><a className="a2a_button_pinterest" href="/#pinterest" title="Pinterest" target="_blank" rel="nofollow noopener"><span className="a2a_svg a2a_s__default a2a_s_pinterest" style={{backgroundColor: 'rgb(230, 0, 35)'}}><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M15.995 4C9.361 4 4 9.37 4 15.995c0 5.084 3.16 9.428 7.622 11.176-.109-.948-.198-2.41.039-3.446.217-.938 1.402-5.963 1.402-5.963s-.356-.72-.356-1.777c0-1.668.968-2.912 2.172-2.912 1.027 0 1.52.77 1.52 1.688 0 1.027-.65 2.567-.996 3.998-.287 1.195.602 2.172 1.777 2.172 2.132 0 3.771-2.25 3.771-5.489 0-2.873-2.063-4.877-5.015-4.877-3.416 0-5.42 2.557-5.42 5.203 0 1.027.395 2.132.888 2.735a.36.36 0 0 1 .08.345c-.09.375-.297 1.195-.336 1.363-.05.217-.178.266-.405.158-1.481-.711-2.409-2.903-2.409-4.66 0-3.781 2.745-7.257 7.928-7.257 4.156 0 7.394 2.962 7.394 6.931 0 4.137-2.606 7.464-6.22 7.464-1.214 0-2.36-.632-2.744-1.383l-.75 2.854c-.267 1.046-.998 2.35-1.491 3.149a12 12 0 0 0 3.554.533C22.629 28 28 22.63 28 16.005 27.99 9.37 22.62 4 15.995 4" /></svg></span><span className="a2a_label">Pinterest</span></a><a className="a2a_button_email" href="/#email" title="Email" target="_blank" rel="nofollow noopener"><span className="a2a_svg a2a_s__default a2a_s_email" style={{backgroundColor: 'rgb(136, 137, 144)'}}><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M27 21.775v-9.9s-10.01 6.985-10.982 7.348C15.058 18.878 5 11.875 5 11.875v9.9c0 1.375.293 1.65 1.65 1.65h18.7c1.393 0 1.65-.242 1.65-1.65m-.017-11.841c0-1.002-.291-1.359-1.633-1.359H6.65c-1.38 0-1.65.429-1.65 1.43l.016.154s9.939 6.842 11 7.216C17.14 16.941 27 10.005 27 10.005z" /></svg></span><span className="a2a_label">Email</span></a></span></p><div style={{clear: 'both'}} /><p /></div>
         </div>
      <div className="clear" />
    </div>{/* ends (.socialInfo) */}
  </div>{/* ends (.left_content_area) */}
  {/* <div class="ad">
      <input type="hidden" name="IL_IN_ARTICLE">
  </div> */}
</div>


  )
};

export default Concussions;