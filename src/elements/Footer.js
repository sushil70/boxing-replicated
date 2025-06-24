import React, { useEffect } from "react";
import img2 from "./img/gold_crown.png";
import img3 from "./img/white-arrow-down.png";

import { Link } from "react-router-dom";
import $ from "jquery";

export default function Footer() {
  useEffect(() => {
    $(".footer_item_li").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    var langArray = [];
    var i = 0;
    let initialSection_1 = "";
    $(".vodiapicker_footer option").each(function () {
      var img = $(this).attr("data-thumbnail");
      var text = this.innerText;
      var value = $(this).val();
      if (i == 0) {
        var item =
          "<li><span>" +
          text +
          '</span><img src="' +
          img +
          '" alt="" value="' +
          value +
          '"/></li>';
        initialSection_1 = "<li>" + text + "</li>";
      } else if (value == "en_lt") {
        var item = "<li><span>" + text + "</span></li>";
      } else {
        var item =
          "<li><span>" +
          text +
          '</span><img src="' +
          img +
          '" alt="" value="' +
          value +
          '"/></li>';
      }
      i++;
      langArray.push(item);
    });

    $("#footer_country_selector").html(langArray);

    //Set the button value to the first el of the array
    $(".btn-select-footer").html(initialSection_1);
    $(".btn-select-footer").attr("value", "en");

    //change button stuff on click
    $("#footer_country_selector li").click(function () {
      var img = $(this).find("img").attr("src");
      var value = $(this).find("img").attr("value");
      var text = this.innerText;
      var item = "<li>" + text + "</li>";
      $(".btn-select-footer").html(item);
      $(".btn-select-footer").attr("value", value);
      $(".b-footer").toggle();
      $(".b-footer").removeClass("active");
    });

    $(".btn-select-footer,.down-arrow-footer").click(function () {
      var __selector = $(".b-footer");
      if (!__selector.hasClass("active")) {
        __selector.show();
        __selector.addClass("active");
      } else {
        __selector.hide();
        __selector.removeClass("active");
      }
    });

    //check local storage for the lang
    var sessionLang = localStorage.getItem("lang");
    if (sessionLang) {
      //find an item with value of sessionLang
      var langIndex = langArray.indexOf(sessionLang);
      $(".btn-select-footer").html(langArray[langIndex]);
      $(".btn-select-footer").attr("value", sessionLang);
    } else {
      var langIndex = langArray.indexOf("ch");
      console.log(langIndex);
      $(".btn-select-footer").html(langArray[langIndex]);
      //$('.btn-select').attr('value', 'en');
    }

    var langArray = [];
    var i = 0;
    let initialSection = "";
    $(".vodiapicker_footer_1 option").each(function () {
      var img = $(this).attr("data-thumbnail");
      var text = this.innerText;
      var value = $(this).val();
      if (i == 0) {
        var item =
          "<li><span>" +
          text +
          '</span><img src="' +
          img +
          '" alt="" value="' +
          value +
          '"/></li>';
        initialSection = "<li>" + text + "</li>";
      } else if (value == "en_lt") {
        var item = "<li><span>" + text + "</span></li>";
      } else {
        var item =
          "<li><span>" +
          text +
          '</span><img src="' +
          img +
          '" alt="" value="' +
          value +
          '"/></li>';
      }
      i++;
      langArray.push(item);
    });

    $("#footer_country_selector_1").html(langArray);

    //Set the button value to the first el of the array
    $(".btn-select-footer_1").html(initialSection);
    $(".btn-select-footer_1").attr("value", "en");

    //change button stuff on click
    $("#footer_country_selector_1 li").click(function () {
      var img = $(this).find("img").attr("src");
      var value = $(this).find("img").attr("value");
      var text = this.innerText;
      var item = "<li>" + text + "</li>";
      $(".btn-select-footer_1").html(item);
      $(".btn-select-footer_1").attr("value", value);
      $(".b-footer_1").toggle();
      $(".b-footer_1").removeClass("active");
    });

    $(".btn-select-footer_1,.down-arrow-footer_1").click(function () {
      var __selector = $(".b-footer_1");
      if (!__selector.hasClass("active")) {
        __selector.show();
        __selector.addClass("active");
      } else {
        __selector.hide();
        __selector.removeClass("active");
      }
    });

    //check local storage for the lang
    var sessionLang = localStorage.getItem("lang");
    if (sessionLang) {
      //find an item with value of sessionLang
      var langIndex = langArray.indexOf(sessionLang);
      $(".btn-select-footer_1").html(langArray[langIndex]);
      $(".btn-select-footer_1").attr("value", sessionLang);
    } else {
      var langIndex = langArray.indexOf("ch");
      console.log(langIndex);
      $(".btn-select-footer_1").html(langArray[langIndex]);
      //$('.btn-select').attr('value', 'en');
    }
  }, []);

  return (
    <footer id="service_footer" className="mvpBgContainer mvp_container">
      <section className="d-none d-md-block d-md-block" id="footer-id">
        <div
          id="bottom_footer"
          className="d-table mx-auto text-center"
          style={{ backgroundColor: "black" }}
        >
          <div className="row nomargin brdr-red">
            <div className="dropdown col-12 text-center">
              <div className="header-country-selector">
                <select className="vodiapicker_footer">
                  <option
                    value="en_lt"
                    className="test"
                    data-thumbnail="assets/img/wold.jpg"
                  >
                    LATIN AMERICA
                  </option>
                  <option
                    value="es"
                    className="test"
                    data-thumbnail="assets/img/España.jpg"
                  >
                    España
                  </option>
                  <option
                    value="en"
                    className="test"
                    data-thumbnail="assets/img/Latin America.jpg"
                  >
                    UNITED STATES
                  </option>
                  <option value="au" data-thumbnail="assets/img/Brazil.jpg">
                    BRASIL
                  </option>
                  <option value="uk" data-thumbnail="assets/img/Russia.jpg">
                    RUSSIA
                  </option>
                  <option value="cn" data-thumbnail="assets/img/Poland.jpg">
                    POLAND
                  </option>
                  <option value="de" data-thumbnail="assets/img/Germany.jpg">
                    GERMANY
                  </option>
                  <option value="dk" data-thumbnail="assets/img/China.jpg">
                    CHINA
                  </option>
                  <option value="fr" data-thumbnail="assets/img/Japan.jpg">
                    JAPAN
                  </option>
                  <option value="gr" data-thumbnail="assets/img/Korea.jpg">
                    SOUTH KOREA
                  </option>
                </select>

                <div className="lang-select">
                  <div className="country-manu">
                    <button className="btn-select-footer" value=""></button>
                    <img className="down-arrow-footer" src={img3} />
                  </div>
                  <div className="b-footer">
                    <ul id="footer_country_selector"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer_contend">
            <div className="footer_item">
              <ul className="footer_item_ul">
                <li className="MVP_BOXING">MVP BOXING</li>
                <li className="footer_item_li">
                  <Link to="/about">About</Link>
                </li>
                <li className="footer_item_li">
                  <Link to="/community">Community</Link>
                </li>
                <li className="footer_item_li">
                  <Link to="/launchingsoon">Shop</Link>
                </li>
              </ul>
            </div>
            <div className="footer_item">
              <ul className="footer_item_ul">
                <li className="MVP_BOXING">HELP</li>
                <li className="footer_item_li">
                  <Link to="/Partnership">Partnership</Link>
                </li>
                <li className="footer_item_li">
                  <Link to="/Inquiries">Inquiries</Link>
                </li>
                <li className="footer_item_li">
                  <Link to="/Support">Support</Link>
                </li>
                <li className="footer_item_li">
                  <Link to="/Sitemap">Sitemap</Link>
                </li>
                <li className="footer_item_li">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer_item">
              <ul className="footer_item_ul">
                <li className="MVP_BOXING">LEGAL</li>
                <li className="footer_item_li">
                  <Link to="/Privacy_Policy">Privacy Policy</Link>
                </li>
                <li className="footer_item_li">
                  <Link to="/Terms_of_use">Terms of Use</Link>
                </li>
                <li className="footer_item_li">
                  <Link to="/Advertise_With_Us">Advertise With Us</Link>
                </li>
                <li className="footer_item_li">
                  <Link to="/Cookie_Policy">Cookie Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer_item">
              <ul className="footer_item_ul">
                <li className="MVP_BOXING">INITIATIVES</li>
                <li className="footer_item_li">
                  <Link
                    target="_blank"
                    className="footer_item_a"
                    to="https://massonfoundation.com"
                  >
                    Masson Foundation
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="footer_item_fight">
              <li
                className="hdr-social-icons"
                style={{ float: "none", fontSize: 40 }}
              >
                <a
                  target="_blank"
                  href="http://www.facebook.com/pages/MVP-Boxing/135461625286?ref=ts"
                  title="Facebook"
                >
                  <i
                    className="fab fa-facebook-f"
                    aria-hidden="true"
                    style={{ border: "1px solid grey", color: "white" }}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/manny_masson"
                  title="Instagram"
                >
                  <i
                    className="fab fa-instagram"
                    aria-hidden="true"
                    style={{ border: "1px solid grey", color: "white" }}
                  />
                </a>
                <a
                  target="_blank"
                  href="http://twitter.com/mvpboxing"
                  title="Twitter"
                >
                  <i
                    className="fa-brands fa-x-twitter"
                    style={{ border: "1px solid grey", color: "white" }}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/user/MassonLLC"
                  title="Youtube"
                >
                  <i
                    className="fab fa-youtube"
                    aria-hidden="true"
                    style={{ border: "1px solid grey", color: "white" }}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@mvpboxing"
                  title="TikTok"
                >
                  <i
                    className="fa-brands fa-tiktok"
                    aria-hidden="true"
                    style={{ border: "1px solid grey", color: "white" }}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
                  title="linkedin"
                >
                  <i
                    className="fab fa-linkedin-in"
                    aria-hidden="true"
                    style={{ border: "1px solid grey", color: "white" }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="row_line_line">
            <div className="row_line" />
          </div>
          <div className="footer_contend_socialicon">
            <div className="footer_text">
              <p className="footer_text_top">
                <Link to="/" className="footer-home-link">
                  MVPBOXING.COM
                </Link>{" "}
                Masson Media Ventures, LLC. ©2025 All Rights Reserved.
              </p>
              <p className="footer_text_button">
                Use of This Site Constitutes Acceptance of Our Terms of Use and
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="footer-section" className="d-block d-md-none d-md-none">
        <div id="footer-button" className="bg-black">
          <div className="row nomargin brdr-red">
            <div className="dropdown col-12 text-center">
              <div className="header-country-selector">
                <select className="vodiapicker_footer_1">
                  <option
                    value="en_lt"
                    className="test"
                    data-thumbnail="assets/img/wold.jpg"
                  >
                    LATIN AMERICA
                  </option>
                  <option
                    value="es"
                    className="test"
                    data-thumbnail="assets/img/España.jpg"
                  >
                    España
                  </option>
                  <option
                    value="en"
                    className="test"
                    data-thumbnail="assets/img/Latin America.jpg"
                  >
                    UNITED STATES
                  </option>
                  <option value="au" data-thumbnail="assets/img/Brazil.jpg">
                    BRASIL
                  </option>
                  <option value="uk" data-thumbnail="assets/img/Russia.jpg">
                    RUSSIA
                  </option>
                  <option value="cn" data-thumbnail="assets/img/Poland.jpg">
                    POLAND
                  </option>
                  <option value="de" data-thumbnail="assets/img/Germany.jpg">
                    GERMANY
                  </option>
                  <option value="dk" data-thumbnail="assets/img/China.jpg">
                    CHINA
                  </option>
                  <option value="fr" data-thumbnail="assets/img/Japan.jpg">
                    JAPAN
                  </option>
                  <option value="gr" data-thumbnail="assets/img/Korea.jpg">
                    SOUTH KOREA
                  </option>
                </select>

                <div className="lang-select">
                  <div className="country-manu">
                    <button className="btn-select-footer_1" value=""></button>
                    <img className="down-arrow-footer_1" src={img3} />
                  </div>
                  <div className="b-footer_1">
                    <ul id="footer_country_selector_1"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_contend">
          <div className="footer_item">
            <ul className="footer_item_ul">
              <li className="MVP_BOXING">MVP BOXING</li>
              <li className="footer_item_li">
                <Link to="/about" className="footer_item_a">
                  About
                </Link>
              </li>
              <li className="footer_item_li">
                <Link to="/community" className="footer_item_a">
                  Community
                </Link>
              </li>
              <li className="footer_item_li">
                <Link to="/launchingsoons" className="footer_item_a">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <ul className="footer_item_ul">
              <li className="MVP_BOXING">HELP</li>
              <li className="footer_item_li">
                <Link to="/Partnership" className="footer_item_a">
                  Partnership
                </Link>
              </li>
              <li className="footer_item_li">
                <Link to="/Inquiries" className="footer_item_a">
                  Inquiries
                </Link>
              </li>
              <li className="footer_item_li">
                <Link to="/Sitemap" className="footer_item_a">
                  Sitemap
                </Link>
              </li>
              <li className="footer_item_li">
                <Link to="/contact-us" className="footer_item_a">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <ul className="footer_item_ul">
              <li className="MVP_BOXING">LEGAL</li>
              <li className="footer_item_li">
                <Link to="/Privacy_Policy" className="footer_item_a">
                  Privacy Policy
                </Link>
              </li>
              <li className="footer_item_li">
                <Link to="/Terms_of_use" className="footer_item_a">
                  Terms of Use
                </Link>
              </li>
              <li className="footer_item_li">
                <Link to="/Advertise_With_Us" className="footer_item_a">
                  Advertise With Us
                </Link>
              </li>
              <li className="footer_item_li">
                <Link to="/Cookie_Policy" className="footer_item_a">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row_line_line">
          <div className="row_line" />
        </div>
        <div className="footer_text">
          <p className="footer_text_top">
            {" "}
            © 2025 Masson Media Ventures, LLC. All Rights Reserved.
          </p>
        </div>
        <div className="hdr-social-icons">
          <a
            target="_blank"
            href="http://www.facebook.com/pages/MVP-Boxing/135461625286?ref=ts"
            title="Facebook"
          >
            <i className="fab fa-facebook-f mvpicon" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/manny_masson/"
            title="Instagram"
          >
            <i className="fab fa-instagram mvpicon" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="http://twitter.com/mvpboxing"
            title="Twitter"
          >
            <i className="fa-brands fa-x-twitter mvpicon" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/user/MassonLLC"
            title="Youtube"
          >
            <i className="fab fa-youtube mvpicon" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@mvpboxing"
            title="TikTok"
          >
            <i className="fa-brands fa-tiktok mvpicon" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
            title="TikTok"
          >
            <i className="fab fa-linkedin-in mvpicon" />
          </a>
        </div>
      </section>

      <script
        async
        type="module"
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
      ></script>
    </footer>
  );
}
