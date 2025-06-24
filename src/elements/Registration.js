import React, { useState, useEffect } from "react";

import GLOBALS from "../elements/Globals";
import Loader from "../elements/Loader";
// import img5 from './img/ylogo.png'
import { Link } from "react-router-dom";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

const Registration = (props) => {
  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata] = useState("");

  return (
    <>
      <div className="sing_in_contend">
        <div className="BodyContainer-sc-4rz3ia-0 sing_in_box">
          <Link to="/signin">
            <div className="styles__TopNavBodyWrapper-sc-1858ovt-0 fBXGQW">
              <button
                aria-label="Back Button"
                aria-pressed="false"
                role="button"
                type="button"
                className="styles__BackButtonWrapper-sc-f5wfdc-0 kBlYfW"
              >
                <svg
                  className="svg_registration"
                  color="#000000"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M669.387 819.803l11.080-11.11c12.186-11.52 13.21-24.719 0.666-37.263l-260.004-259.686 260.004-259.338c12.175-12.175 11.52-25.733-0.666-37.253l-11.090-11.090c-12.175-11.52-25.733-11.52-37.253 0l-289.075 289.065c-12.175 12.175-12.175 25.078 0 37.253l289.075 289.423c11.52 11.52 24.719 11.878 37.263 0z" />
                </svg>
              </button>
            </div>
          </Link>

          <div className="styles__BodyWrapper-sc-1858ovt-1 dbHsLn">
            <div
              data-testid="sign-up"
              className="styles__Container-sc-xxfswo-1 iWBcxu"
            >
              <div className="styles__TextWrapper-sc-xxfswo-2 hGTQoy">
                <div
                  data-testid="logo-container"
                  className="styles__LogoContainer-sc-11jlv0z-0 jduJqv"
                ></div>
                <h1
                  role="header"
                  className="styles__HeaderText-sc-xxfswo-5 firAP"
                >
                  One Account is All You Need
                </h1>
                <p className="styles__DescriptionText-sc-xxfswo-6 boYUgX">
                  Get the latest news on your team, follow your favorite
                  players, and manage your subscriptions
                </p>
              </div>
              <div className="line_line" />
              <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
                <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                  <label htmlFor="emailTestId-field" id="emailTestId-label">
                    Email
                  </label>
                  <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                    <input
                      autoCapitalize="sentences"
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
                      aria-describedby="emailTestId-label"
                      aria-label="Email"
                      aria-required="true"
                      className="css-11aywtz r-6taxm2 r-14lw9ot r-1voc4r3 r-z2wwpe r-rs99b7 r-1khnkhu r-1b43r93 r-eu3ka r-nwxazl r-1mkv55d r-ubg91z r-mb774y"
                      id="emailTestId-field"
                      data-testid="emailTestId"
                    />
                  </div>
                </div>
              </div>
              <div className="styles__PasswordInput-sc-xxfswo-4 kTshDj">
                <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                  <label
                    htmlFor="passwordTestId-field"
                    id="passwordTestId-label"
                  >
                    Password
                  </label>
                  <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                    <input
                      autoCapitalize="sentences"
                      autoComplete="new-password"
                      maxLength={160}
                      placeholder="Enter password"
                      autoCorrect="on"
                      dir="auto"
                      inputMode="text"
                      rows={1}
                      spellCheck="true"
                      type="password"
                      virtualkeyboardpolicy="auto"
                      aria-describedby="passwordTestId-label"
                      aria-label="Password"
                      aria-required="true"
                      className="css-11aywtz r-6taxm2 r-14lw9ot r-1voc4r3 r-z2wwpe r-rs99b7 r-1khnkhu r-1b43r93 r-eu3ka r-nwxazl r-1mkv55d r-ubg91z r-mb774y ownid-skip-password"
                      id="passwordTestId-field"
                      data-testid="passwordTestId"
                    />
                  </div>
                </div>
                <div />
              </div>
              <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
                <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                  <label
                    htmlFor="firstNameTestId-field"
                    id="firstNameTestId-label"
                  >
                    First Name
                  </label>
                  <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                    <input
                      autoCapitalize="sentences"
                      autoComplete="given-name"
                      maxLength={40}
                      placeholder="Enter first name"
                      autoCorrect="on"
                      dir="auto"
                      inputMode="text"
                      rows={1}
                      spellCheck="true"
                      type="text"
                      virtualkeyboardpolicy="auto"
                      aria-describedby="firstNameTestId-label"
                      aria-label="First Name"
                      aria-required="true"
                      className="css-11aywtz r-6taxm2 r-14lw9ot r-1voc4r3 r-z2wwpe r-rs99b7 r-1khnkhu r-1b43r93 r-eu3ka r-nwxazl r-1mkv55d r-ubg91z r-mb774y"
                      id="firstNameTestId-field"
                      data-testid="firstNameTestId"
                    />
                  </div>
                </div>
              </div>
              <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
                <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                  <label
                    htmlFor="lastNameTestId-field"
                    id="lastNameTestId-label"
                  >
                    Last Name
                  </label>
                  <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                    <input
                      autoCapitalize="sentences"
                      autoComplete="family-name"
                      maxLength={40}
                      placeholder="Enter last name"
                      autoCorrect="on"
                      dir="auto"
                      inputMode="text"
                      rows={1}
                      spellCheck="true"
                      type="text"
                      virtualkeyboardpolicy="auto"
                      aria-describedby="lastNameTestId-label"
                      aria-label="Last Name"
                      aria-required="true"
                      className="css-11aywtz r-6taxm2 r-14lw9ot r-1voc4r3 r-z2wwpe r-rs99b7 r-1khnkhu r-1b43r93 r-eu3ka r-nwxazl r-1mkv55d r-ubg91z r-mb774y"
                      id="lastNameTestId-field"
                      data-testid="lastNameTestId"
                    />
                  </div>
                </div>
              </div>
              <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
                <label htmlFor="dateOfBirth-field" id="dateOfBirth-label">
                  Date of Birth
                </label>

                <input
                  data-testid="birthdayTestId"
                  id="dateOfBirth-field"
                  placeholder="MM/DD/YYYY"
                  type="tel"
                  aria-describedby="dateOfBirth-label"
                  aria-placeholder="MM/dd/yyyy"
                  style={{
                    borderRadius: 4,
                    height: 40,
                    lineHeight: 40,
                    fontSize: 14,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderWidth: 1,
                    color: "rgb(0, 0, 0)",
                    fontFamily: "All-ProSans-Medium, var(--font-sans-medium)",
                  }}
                />
              </div>
              <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
                <label
                  htmlFor="countryDropdown-field"
                  id="countryDropdown-label"
                  aria-hidden="false"
                  s
                >
                  Country
                </label>
                <select
                  aria-label="Country"
                  aria-labelledby="countryDropdown-label"
                  autoComplete="country-name"
                  id="countryDropdown-field"
                >
                  <option label="Afghanistan" value="AF">
                    Afghanistan
                  </option>
                  <option label="Albania" value="AL">
                    Albania
                  </option>
                  <option label="Algeria" value="DZ">
                    Algeria
                  </option>
                  <option label="American Samoa" value="AS">
                    American Samoa
                  </option>
                  <option label="Andorra" value="AD">
                    Andorra
                  </option>
                  <option label="Angola" value="AO">
                    Angola
                  </option>
                  <option label="Anguilla" value="AI">
                    Anguilla
                  </option>
                  <option label="Antarctica" value="AQ">
                    Antarctica
                  </option>
                  <option label="Antigua and Barbuda" value="AG">
                    Antigua and Barbuda
                  </option>
                  <option label="Argentina" value="AR">
                    Argentina
                  </option>
                  <option label="Armenia" value="AM">
                    Armenia
                  </option>
                  <option label="Aruba" value="AW">
                    Aruba
                  </option>
                  <option label="Australia" value="AU">
                    Australia
                  </option>
                  <option label="Austria" value="AT">
                    Austria
                  </option>
                  <option label="Azerbaijan" value="AZ">
                    Azerbaijan
                  </option>
                  <option label="Bahamas" value="BS">
                    Bahamas
                  </option>
                  <option label="Bahrain" value="BH">
                    Bahrain
                  </option>
                  <option label="Bangladesh" value="BD">
                    Bangladesh
                  </option>
                  <option label="Barbados" value="BB">
                    Barbados
                  </option>
                  <option label="Belarus" value="BY">
                    Belarus
                  </option>
                  <option label="Belgium" value="BE">
                    Belgium
                  </option>
                  <option label="Belize" value="BZ">
                    Belize
                  </option>
                  <option label="Benin" value="BJ">
                    Benin
                  </option>
                  <option label="Bermuda" value="BM">
                    Bermuda
                  </option>
                  <option label="Bhutan" value="BT">
                    Bhutan
                  </option>
                  <option label="Bolivia" value="BO">
                    Bolivia
                  </option>
                  <option label="Bosnia and Herzegovina" value="BA">
                    Bosnia and Herzegovina
                  </option>
                  <option label="Botswana" value="BW">
                    Botswana
                  </option>
                  <option label="Brazil" value="BR">
                    Brazil
                  </option>
                  <option label="British Indian Ocean Territory" value="IO">
                    British Indian Ocean Territory
                  </option>
                  <option label="British Virgin Islands" value="VG">
                    British Virgin Islands
                  </option>
                  <option label="Brunei" value="BN">
                    Brunei
                  </option>
                  <option label="Bulgaria" value="BG">
                    Bulgaria
                  </option>
                  <option label="Burkina Faso" value="BF">
                    Burkina Faso
                  </option>
                  <option label="Burundi" value="BI">
                    Burundi
                  </option>
                  <option label="Cambodia" value="KH">
                    Cambodia
                  </option>
                  <option label="Cameroon" value="CM">
                    Cameroon
                  </option>
                  <option label="Canada" value="CA">
                    Canada
                  </option>
                  <option label="Cape Verde" value="CV">
                    Cape Verde
                  </option>
                  <option label="Cayman Islands" value="KY">
                    Cayman Islands
                  </option>
                  <option label="Central African Republic" value="CF">
                    Central African Republic
                  </option>
                  <option label="Chad" value="TD">
                    Chad
                  </option>
                  <option label="Chile" value="CL">
                    Chile
                  </option>
                  <option label="China" value="CN">
                    China
                  </option>
                  <option label="Christmas Island" value="CX">
                    Christmas Island
                  </option>
                  <option label="Cocos Islands" value="CC">
                    Cocos Islands
                  </option>
                  <option label="Colombia" value="CO">
                    Colombia
                  </option>
                  <option label="Comoros" value="KM">
                    Comoros
                  </option>
                  <option label="Cook Islands" value="CK">
                    Cook Islands
                  </option>
                  <option label="Costa Rica" value="CR">
                    Costa Rica
                  </option>
                  <option label="Croatia" value="HR">
                    Croatia
                  </option>
                  <option label="Cuba" value="CU">
                    Cuba
                  </option>
                  <option label="Curacao" value="CW">
                    Curacao
                  </option>
                  <option label="Cyprus" value="CY">
                    Cyprus
                  </option>
                  <option label="Czech Republic" value="CZ">
                    Czech Republic
                  </option>
                  <option label="Democratic Republic of the Congo" value="CD">
                    Democratic Republic of the Congo
                  </option>
                  <option label="Denmark" value="DK">
                    Denmark
                  </option>
                  <option label="Djibouti" value="DJ">
                    Djibouti
                  </option>
                  <option label="Dominica" value="DM">
                    Dominica
                  </option>
                  <option label="Dominican Republic" value="DO">
                    Dominican Republic
                  </option>
                  <option label="East Timor" value="TL">
                    East Timor
                  </option>
                  <option label="Ecuador" value="EC">
                    Ecuador
                  </option>
                  <option label="Egypt" value="EG">
                    Egypt
                  </option>
                  <option label="El Salvador" value="SV">
                    El Salvador
                  </option>
                  <option label="Equatorial Guinea" value="GQ">
                    Equatorial Guinea
                  </option>
                  <option label="Eritrea" value="ER">
                    Eritrea
                  </option>
                  <option label="Estonia" value="EE">
                    Estonia
                  </option>
                  <option label="Ethiopia" value="ET">
                    Ethiopia
                  </option>
                  <option label="Falkland Islands" value="FK">
                    Falkland Islands
                  </option>
                  <option label="Faroe Islands" value="FO">
                    Faroe Islands
                  </option>
                  <option label="Fiji" value="FJ">
                    Fiji
                  </option>
                  <option label="Finland" value="FI">
                    Finland
                  </option>
                  <option label="France" value="FR">
                    France
                  </option>
                  <option label="French Polynesia" value="PF">
                    French Polynesia
                  </option>
                  <option label="Gabon" value="GA">
                    Gabon
                  </option>
                  <option label="Gambia" value="GM">
                    Gambia
                  </option>
                  <option label="Georgia" value="GE">
                    Georgia
                  </option>
                  <option label="Germany" value="DE">
                    Germany
                  </option>
                  <option label="Ghana" value="GH">
                    Ghana
                  </option>
                  <option label="Gibraltar" value="GI">
                    Gibraltar
                  </option>
                  <option label="Greece" value="GR">
                    Greece
                  </option>
                  <option label="Greenland" value="GL">
                    Greenland
                  </option>
                  <option label="Grenada" value="GD">
                    Grenada
                  </option>
                  <option label="Guam" value="GU">
                    Guam
                  </option>
                  <option label="Guatemala" value="GT">
                    Guatemala
                  </option>
                  <option label="Guernsey" value="GG">
                    Guernsey
                  </option>
                  <option label="Guinea" value="GN">
                    Guinea
                  </option>
                  <option label="Guinea-Bissau" value="GW">
                    Guinea-Bissau
                  </option>
                  <option label="Guyana" value="GY">
                    Guyana
                  </option>
                  <option label="Haiti" value="HT">
                    Haiti
                  </option>
                  <option label="Honduras" value="HN">
                    Honduras
                  </option>
                  <option label="Hong Kong" value="HK">
                    Hong Kong
                  </option>
                  <option label="Hungary" value="HU">
                    Hungary
                  </option>
                  <option label="Iceland" value="IS">
                    Iceland
                  </option>
                  <option label="India" value="IN" aria-selected="true">
                    India
                  </option>
                  <option label="Indonesia" value="ID">
                    Indonesia
                  </option>
                  <option label="Iran" value="IR">
                    Iran
                  </option>
                  <option label="Iraq" value="IQ">
                    Iraq
                  </option>
                  <option label="Ireland" value="IE">
                    Ireland
                  </option>
                  <option label="Isle of Man" value="IM">
                    Isle of Man
                  </option>
                  <option label="Israel" value="IL">
                    Israel
                  </option>
                  <option label="Italy" value="IT">
                    Italy
                  </option>
                  <option label="Ivory Coast" value="CI">
                    Ivory Coast
                  </option>
                  <option label="Jamaica" value="JM">
                    Jamaica
                  </option>
                  <option label="Japan" value="JP">
                    Japan
                  </option>
                  <option label="Jersey" value="JE">
                    Jersey
                  </option>
                  <option label="Jordan" value="JO">
                    Jordan
                  </option>
                  <option label="Kazakhstan" value="KZ">
                    Kazakhstan
                  </option>
                  <option label="Kenya" value="KE">
                    Kenya
                  </option>
                  <option label="Kiribati" value="KI">
                    Kiribati
                  </option>
                  <option label="Kosovo" value="XK">
                    Kosovo
                  </option>
                  <option label="Kuwait" value="KW">
                    Kuwait
                  </option>
                  <option label="Kyrgyzstan" value="KG">
                    Kyrgyzstan
                  </option>
                  <option label="Laos" value="LA">
                    Laos
                  </option>
                  <option label="Latvia" value="LV">
                    Latvia
                  </option>
                  <option label="Lebanon" value="LB">
                    Lebanon
                  </option>
                  <option label="Lesotho" value="LS">
                    Lesotho
                  </option>
                  <option label="Liberia" value="LR">
                    Liberia
                  </option>
                  <option label="Libya" value="LY">
                    Libya
                  </option>
                  <option label="Liechtenstein" value="LI">
                    Liechtenstein
                  </option>
                  <option label="Lithuania" value="LT">
                    Lithuania
                  </option>
                  <option label="Luxembourg" value="LU">
                    Luxembourg
                  </option>
                  <option label="Macao" value="MO">
                    Macao
                  </option>
                  <option label="Macedonia" value="MK">
                    Macedonia
                  </option>
                  <option label="Madagascar" value="MG">
                    Madagascar
                  </option>
                  <option label="Malawi" value="MW">
                    Malawi
                  </option>
                  <option label="Malaysia" value="MY">
                    Malaysia
                  </option>
                  <option label="Maldives" value="MV">
                    Maldives
                  </option>
                  <option label="Mali" value="ML">
                    Mali
                  </option>
                  <option label="Malta" value="MT">
                    Malta
                  </option>
                  <option label="Marshall Islands" value="MH">
                    Marshall Islands
                  </option>
                  <option label="Mauritania" value="MR">
                    Mauritania
                  </option>
                  <option label="Mauritius" value="MU">
                    Mauritius
                  </option>
                  <option label="Mayotte" value="YT">
                    Mayotte
                  </option>
                  <option label="Mexico" value="MX">
                    Mexico
                  </option>
                  <option label="Micronesia" value="FM">
                    Micronesia
                  </option>
                  <option label="Moldova" value="MD">
                    Moldova
                  </option>
                  <option label="Monaco" value="MC">
                    Monaco
                  </option>
                  <option label="Mongolia" value="MN">
                    Mongolia
                  </option>
                  <option label="Montenegro" value="ME">
                    Montenegro
                  </option>
                  <option label="Montserrat" value="MS">
                    Montserrat
                  </option>
                  <option label="Morocco" value="MA">
                    Morocco
                  </option>
                  <option label="Mozambique" value="MZ">
                    Mozambique
                  </option>
                  <option label="Myanmar" value="MM">
                    Myanmar
                  </option>
                  <option label="Namibia" value="NA">
                    Namibia
                  </option>
                  <option label="Nauru" value="NR">
                    Nauru
                  </option>
                  <option label="Nepal" value="NP">
                    Nepal
                  </option>
                  <option label="Netherlands" value="NL">
                    Netherlands
                  </option>
                  <option label="Netherlands Antilles" value="AN">
                    Netherlands Antilles
                  </option>
                  <option label="New Caledonia" value="NC">
                    New Caledonia
                  </option>
                  <option label="New Zealand" value="NZ">
                    New Zealand
                  </option>
                  <option label="Nicaragua" value="NI">
                    Nicaragua
                  </option>
                  <option label="Niger" value="NE">
                    Niger
                  </option>
                  <option label="Nigeria" value="NG">
                    Nigeria
                  </option>
                  <option label="Niue" value="NU">
                    Niue
                  </option>
                  <option label="North Korea" value="KP">
                    North Korea
                  </option>
                  <option label="Northern Mariana Islands" value="MP">
                    Northern Mariana Islands
                  </option>
                  <option label="Norway" value="NO">
                    Norway
                  </option>
                  <option label="Oman" value="OM">
                    Oman
                  </option>
                  <option label="Pakistan" value="PK">
                    Pakistan
                  </option>
                  <option label="Palau" value="PW">
                    Palau
                  </option>
                  <option label="Palestine" value="PS">
                    Palestine
                  </option>
                  <option label="Panama" value="PA">
                    Panama
                  </option>
                  <option label="Papua New Guinea" value="PG">
                    Papua New Guinea
                  </option>
                  <option label="Paraguay" value="PY">
                    Paraguay
                  </option>
                  <option label="Peru" value="PE">
                    Peru
                  </option>
                  <option label="Philippines" value="PH">
                    Philippines
                  </option>
                  <option label="Pitcairn" value="PN">
                    Pitcairn
                  </option>
                  <option label="Poland" value="PL">
                    Poland
                  </option>
                  <option label="Portugal" value="PT">
                    Portugal
                  </option>
                  <option label="Puerto Rico" value="PR">
                    Puerto Rico
                  </option>
                  <option label="Qatar" value="QA">
                    Qatar
                  </option>
                  <option label="Republic of the Congo" value="CG">
                    Republic of the Congo
                  </option>
                  <option label="Reunion" value="RE">
                    Reunion
                  </option>
                  <option label="Romania" value="RO">
                    Romania
                  </option>
                  <option label="Russia" value="RU">
                    Russia
                  </option>
                  <option label="Rwanda" value="RW">
                    Rwanda
                  </option>
                  <option label="Saint Barthelemy" value="BL">
                    Saint Barthelemy
                  </option>
                  <option label="Saint Helena" value="SH">
                    Saint Helena
                  </option>
                  <option label="Saint Kitts and Nevis" value="KN">
                    Saint Kitts and Nevis
                  </option>
                  <option label="Saint Lucia" value="LC">
                    Saint Lucia
                  </option>
                  <option label="Saint Martin" value="MF">
                    Saint Martin
                  </option>
                  <option label="Saint Pierre and Miquelon" value="PM">
                    Saint Pierre and Miquelon
                  </option>
                  <option label="Saint Vincent and the Grenadines" value="VC">
                    Saint Vincent and the Grenadines
                  </option>
                  <option label="Samoa" value="WS">
                    Samoa
                  </option>
                  <option label="San Marino" value="SM">
                    San Marino
                  </option>
                  <option label="Sao Tome and Principe" value="ST">
                    Sao Tome and Principe
                  </option>
                  <option label="Saudi Arabia" value="SA">
                    Saudi Arabia
                  </option>
                  <option label="Senegal" value="SN">
                    Senegal
                  </option>
                  <option label="Serbia" value="RS">
                    Serbia
                  </option>
                  <option label="Seychelles" value="SC">
                    Seychelles
                  </option>
                  <option label="Sierra Leone" value="SL">
                    Sierra Leone
                  </option>
                  <option label="Singapore" value="SG">
                    Singapore
                  </option>
                  <option label="Sint Maarten" value="SX">
                    Sint Maarten
                  </option>
                  <option label="Slovakia" value="SK">
                    Slovakia
                  </option>
                  <option label="Slovenia" value="SI">
                    Slovenia
                  </option>
                  <option label="Solomon Islands" value="SB">
                    Solomon Islands
                  </option>
                  <option label="Somalia" value="SO">
                    Somalia
                  </option>
                  <option label="South Africa" value="ZA">
                    South Africa
                  </option>
                  <option label="South Korea" value="KR">
                    South Korea
                  </option>
                  <option label="South Sudan" value="SS">
                    South Sudan
                  </option>
                  <option label="Spain" value="ES">
                    Spain
                  </option>
                  <option label="Sri Lanka" value="LK">
                    Sri Lanka
                  </option>
                  <option label="Sudan" value="SD">
                    Sudan
                  </option>
                  <option label="Suriname" value="SR">
                    Suriname
                  </option>
                  <option label="Svalbard and Jan Mayen" value="SJ">
                    Svalbard and Jan Mayen
                  </option>
                  <option label="Swaziland" value="SZ">
                    Swaziland
                  </option>
                  <option label="Sweden" value="SE">
                    Sweden
                  </option>
                  <option label="Switzerland" value="CH">
                    Switzerland
                  </option>
                  <option label="Syria" value="SY">
                    Syria
                  </option>
                  <option label="Taiwan" value="TW">
                    Taiwan
                  </option>
                  <option label="Tajikistan" value="TJ">
                    Tajikistan
                  </option>
                  <option label="Tanzania" value="TZ">
                    Tanzania
                  </option>
                  <option label="Thailand" value="TH">
                    Thailand
                  </option>
                  <option label="Togo" value="TG">
                    Togo
                  </option>
                  <option label="Tokelau" value="TK">
                    Tokelau
                  </option>
                  <option label="Tonga" value="TO">
                    Tonga
                  </option>
                  <option label="Trinidad and Tobago" value="TT">
                    Trinidad and Tobago
                  </option>
                  <option label="Tunisia" value="TN">
                    Tunisia
                  </option>
                  <option label="Turkey" value="TR">
                    Turkey
                  </option>
                  <option label="Turkmenistan" value="TM">
                    Turkmenistan
                  </option>
                  <option label="Turks and Caicos Islands" value="TC">
                    Turks and Caicos Islands
                  </option>
                  <option label="Tuvalu" value="TV">
                    Tuvalu
                  </option>
                  <option label="U.S. Virgin Islands" value="VI">
                    U.S. Virgin Islands
                  </option>
                  <option label="Uganda" value="UG">
                    Uganda
                  </option>
                  <option label="Ukraine" value="UA">
                    Ukraine
                  </option>
                  <option label="United Arab Emirates" value="AE">
                    United Arab Emirates
                  </option>
                  <option label="United Kingdom" value="GB">
                    United Kingdom
                  </option>
                  <option label="United States" value="US">
                    United States
                  </option>
                  <option label="Uruguay" value="UY">
                    Uruguay
                  </option>
                  <option label="Uzbekistan" value="UZ">
                    Uzbekistan
                  </option>
                  <option label="Vanuatu" value="VU">
                    Vanuatu
                  </option>
                  <option label="Vatican" value="VA">
                    Vatican
                  </option>
                  \
                  <option label="Venezuela" value="VE">
                    Venezuela
                  </option>
                  <option label="Vietnam" value="VN">
                    Vietnam
                  </option>
                  <option label="Wallis and Futuna" value="WF">
                    Wallis and Futuna
                  </option>
                  <option label="Western Sahara" value="EH">
                    Western Sahara
                  </option>
                  <option label="Yemen" value="YE">
                    Yemen
                  </option>
                  <option label="Zambia" value="ZM">
                    Zambia
                  </option>
                  <option label="Zimbabwe" value="ZW">
                    Zimbabwe
                  </option>
                </select>
              </div>
              <div className="styles__InputBoxWrapper-sc-xxfswo-3 jXBVrB">
                <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                  <label htmlFor="zipTestId-field" id="zipTestId-label">
                    Postal Code (Optional)
                  </label>
                  <div className="styles__Container-sc-dzwwyq-0 gHmJWS">
                    <input
                      autoCapitalize="sentences"
                      autoComplete="postal-code"
                      maxLength={160}
                      placeholder="Enter postal code"
                      autoCorrect="on"
                      dir="auto"
                      inputMode="text"
                      rows={1}
                      spellCheck="true"
                      type="text"
                      virtualkeyboardpolicy="auto"
                      aria-describedby="zipTestId-label"
                      aria-label="Postal Code (Optional)"
                      aria-required="false"
                      className="css-11aywtz r-6taxm2 r-14lw9ot r-1voc4r3 r-z2wwpe r-rs99b7 r-1khnkhu r-1b43r93 r-eu3ka r-nwxazl r-1mkv55d r-ubg91z r-mb774y"
                      id="zipTestId-field"
                      data-testid="zipTestId"
                    />
                  </div>
                </div>
              </div>
              <div className="css-175oi2r">
                <div className=" r-1habvwh r-18u37iz r-1wzrnnt">
                  <div className="r-1awozwy r-14lw9ot r-z2wwpe r-rs99b7 r-1777fci checkbox_reg">
                    <input
                      aria-checked="false"
                      aria-label="Consent Checkbox"
                      aria-labelledby="marketingOptInId-chkbox"
                      id="marketingOptInId"
                      type="checkbox"
                    />
                  </div>
                  <label
                    htmlFor="marketingOptInId"
                    id="marketingOptInId-chkbox"
                  >
                    I agree that the MVP may send me content, offers and more.
                  </label>
                </div>
                <div className="r-1habvwh r-18u37iz r-1wzrnnt">
                  <div className="styles__WarningText-sc-9xi3v2-0 jpLSyP">
                    <p>By clicking “Create Account“, I agree to the MVP's </p>
                    <Link
                      to="/terms_of_use"
                      target="blank"
                      className="styles__HighlightedLink-sc-9xi3v2-1 fqGjgu"
                    >
                      Terms of Service
                    </Link>
                    <p>
                      {" "}
                      and understand that personal information will be used as
                      described in the MVP's{" "}
                    </p>
                    <Link
                      to="/privacy_Policy"
                      target="blank"
                      className="styles__HighlightedLink-sc-9xi3v2-1 fqGjgu"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
              <div className="css-175oi2r account_reg">
                <button
                  aria-disabled="false"
                  aria-label="Create Account"
                  height={40}
                  role="button"
                  type="button"
                  value="Create Account"
                  width="100%"
                  className="styles__StyledButton-sc-8qc5s2-0 hqtidt"
                >
                  <div className="Create_account_reg">
                    <span className="styles__StyledText-sc-8qc5s2-1 dECuhf">
                      Create Account
                    </span>
                  </div>
                </button>
              </div>
              <div className="styles__TextWrapper-sc-xxfswo-2 hGTQoy">
                <p className="styles__WarningText-sc-xxfswo-9 cnkjlK">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="styles__HighlightedLink-sc-xxfswo-10 eamvOU"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
              <div className="line_line"></div>
              <div />
              <div
                data-testid="language-selector"
                className="styles__LangSelectorWrapper-sc-z69cid-0 huoexK"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
