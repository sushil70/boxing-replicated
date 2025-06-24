
import React, {useState, useEffect} from 'react';

import GLOBALS from '../elements/Globals';
import Loader from '../elements/Loader';
import { Link } from 'react-router-dom';

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const AliAct = (props) => {

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
        <span itemProp="name">Muhammad Ali Boxing Reform Act | MVP Boxing</span>            <div className="socialInfo">
          <div className="left">mvpboxing                                    &nbsp;|&nbsp;
            <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;May 17, 2018, 08:40PM              </div>
          <div className="clear" />
        </div>{/* ends (.socialInfo) */}
      </h1>
      <div className="workout_content update-workout_content">
        <div id="accordion" className="accordion">
          <div className="card mb-1">
            <a className="text-left header collapsed" data-toggle="collapse" data-target="#collapse0" aria-expanded="false" aria-controls="collapse0">
              <div className="card-header" id="heading0">
                <h5 className="mb-0 question">
                  <strong>An Act</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse0" className="collapse" aria-labelledby="heading0" data-parent="#accordion" style={{}}>
              <div className="card-body">
                <p>To reform unfair and anticompetitive practices in the professional boxing industry.</p>
                <p>Be it enacted by the Senate and House of Representatives of the United States of America in Congress assembled:</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
              <div className="card-header" id="heading1">
                <h5 className="mb-0 question">
                  <strong>SECTION 1 SHORT TITLE</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
              <div className="card-body">
                <p><strong>This Act may be cited as the “Muhammad Ali Boxing Reform Act”.</strong></p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
              <div className="card-header" id="heading2">
                <h5 className="mb-0 question">
                  <strong>SECTION 2 FINDINGS</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
              <div className="card-body">
                <p><strong>The Congress makes the following findings:</strong></p>
                <ol className="pl-1">
                  <li>Professional boxing differs from other major, interstate professional sports industries in the United States in that it operates without any private sector association, league, or centralized industry organization to establish uniform and appropriate business practices and ethical standards. This has led to repeated occurrences of disreputable and coercive business practices in the boxing industry, to the detriment of professional boxers nationwide.</li>
                  <li>State officials are the proper regulators of professional boxing events, and must protect the welfare of professional boxers and serve the public interest by closely supervising boxing activity in their jurisdiction. State boxing commissions do not currently receive adequate information to determine whether boxers competing in their jurisdiction are being subjected to contract terms and business practices which may violate State regulations, or are onerous and confiscatory.</li>
                  <li>Promoters who engage in illegal, coercive, or unethical business practices can take advantage of the lack of equitable business standards in the sport by holding boxing events in States with weaker regulatory oversight.</li>
                  <li>The sanctioning organizations which have proliferated in the boxing industry have not established credible and objective criteria to rate professional boxers, and operate with virtually no industry or public oversight. Their ratings are susceptible to manipulation, have deprived boxers of fair opportunities for advancement, and have undermined public confidence in the integrity of the sport.</li>
                  <li>Open competition in the professional boxing industry has been significantly interfered with by restrictive and anticompetitive business practices of certain promoters and sanctioning bodies, to the detriment of the athletes and the ticket-buying public. Common practices of promoters and sanctioning organizations represent restraints of interstate trade in the United States.</li>
                  <li>It is necessary and appropriate to establish national contracting reforms to protect professional boxers and prevent exploitive business practices, and to require enhanced financial disclosures to State athletic commissions to improve the public oversight of the sport.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
              <div className="card-header" id="heading3">
                <h5 className="mb-0 question">
                  <strong>SECTION 3 PURPOSES</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
              <div className="card-body">
                <p><storng>The purposes of this Act are:</storng></p>
                <ol className="pl-1">
                  <li>To protect the rights and welfare of professional boxers on an interstate basis by preventing certain exploitive, oppressive, and unethical business practices.</li>
                  <li>To assist State boxing commissions in their efforts to provide more effective public oversight of the sport.</li>
                  <li>To promote honorable competition in professional boxing and enhance the overall integrity of the industry.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
              <div className="card-header" id="heading4">
                <h5 className="mb-0 question">
                  <strong>SECTION 4 PROTECTING BOXERS FROM EXPLOITATION</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
              <div className="card-body">
                <p><strong>The Professional Boxing Safety Act of 1996 (15 U.S.C. 6301 et seq.) is amended:</strong></p>
                <ol className="pl-1">
                  <li>By re-designating sections 9 through 15 as sections 17 through 23, respectively.</li>
                  <li>By inserting after section 8 the following new sections:</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
              <div className="card-header" id="heading5">
                <h5 className="mb-0 question">
                  <strong>SECTION 9 CONTRACT REQUIREMENTS</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
              <div className="card-body">
                <p>Within 2 years after the date of the enactment of the Muhammad Ali Boxing Reform Act, the Association of Boxing Commissions (ABC) shall develop and shall approve by a vote of no less than a majority of its Member State boxing commissioners, guidelines for minimum contractual provisions that should be included in bout agreements and boxing contracts. It is the sense of the Congress that State boxing commissions should follow these ABC guidelines.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
              <div className="card-header" id="heading6">
                <h5 className="mb-0 question">
                  <strong>SECTION 10 PROTECTION FROM COERCIVE CONTRACTS</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
              <div className="card-body">
                <p><strong>(a) GENERAL RULE</strong></p>
                <p>(1)(A) A contract provision shall be considered to be in restraint of trade, contrary to public policy, and unenforceable against any boxer to the extent that it:</p>
                <ol className="pl-1">
                  <li>Is a coercive provision described in subparagraph (B) and is for a period greater than 12 months.</li>
                  <li>Is a coercive provision described in subparagraph (B) and the other boxer under contract to the promoter came under that contract pursuant to a coercive provision described in subparagraph (B).</li>
                </ol>
                <br />
                <p>b. A coercive provision described in this subparagraph is a contract provision that grants any rights between a boxer and a promoter, or between promoters with respect to a boxer, if the boxer is required to grant such rights, or a boxer’s promoter is required to grant such rights with respect to a boxer to another promoter, as a condition precedent to the boxer’s participation in a professional boxing match against another boxer who is under contract to the promoter.</p>
                <p>II. This subsection shall only apply to contracts entered into after the date of the enactment of the Muhammad Ali Boxing Reform Act.</p>
                <p>III. No subsequent contract provision extending any rights or compensation covered in paragraph (1) shall be enforceable against a boxer if the effective date of the contract containing such provision is earlier than 3 months before the expiration of the relevant time period set forth in paragraph (1).</p>
                <ol className="pl-1">
                  <li>PROMOTIONAL RIGHTS UNDER MANDATORY ABOUT CONTRACTS: No boxing service provider may require a boxer to grant any future promotional rights as a requirement of competing in a professional boxing match that is a mandatory bout under the rules of a sanctioning organization.</li>
                  <li>PROTECTION FROM COERCIVE CONTRACTS WITH BROADCASTERS: Subsection (a) of this section applies to any contract between a commercial broadcaster and a boxer, or granting any rights with respect to that boxer, involving a broadcast in or affecting interstate commerce, regardless of the broadcast medium. For the purpose of this subsection, any reference in subsection (a) (1) (B) to `promoter’ shall be considered a reference to `commercial broadcaster’.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
              <div className="card-header" id="heading7">
                <h5 className="mb-0 question">
                  <strong>SECTION 11 SANCTIONING ORGANIZATIONS</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordion">
              <div className="card-body">
                <p>a) OBJECTIVE CRITERIA: Within 2 years after the date of the enactment of the Muhammad Ali Boxing Reform Act, the Association of Boxing Commissions shall develop and shall approve by a vote of no less than a majority of its member State boxing commissioners, guidelines for objective and consistent written criteria for the ratings of professional boxers. It is the sense of the Congress that sanctioning bodies and State boxing commissions should follow these ABC guidelines.</p>
                <p>b) APPEALS PROCESS: A sanctioning organization shall not be entitled to receive any compensation, directly or indirectly, in connection with a boxing match, until it provides the boxers with notice that the sanctioning organization shall, within 7 days after receiving a request from a boxer questioning that organizations rating of the boxer-</p>
                <ol className="pl-1">
                  <li>Provide to the boxer a written explanation of the organizations criteria, its rating of the boxer, and the rationale or basis for its rating (including a response to any specific questions submitted by the boxer).</li>
                  <li>Submit a copy of its explanation to the Association of Boxing Commissions.</li>
                </ol>
                <p>c) NOTIFICATION OF CHANGE IN RATING: A sanctioning organization shall not be entitled to receive any compensation, directly or indirectly, in connection with a boxing match, until, with respect to a change in the rating of a boxer previously rated by such organization in the top 10 boxers, the organization</p>
                <ol className="pl-1">
                  <li>Posts a copy, within 7 days of such change, on its Internet website or home page, if any, including an explanation of such change, for a period of not less than 30 days.</li>
                  <li>Provides a copy of the rating change and explanation to an association to which at least a majority of the State boxing commissions belong.</li>
                </ol>
                <br />
                <p>d) PUBLIC DISCLOSURE-</p>
                <ol className="pl-1">
                  <li>FEDERAL TRADE COMMISSION FILING: A sanctioning organization shall not be entitled to receive any compensation directly or indirectly in connection with a boxing match unless, not later than January 31 of each year, it submits to the Federal Trade Commission and to the ABC
                    <p>(a.) A complete description of the organizations ratings criteria, policies, and general sanctioning fee schedule.</p>
                    <p>(b.) The bylaws of the organization.</p>
                    <p>(c.) The appeals procedure of the organization for a boxers rating.</p>
                    <p>(d.) A list and business address of the organizations officials who vote on the ratings of boxers.</p>
                  </li>
                  <li>FORMAT UPDATES: A sanctioning organization shall-
                    <p>(a.) Provide the information required under paragraph (1) in writing, and, for any document greater than 2 pages in length, also in electronic form.</p>
                    <p>(b.) Promptly notify the Federal Trade Commission of any material change in the information submitted.</p>
                  </li>
                  <li>FEDERAL TRADE COMMISSION TO MAKE INFORMATION AVAILABLE TO PUBLIC: the Federal Trade Commission shall make information received under this subsection available to the public. The Commission may assess sanctioning organizations a fee to offset the costs it incurs in processing the information and making it available to the public.</li>
                  <li>INTERNET ALTERNATIVE: In lieu of submitting the information required by paragraph (1) to the Federal Trade Commission, a sanctioning organization may provide the information to the public by maintaining a website on the Internet that–
                    <p>(a.) Is readily accessible by the general public using generally available search engines and does not require a password or payment of a fee for full access to all the information.</p>
                    <p>(b.) Contains all the information required to be submitted to the Federal Trade Commission by paragraph (1) in an easy to search and use format.</p>
                    <p>(c.) Is updated whenever there is a material change in the information.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse8" aria-expanded="true" aria-controls="collapse8">
              <div className="card-header" id="heading8">
                <h5 className="mb-0 question">
                  <strong>SECTION 12 REQUIRED DISCLOSURES TO STATE BOXING COMMISSIONS BY SANCTIONING ORGANIZATIONS</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#accordion">
              <div className="card-body">
                <p>A sanctioning organization shall not be entitled to receive any compensation directly or indirectly in connection with a boxing match until it provides to the boxing commission responsible for regulating the match in a State a statement of–</p>
                <ol className="pl-1">
                  <li>All charges, fees, and costs the organization will assess any boxer participating in that match.</li>
                  <li>All payments, benefits, complimentary benefits, and fees the organization will receive for its affiliation with the event, from the promoter, host of the event, and all other sources.</li>
                  <li>Such additional information as the commission may require.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
              <div className="card-header" id="heading9">
                <h5 className="mb-0 question">
                  <strong>SECTION 13 REQUIRED DISCLOSURES FOR PROMOTERS</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#accordion">
              <div className="card-body">
                <p>(A) DISCLOSURES TO THE BOXING COMMISSIONS: A promoter shall not be entitled to receive any compensation directly or indirectly in connection with a boxing match until it provides to the boxing commission responsible for regulating the match in a State a statement of–</p>
                <ol className="pl-1">
                  <li>A copy of any agreement in writing to which the promoter is a party with any boxer participating in the match</li>
                  <li>A statement made under penalty of perjury that there are no other agreements, written or oral, between the promoter and the boxer with respect to that match.</li>
                  <li>(a) All fees, charges, and expenses that will be assessed by or through the promoter on the boxer pertaining to the event, including any portion of the boxer’s purse that the promoter will receive, and training expenses.
                    <p>(b) All payments, gifts, or benefits the promoter is providing to any sanctioning organization affiliated with the event.</p>
                    <p>(c) Any reduction in a boxer’s purse contrary to a previous agreement between the promoter and the boxer or a purse bid held for the event.</p>
                  </li>
                </ol>
                <br />
                <p>(B) DISCLOSURES TO THE BOXER: A promoter shall not be entitled to receive any compensation directly or indirectly in connection with a boxing match until it provides to the boxer it promotes–</p>
                <ol className="pl-1">
                  <li>The amounts of any compensation or consideration that a promoter has contracted to receive from such match.</li>
                  <li>All fees, charges, and expenses that will be assessed by or through the promoter on the boxer pertaining to the event, including any portion of the boxer’s purse that the promoter will receive, and training expenses.</li>
                  <li>Any reduction in a boxer’s purse contrary to a previous agreement between the promoter and the boxer or a purse bid held for the event.</li>
                </ol>
                <br />
                <p>(C) INFORMATION TO BE AVAILABLE TO STATE ATTORNEY GENERAL: A promoter shall make information required to be disclosed under this section available to the chief law enforcement officer of the State in which the match is to be held upon request of such officer.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse10" aria-expanded="true" aria-controls="collapse10">
              <div className="card-header" id="heading10">
                <h5 className="mb-0 question">
                  <strong>SECTION 14 REQUIRED DISCLOSURES FOR JUDGES AND REFEREES</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse10" className="collapse" aria-labelledby="heading10" data-parent="#accordion">
              <div className="card-body">
                <p>A judge or referee shall not be entitled to receive any compensation, directly or indirectly, in connection with a boxing match until it provides to the boxing commission responsible for regulating the match in a State a statement of all consideration, including reimbursement for expenses that will be received from any source for participation in the match.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
              <div className="card-header" id="heading11">
                <h5 className="mb-0 question">
                  <strong>SECTION 15 CONFIDENTIALITY</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordion">
              <div className="card-body">
                <p>(A) IN GENERAL: Neither a boxing commission or an Attorney General may disclose to the public any matter furnished by a promoter under section 13 except to the extent required in a legal, administrative, or judicial proceeding.</p>
                <p>(B) EFFECT OF CONTRARY STATE LAW: If a State law governing a boxing commission requires that information that would be furnished by a promoter under section 13 shall be made public, then a promoter is not required to file such information with such State if the promoter files such information with the ABC.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse12" aria-expanded="true" aria-controls="collapse12">
              <div className="card-header" id="heading12">
                <h5 className="mb-0 question">
                  <strong>SECTION 16 JUDGES AND REFEREES</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse12" className="collapse" aria-labelledby="heading12" data-parent="#accordion">
              <div className="card-body">
                <p>No person may arrange, promote, organize, produce, or fight in a professional boxing match unless all referees and judges participating in the match have been certified and approved by the boxing commission responsible for regulating the match in the State where the match is held.</p>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse13" aria-expanded="true" aria-controls="collapse13">
              <div className="card-header" id="heading13">
                <h5 className="mb-0 question">
                  <strong>SECTION 5 CONFLICT OF INTEREST</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse13" className="collapse" aria-labelledby="heading13" data-parent="#accordion">
              <div className="card-body">
                <p><strong>Section 17 of the Professional Boxing Safety Act of 1996 (15 U.S.C. 6308) (as re-designated by section 4 of this Act) is amended–</strong></p>
                <ol className="pl-1">
                  <li>In the first sentence by striking `No member’ and inserting
                    <p>(a.) REGULATORY PERSONNEL: No member’; and</p>
                  </li>
                  <li>by adding at the end the following:
                    <p>(b.) FIREWALL BETWEEN PROMOTERS AND MANAGERS:</p>
                    <ol className="pl-1">
                      <li>IN GENERAL: It is unlawful for–
                        <p>(a.) a promoter to have a direct or indirect financial interest in the management of a boxer; or</p>
                        <p>(b.) a manager–</p>
                        <p>i. To have a direct or indirect financial interest in the promotion of a boxer.</p>
                        <p>ii. To be employed by or receive compensation or other benefits from a promoter, except for amounts received as consideration under the manager’s contract with the boxer.</p>
                      </li>
                      <li>EXCEPTIONS: Paragraph (1)–
                        <p>(a.) Does not prohibit a boxer from acting as his own promoter or manager.</p>
                        <p>(b.) Only applies to boxers participating in a boxing match of 10 rounds or more.</p>
                        <p>(c.) SANCTIONING ORGANIZATIONS-</p>
                        <p>1. PROHIBITION ON RECEIPTS: Except as provided in paragraph (2), no officer or employee of a sanctioning organization may receive any compensation, gift, or benefit, directly or indirectly, from a promoter, boxer, or manager.</p>
                        <p>2. EXCEPTIONS: Paragraph (1) does not apply to–</p>
                        <p>(a.) The receipt of payment by a promoter, boxer, or manager of a sanctioning organization’s published fee for sanctioning a professional boxing match or reasonable expenses in connection therewith if the payment is reported to the responsible boxing commission.</p>
                        <p>(b.) The receipt of a gift or benefit of de minimis value.</p>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse14" aria-expanded="true" aria-controls="collapse14">
              <div className="card-header" id="heading14">
                <h5 className="mb-0 question">
                  <strong>SECTION 6 ENFORCEMENT</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse14" className="collapse" aria-labelledby="heading14" data-parent="#accordion">
              <div className="card-body">
                <p>Subsection (b) of section 18 of the Professional Boxing Safety Act of 1996 (15 U.S.C. 6309) (as re-designated by section 4 of this Act) is amended-</p>
                <ol className="pl-1">
                  <li>in paragraph (1) by inserting a comma and `other than section 9(b), 10, 11, 12, 13, 14, or 16,’ after `this Act’;</li>
                  <li>by re-designating paragraphs (2) and (3) as paragraphs (3) and (4), respectively;</li>
                  <li>by inserting after paragraph (1) the following:
                    <p>i. (2) VIOLATION OF ANTIEXPLOITATION, SANCTIONING ORGANIZATION, OR DISCLOSURE PROVISIONS- Any person who knowingly violates any provision of section 9(b), 10, 11, 12, 13, 14, or 16 of this Act shall, upon conviction, be imprisoned for not more than 1 year or fined not more than–</p>
                    <p>(a.) $100,000; and</p>
                    <p>(b.) if a violation occurs in connection with a professional boxing match the gross revenues for which exceed $2,000,000, an additional amount which bears the same ratio to $100,000 as the amount of such revenues compared to $2,000,000, or both.’; and</p>
                  </li>
                  <li>in paragraph (3) (as re-designated by paragraph 2 of this subsection) by striking `section 9′ and inserting `section 17(a)’; and</li>
                  <li>by adding at the end the following:
                    <p>(c.) ACTIONS BY STATES: Whenever the chief law enforcement officer of any State has reason to believe that a person or organization is engaging in practices which violate any requirement of this Act, the State, as parens patriae, may bring a civil action on behalf of its residents in an appropriate district court of the United States–</p>
                    <ol className="pl-1">
                      <li>to enjoin the holding of any professional boxing match which the practice involves;</li>
                      <li>to enforce compliance with this Act;</li>
                      <li>to obtain the fines provided under subsection (b) or appropriate restitution; or</li>
                      <li>To obtain such other relief as the court may deem appropriate.
                        <p>(d.) PRIVATE RIGHT OF ACTION: Any boxer who suffers economic injury as a result of a violation of any provision of this Act may bring an action in the appropriate Federal or State court and recover the damages suffered, court costs, and reasonable attorneys fees and expenses.</p>
                        <p>(e.) ENFORCEMENT AGAINST FEDERAL TRADE COMMISSION, STATE ATTORNEYS GENERAL, ETC: Nothing in this Act authorizes the enforcement of–</p>
                      </li>
                    </ol>
                    <br />
                    <p>1. any provision of this Act against the Federal Trade Commission, the United States Attorney General, or the chief legal officer of any State for acting or failing to act in an official capacity;</p>
                    <p>2. subsection (d) of this section against a State or political subdivision of a State, or any agency or instrumentality thereof; or</p>
                    <p>3. Section 10 against a boxer acting in his capacity as a boxer.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card mb-1">
            <a className="text-left header" data-toggle="collapse" data-target="#collapse15" aria-expanded="true" aria-controls="collapse15">
              <div className="card-header" id="heading15">
                <h5 className="mb-0 question">
                  <strong>SECTION 7 ADDITIONAL AMENDMENTS</strong>
                  <span className="right"><i className="arrow fa fa-arrow-right" aria-hidden="true" /></span>
                </h5>
              </div>
            </a>
            <div id="collapse15" className="collapse" aria-labelledby="heading15" data-parent="#accordion">
              <div className="card-body">
                <p>(A) DEFINITIONS: Section 2(a) of the Professional Boxing Safety Act of 1996 (15 U.S.C. 6301(a)) is amended–</p>
                <ol className="pl-1">
                  <li>in paragraph (9) by inserting after `match.’ the following: `The term `promoter’ does not include a hotel, casino, resort, or other commercial establishment hosting or sponsoring a professional boxing match unless–
                    <p>a. the hotel, casino, resort, or other commercial establishment is primarily responsible for organizing, promoting, and producing the match; and</p>
                    <p>b. There is no other person primarily responsible for organizing, promoting, and producing the match.</p>
                  </li>
                  <li>in paragraph (10) by striking the period at the end and inserting `including the Virgin Islands.’; and</li>
                  <li>by adding at the end the following:
                    <p>(11) EFFECTIVE DATE OF THE CONTRACT: The term `effective date of the contract’ means the day upon which a boxer becomes legally bound by the contract.</p>
                    <p>(12) BOXING SERVICE PROVIDER: The term `boxing service provider’ means a promoter, manager, sanctioning body, licensee, or matchmaker.</p>
                    <p>(13) CONTRACT PROVISION: The term `contract provision’ means any legal obligation between a boxer and a boxing service provider.</p>
                    <p>(14) SANCTIONING ORGANIZATION: The term `sanctioning organization’ means an organization that sanctions professional boxing matches in the United States–</p>
                    <p>(a.) between boxers who are residents of different States; or</p>
                    <p>(b.) That are advertised, otherwise promoted, or broadcast (including closed circuit television) in interstate commerce.</p>
                    <p>(15) SUSPENSION: The term `suspension’ includes within its meaning the revocation of a boxing license.</p>
                  </li>
                </ol>
                <br />
                <p>(B) STATE BOXING COMMISSION PROCEDURES: Section 7(a)(2) of the Professional Boxing Safety Act of 1996 (15 U.S.C. 6306(a)(2)) is amended–</p>
                <ol className="pl-1">
                  <li>in subparagraph (C) by striking `or’;</li>
                  <li>in subparagraph (D) by striking `documents.’ at the end and inserting `documents; or’; and</li>
                  <li>by adding at the end the following:
                    <p>(E) Unsportsmanlike conduct or other inappropriate behavior inconsistent with generally accepted methods of competition in a professional boxing match.</p>
                  </li>
                </ol>
                <br />
                <p>(C) RENEWAL PERIOD FOR IDENTIFICATION CARDS: Section 6(b) (2) of the Professional Boxing Safety Act of 1996 (15 U.S.C. 6305(b) (2)) is amended by striking `2 years.’ and inserting `4 years.’</p>
                <p>(D) REVIEW OF SUSPENSIONS: Section 7(a) (3) of the Professional Boxing Safety Act of 1996 (15 U.S.C. 6306(a) (3)) is amended by striking `boxer’ and inserting `boxer, licensee, manager, matchmaker, promoter, or other boxing service provider’.</p>
                <p>(E) ALTERNATIVE SUPERVISION: Section 4 of the Professional Boxing Safety Act of 1996 (15 U.S.C. 6303) is amended–</p>
                <ol className="pl-1">
                  <li>by striking `No person’ and inserting `(a) No person’; and</li>
                  <li>by inserting at the end thereof the following:
                    <p>(b) For the purpose of this Act, if no State commission is available to supervise a boxing match according to subsection (a), then–</p>
                    <ol className="pl-1">
                      <li>the match may not be held unless it is supervised by an association of boxing commissions to which at least a majority of the States belong; and</li>
                      <li>Any reporting or other requirement relating to a supervising commission allowed under this section shall be deemed to refer to the entity described in paragraph (1).</li>
                    </ol>
                  </li>
                </ol>
                <br />
                <p>(F) HEALTH AND SAFETY DISCLOSURES- Section 6 of the Professional Boxing Safety Act of 1996 (15 U.S.C. 6305) is amended by adding at the end the following new subsection:</p>
                <p>(c) HEALTH AND SAFETY DISCLOSURES: It is the sense of the Congress that a boxing commission should, upon issuing an identification card to a boxer under subsection (b) (1), make a health and safety disclosure to that boxer as that commission considers appropriate. The health and safety disclosure should include the health and safety risks associated with boxing, and, in particular, the risk and frequency of brain injury and the advisability that a boxer periodically undergo medical procedures designed to detect brain injury.</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <p>Published by:&nbsp;<a href="https://mvpboxing.com"><strong>mvpboxing.com</strong></a></p>
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
         span className="a2a_label">Reddit</span></a><a className="a2a_button_pinterest" href="/#pinterest" title="Pinterest" target="_blank" rel="nofollow noopener"><span className="a2a_svg a2a_s__default a2a_s_pinterest" style={{backgroundColor: 'rgb(230, 0, 35)'}}><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M15.995 4C9.361 4 4 9.37 4 15.995c0 5.084 3.16 9.428 7.622 11.176-.109-.948-.198-2.41.039-3.446.217-.938 1.402-5.963 1.402-5.963s-.356-.72-.356-1.777c0-1.668.968-2.912 2.172-2.912 1.027 0 1.52.77 1.52 1.688 0 1.027-.65 2.567-.996 3.998-.287 1.195.602 2.172 1.777 2.172 2.132 0 3.771-2.25 3.771-5.489 0-2.873-2.063-4.877-5.015-4.877-3.416 0-5.42 2.557-5.42 5.203 0 1.027.395 2.132.888 2.735a.36.36 0 0 1 .08.345c-.09.375-.297 1.195-.336 1.363-.05.217-.178.266-.405.158-1.481-.711-2.409-2.903-2.409-4.66 0-3.781 2.745-7.257 7.928-7.257 4.156 0 7.394 2.962 7.394 6.931 0 4.137-2.606 7.464-6.22 7.464-1.214 0-2.36-.632-2.744-1.383l-.75 2.854c-.267 1.046-.998 2.35-1.491 3.149a12 12 0 0 0 3.554.533C22.629 28 28 22.63 28 16.005 27.99 9.37 22.62 4 15.995 4" />
         </svg></span><span className="a2a_label">Pinterest</span></a><a className="a2a_button_email" href="/#email" title="Email" target="_blank" rel="nofollow noopener"><span className="a2a_svg a2a_s__default a2a_s_email" style={{backgroundColor: 'rgb(136, 137, 144)'}}><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M27 21.775v-9.9s-10.01 6.985-10.982 7.348C15.058 18.878 5 11.875 5 11.875v9.9c0 1.375.293 1.65 1.65 1.65h18.7c1.393 0 1.65-.242 1.65-1.65m-.017-11.841c0-1.002-.291-1.359-1.633-1.359H6.65c-1.38 0-1.65.429-1.65 1.43l.016.154s9.939 6.842 11 7.216C17.14 16.941 27 10.005 27 10.005z" /></svg></span><span className="a2a_label">Email</span></a></span></p><div style={{clear: 'both'}} /><p /></div>
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

export default AliAct;