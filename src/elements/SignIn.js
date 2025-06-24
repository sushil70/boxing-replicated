import React, { useState, useEffect } from "react";

import GLOBALS from "../elements/Globals";
import Loader from "../elements/Loader";
// import img5 from './img/ylogo.png'
import { Link } from "react-router-dom";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const SignIn = (props) => {
  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata] = useState("");

  return (
    <>
      <div className="sing_in_contend">
        <div className="BodyContainer-sc-4rz3ia-0 sing_in_box">
          <div data-testid="sign-in">
            <div className="styles__Container-sc-yjr19k-1 sing_in_box_contend">
              <div className="styles__ColumnContainer-sc-yjr19k-2 sign_in_top_contend">
                <div
                  data-testid="logo-container"
                  className="styles__LogoContainer-sc-11jlv0z-0 sign_in_top_contend_img_box"
                ></div>
                <h1
                  role="header"
                  className="styles__HeaderText-sc-yjr19k-5 sign_in_top_contend_text"
                >
                  {" "}
                  Sign in to your MVP BOXING Fight Club Account{" "}
                </h1>
              </div>
              <div className="styles__InputBoxWrapper-sc-yjr19k-3 sign_in_center_contend">
                <div className="styles__Container-sc-dzwwyq-0 sign_in_center_contend_box">
                  <label htmlFor="email-input-field" id="email-input-label">
                    Email
                  </label>
                  <div className="styles__Container-sc-dzwwyq-0 email_contend">
                    <input
                      autoCapitalize="none"
                      autoComplete="email"
                      maxLength={160}
                      placeholder="Enter email address"
                      autoCorrect="on"
                      dir="auto"
                      inputMode="email"
                      rows={1}
                      spellCheck="true"
                      type="email"
                      virtualkeyboardpolicy="auto"
                      aria-describedby="email-input-label"
                      aria-label="Email"
                      aria-required="false"
                      className="css-11aywtz r-6taxm2 r-14lw9ot r-z2wwpe r-rs99b7 r-1khnkhu r-1b43r93 r-eu3ka r-nwxazl r-1mkv55d r-ubg91z"
                      id="email-input-field"
                      data-testid="email-input"
                    />
                  </div>
                </div>
              </div>
              <button
                aria-disabled="true"
                aria-label="Continue"
                disabled
                height={40}
                role="button"
                type="button"
                value="Continue"
                width="100%"
                className="styles__StyledButton-sc-8qc5s2-0 sign_in_center_contend_box_button"
              >
                <div>
                  <span className="styles__StyledText-sc-8qc5s2-1 sign_in_center_contend_box_button_text">
                    Continue
                  </span>
                </div>
              </button>
              <div className="styles__NoAccountContainer-sc-yjr19k-4 sign_in_text_dont">
                <text className="styles__NoAccountText-sc-yjr19k-6 sign_in_text_dont_all">
                  Don’t have an MVP BOXING Fight Club account?
                </text>
              </div>
              <Link to="/Registration">
                <button
                  aria-disabled="false"
                  aria-label="Sign Up"
                  height={40}
                  role="button"
                  type="button"
                  value="Sign Up"
                  width="100%"
                  className="styles__StyledButton-sc-8qc5s2-0 sign_up_box"
                >
                  <div className="sing_up_box_text_contend">
                    <span className="styles__StyledText-sc-8qc5s2-1 sing_up_box_text">
                      Sign Up
                    </span>
                  </div>
                </button>
              </Link>
              <div className="sign_up_line"></div>
              <div />
              <div className="styles__AccountSubWrapper-sc-q68thf-5 sign_up_languagn_box">
                <div
                  data-testid="language-selector"
                  className="styles__LangSelectorWrapper-sc-z69cid-0 sign_up_languagn_box_label"
                >
                  <label
                    htmlFor="language-selector-field"
                    id="language-selector-label"
                    aria-hidden="true"
                  >
                    Select a Language
                  </label>
                  <select
                    aria-label="Select a Language"
                    aria-labelledby="language-selector-label"
                    id="language-selector-field"
                  >
                    <option label="English" value="en" aria-selected="true">
                      English
                    </option>
                    <option label="Spanish" value="es">
                      Spanish
                    </option>
                    <option label="Japanese" value="ja">
                      Japanese
                    </option>
                    <option label="German" value="de">
                      German
                    </option>
                    <option label="Portuguese" value="pt">
                      Portuguese
                    </option>
                    <option label="French" value="fr">
                      French
                    </option>
                  </select>
                </div>
                <button
                  aria-label="Need Help?"
                  role="button"
                  type="button"
                  className="styles__NeedHelpButton-sc-q68thf-6 sign_up_need"
                >
                  Need Help?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
