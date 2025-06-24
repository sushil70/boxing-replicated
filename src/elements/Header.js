import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

import img1 from "./img/avder.png";
import img2 from "./img/gold_crown.png";
// import img4 from './img/arrow-down-icon-3101-thumb.png'

import GLOBALS from "./Globals";
import Loader from "./Loader";

export default function Header() {
  const [loading, setLoading] = useState(false);
  const [menudata, setMenudata] = useState([]);
  const [showsubmenu, setShowsubmenu] = useState(true);
  const [activeVal, setActiveVal] = useState("menu");
  const [mobilemenudata, setMobilemenudata] = useState([]);
  const navigate = useNavigate();

  const mouseOutEvent = () => {
    setShowsubmenu(false);
  };

  const setMouseOverEvent = () => {
    setShowsubmenu(true);
  };

  const menuToggle = () => {
    if (activeVal == "menu") {
      setActiveVal("menu active");
    } else {
      setActiveVal("menu");
    }
  };

  const closeHamburgerMenu = () => {
    $("#mySidenav").hide();
    $("body").css("overflow", "auto");
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);
      let apiUrl = "mainmenu";
      const url = GLOBALS.API_BASE_URL + apiUrl;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setMenudata(json.data);
      } catch (error) {
        console.error(error.message);
      }

      let mobileapiUrl = "mobilemainmenu";
      const mobileurl = GLOBALS.API_BASE_URL + mobileapiUrl;
      try {
        const response = await fetch(mobileurl);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setMobilemenudata(json.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();

    var langArray = [];
    var i = 0;
    let selectedCountry = "";
    $(".vodiapicker option").each(function () {
      var img = $(this).attr("data-thumbnail");
      var text = this.innerText;
      var value = $(this).val();
      if (i == 0) {
        var item =
          '<li><img src="' +
          img +
          '" alt="" value="' +
          value +
          '"/><span>' +
          text +
          "</span></li>";
        selectedCountry =
          '<li><img src="' + img + '" alt="" value="' + value + '"/></li>';
      } else {
        var item =
          '<li><img src="' +
          img +
          '" alt="" value="' +
          value +
          '"/><span>' +
          text +
          "</span></li>";
      }
      i++;
      langArray.push(item);
    });

    $("#a").html(langArray);

    //Set the button value to the first el of the array
    $(".btn-select").html(selectedCountry);
    $(".btn-select").attr("value", "en");

    //change button stuff on click
    $("#a li").click(function () {
      var img = $(this).find("img").attr("src");
      var value = $(this).find("img").attr("value");
      var text = this.innerText;
      var item = '<li><img src="' + img + '" alt="" /></li>';
      $(".btn-select").html(item);
      $(".btn-select").attr("value", value);
      $(".b").toggle();
      $(".b").removeClass("active");
    });

    $(".btn-select,.down-arrow").click(function () {
      var __selector = $(".b");
      if (!__selector.hasClass("active")) {
        __selector.show();
        __selector.addClass("active");
      } else {
        __selector.hide();
        __selector.removeClass("active");
      }
    });

    $(".mid-menu").click(function () {
      $("#mySidenav").show();
    });

    //check local storage for the lang
    var sessionLang = localStorage.getItem("lang");
    if (sessionLang) {
      //find an item with value of sessionLang
      var langIndex = langArray.indexOf(sessionLang);
      $(".btn-select").html(langArray[langIndex]);
      $(".btn-select").attr("value", sessionLang);
    } else {
      var langIndex = langArray.indexOf("ch");
      console.log(langIndex);
      $(".btn-select").html(langArray[langIndex]);
      //$('.btn-select').attr('value', 'en');
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/search?keyword=" + event.target.keyword.value + "&p=1");
    $("#mySidenav").hide();
    $("body").css("overflow", "auto");
    // Handle form data and navigation here
  };

  return (
    <header
      id="msite-header"
      className="navigation-block order-1 d-block"
      style={{ backgroundColor: "#fff" }}
    >
      <nav className="navbar navbar-expand-md bg-light navbar-light pt0 pb0 px-0">
        <div className="header-bg w-100 mhead">
          <button
            id="menuToggle"
            className="low-menu"
            style={{ display: "none" }}
          >
            <svg className="menu-bars" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6C3 5.44772 3.44772 5 4 5L14 5C14.5523 5 15 5.44771 15 6C15 6.55228 14.5523 7 14 7L4 7C3.44772 7 3 6.55228 3 6Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 18C3 17.4477 3.44772 17 4 17L10 17C10.5523 17 11 17.4477 11 18C11 18.5523 10.5523 19 10 19L4 19C3.44772 19 3 18.5523 3 18Z"
                fill="black"
              />
            </svg>
          </button>

          <Link to="/" className="navbar-brand p-0 m-0">
            <img
              className="logo_image ls-is-cached lazyloaded"
              data-src="https://www.mvpboxing.com/assets/images/logo-new.png"
              alt="MVP BOXING"
              src="https://www.mvpboxing.com/assets/images/logo-new.png"
            />
          </Link>

          <div className="action">
            <a href="#" className="Watch" onClick={menuToggle}>
              WATCH
            </a>

            <div className={activeVal}>
              <div className="watch_totle_contend">
                <div className="watch_contend_one">
                  <h6 className="watch_text">WATCH</h6>
                  <div className="watch_line"></div>
                  <a href="#">
                    <h6 className="how_to_watch">HOW TO WATCH</h6>
                  </a>
                </div>
                <div className="watch_contend_two">
                  <div className="watch_contend_two_left">
                    <p className="watch_p_heding">STREAMING SERVICES</p>
                    <a href="https://www.netflix.com/">
                      <p className="watch_p">NETFLIX</p>
                    </a>
                    <a href="https://www.dazn.com/en-US/welcome">
                      <p className="watch_p">DAZN</p>
                    </a>
                    <a href="https://plus.espn.com/?om-navmethod=top%20nav">
                      <p className="watch_p">ESPN+</p>
                    </a>
                    <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root">
                      <p className="watch_p">PRIME VIDEO</p>
                    </a>
                  </div>
                  <div className="watch_contend_two_right">
                    <p className="watch_p_heding">LISTEN</p>
                    <a href="https://www.siriusxm.com">
                      <p className="watch_p">SiriusXM</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/launchingsoon" className="fightclub" id="fightclub_id">
            <p className="fightclub_text">FIGHT</p>
            <img className="m_latter" src={img2} />
            <p className="fightclub_text_club">CLUB</p>
          </Link>

          <Link to="/launchingsoons">
            <img className="avder_img" src={img1} />
          </Link>
        </div>

        <div id="mySidenav" className="sidenav">
          <div className="login-section">
            <button
              type="button"
              id="login-btn"
              className="btn btn-outline-dark pl16"
            >
              <i className="fa fa-sign-in fa-lg" aria-hidden="true" />
              Sign in
            </button>
            <a className="closebtn">
              <i className="fas fa-chevron-up" aria-hidden="true" />
            </a>
            --&gt;
            <form id="search_form_head" onSubmit={handleSubmit} method="get">
              <div className="row mx-0 ">
                <input
                  type="text"
                  name="keyword"
                  autoComplete="off"
                  id="search_keyword"
                  className="inpt left col-12 px-3"
                  placeholder="Search"
                />
                <span className="search_area_separator" />
                <button
                  type="submit"
                  id="search_submit_btn"
                  formaction="/search"
                  className="buton"
                />
              </div>
            </form>
          </div>
          <div className="menu-section">
            <div
              id="mainMenuHeader"
              className="white-font menu-txt fhv fwb fnt20"
            >
              MVPBOXING.com
              <span className="f-right">
                <i className="fa fa-minus sitesym" aria-hidden="true" />
              </span>
            </div>
            <div id="boxing-menu-list" className="menu-list">
              {mobilemenudata.map((item, k) => {
                let menuUrl =
                  item.link_to == "custom" ? item.custom_url : item.menu_alias;
                return (
                  <>
                    {item.submenu.length < 1 ? (
                      <div key={k} className="menu-list">
                        <Link
                          className="main-menu first text-truncate menu-item"
                          title={item.name}
                          to={menuUrl}
                          onClick={closeHamburgerMenu}
                        >
                          <div className="menu-txt fnt15">{item.name}</div>
                        </Link>
                      </div>
                    ) : (
                      <div className="menu-list">
                        <div className="menu-txt fnt16">
                          {item.name}
                          <span className="f-right">
                            <i className="fa fa-plus sym" aria-hidden="true" />
                          </span>
                        </div>
                        <ul className="submenu" style={{ display: "none" }}>
                          {item.submenu.map((submenuItem, s) => {
                            let submenuUrl =
                              submenuItem.link_type == "custom"
                                ? submenuItem.custom_url
                                : submenuItem.menu_alias;
                            return (
                              <li key={s} className>
                                <Link
                                  className="menu-item"
                                  title={submenuItem.title}
                                  to={submenuUrl}
                                  onClick={closeHamburgerMenu}
                                >
                                  <div className="fnt14 inner-menu inner-menu-link text-truncate">
                                    {submenuItem.title}
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            <hr className="MuiDivider-root-879" />
            {/* <div id="nav-img" class="ml-3"> */}
            <div id="MassonMenu" className="white-font menu-txt cis fwb fnt20">
              <svg width={20} height={24} xmlns="http://www.w3.org/2000/svg">
                <rect
                  fill="none"
                  id="canvas_background"
                  height={26}
                  width={22}
                  y={-1}
                  x={-1}
                />
                <path
                  id="svg_1"
                  fill="white"
                  d="m9.172,22.4019l-9.6071,-22.4019l4.2521,0c0,0 4.231,8.71331 5.159,10.6288c0.033,0.0688 0.104,0.1128 0.18,0.1128c0.076,0 0.147,-0.044 0.18,-0.1122c0.935,-1.9145 5.189,-10.6294 5.189,-10.6294l4.241,0l-9.594,22.4019z"
                />
              </svg>
              MASSON
            </div>
            {/* </div> */}
            <div id="menu-footer">
              <div className="menu-list">
                <Link
                  className="main-menu text-truncate"
                  title="Privacy Policy"
                  to="/Privacy_Policy"
                  onClick={closeHamburgerMenu}
                >
                  <div className="menu-txt fnt14">Privacy Policy</div>
                </Link>
              </div>
              <div className="menu-list">
                <Link
                  className="main-menu text-truncate"
                  title="Terms of Use"
                  to="/Terms_of_use"
                  onClick={closeHamburgerMenu}
                >
                  <div className="menu-txt fnt14">Terms of Use</div>
                </Link>
              </div>
              <div className="menu-list">
                <Link
                  className="main-menu text-truncate"
                  title="Advertise With Us"
                  to="/Advertise_With_Us"
                  onClick={closeHamburgerMenu}
                >
                  <div className="menu-txt fnt14">Advertise With Us</div>
                </Link>
              </div>
              <div className="menu-list">
                <Link
                  className="main-menu text-truncate"
                  title="Cookie Policy"
                  to="/Cookie_Policy"
                  onClick={closeHamburgerMenu}
                >
                  <div className="menu-txt fnt14">Cookie Policy</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      @media (min-width: 768px) {\n          #formNav{\n              display: none !important;\n          }\n      }\n      @media (max-width: 768px) {\n          #menus{\n              display: none !important;\n          }\n      }\n      #menus ul li a {\n          font-size: 16px;\n      }\n      #menus ul li {\n          border-left: none !important;\n          margin-right: 10px;\n          font-weight: 100;\n      }\n      @media (max-width: 781px){\n          .low-menu\n          {\n              display: inline-block !important;\n          }\n      }@media (min-width: 780px){\n          .low-menu\n          {\n              display: none;\n          }\n      }\n      @media (max-width: 1079px){\n          .red-menu {\n              display: block;\n          }\n          #main_menu_list {\n              display: none !important;\n          }\n      }\n      @media  (min-width: 1079px){\n          .red-menu {\n              display: none;\n          }\n          #main_menu_list {\n              display: block;\n          }\n      }\n  ",
        }}
      />
      <div id="menus">
        <div
          className="menus_mid"
          style={{
            height: 45,
            paddingTop: 11,
            margin: "0px auto",
            textAlign: "center",
          }}
        >
          <div
            className="red-menu"
            style={{ width: 50, marginTop: "-8px", marginLeft: "-5px" }}
          >
            <nav className="navbar navbar-expand-md bg-light navbar-light pt0 pb0 px-0">
              <div className="menus_mid w-100 mhead">
                <button
                  id="menuToggle"
                  className="mid-menu"
                  onclick="document.getElementById('menuToggle').click();"
                >
                  <svg className="menu-bars" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 6C3 5.44772 3.44772 5 4 5L14 5C14.5523 5 15 5.44771 15 6C15 6.55228 14.5523 7 14 7L4 7C3.44772 7 3 6.55228 3 6Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 18C3 17.4477 3.44772 17 4 17L10 17C10.5523 17 11 17.4477 11 18C11 18.5523 10.5523 19 10 19L4 19C3.44772 19 3 18.5523 3 18Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div id="mySidenav" className="sidenav">
                <div className="menu-section">
                  <div
                    id="mainMenuHeader"
                    className="white-font menu-txt fhv fwb fnt20"
                  >
                    MVPBOXING.com
                    <span className="f-right">
                      <i className="fa fa-minus sitesym" aria-hidden="true" />
                    </span>
                  </div>
                  <div id="boxing-menu-list" className="menu-list"></div>
                  <hr className="MuiDivider-root-879" />
                  {/* <div id="nav-img" class="ml-3"> */}
                  <div
                    id="MassonMenu"
                    className="white-font menu-txt cis fwb fnt20"
                  >
                    <svg
                      width={20}
                      height={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="none"
                        id="canvas_background"
                        height={26}
                        width={22}
                        y={-1}
                        x={-1}
                      />
                      <path
                        id="svg_1"
                        fill="white"
                        d="m9.172,22.4019l-9.6071,-22.4019l4.2521,0c0,0 4.231,8.71331 5.159,10.6288c0.033,0.0688 0.104,0.1128 0.18,0.1128c0.076,0 0.147,-0.044 0.18,-0.1122c0.935,-1.9145 5.189,-10.6294 5.189,-10.6294l4.241,0l-9.594,22.4019z"
                      />
                    </svg>
                    MASSON
                  </div>
                  {/* </div> */}
                  <div id="menu-footer">
                    <div className="menu-list">
                      <Link
                        className="main-menu text-truncate"
                        title="Privacy Policy"
                        to="/Privacy_Policy"
                      >
                        <div className="menu-txt fnt14">Privacy Policy</div>
                      </Link>
                    </div>
                    <div className="menu-list">
                      <Link
                        className="main-menu text-truncate"
                        title="Terms of Use"
                        to="/Terms_of_use"
                      >
                        <div className="menu-txt fnt14">Terms of Use</div>
                      </Link>
                    </div>
                    <div className="menu-list">
                      <Link
                        className="main-menu text-truncate"
                        title="Advertise With Us"
                        to="/Advertise_With_Us"
                      >
                        <div className="menu-txt fnt14">Advertise With Us</div>
                      </Link>
                    </div>
                    <div className="menu-list">
                      <Link
                        className="main-menu text-truncate"
                        title="Cookie Policy"
                        to="/Cookie_Policy"
                      >
                        <div className="menu-txt fnt14">Cookie Policy</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <ul
            id="main_menu_list"
            className="mb-0"
            style={{ display: "inline-flex" }}
          >
            {menudata.map((item, i) => {
              return (
                <>
                  {item.submenu.length < 1 ? (
                    <li key={i} className="menuHover">
                      <Link
                        target={item.is_new_tab == 1 ? "_blank" : ""}
                        to={item.menu_alias}
                        id="home_1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ) : (
                    <li
                      key={i}
                      className="menuHover"
                      onMouseOver={setMouseOverEvent}
                    >
                      <Link
                        id="news_2"
                        onmouseenter="return getMenuData(this);"
                      >
                        {item.name}
                      </Link>
                      {showsubmenu ? (
                        <ul key={"dropdown" + i} className="news-dropdown">
                          <li className id="HEADLINES">
                            <div className="left menus-set">
                              <div className="left main_menu_label">
                                {item.drop_menu_title}
                              </div>
                              <div className="left arrow-right" />
                              {item.sidebar_menu.map((sidebarItem, m) => {
                                let menuUrl =
                                  sidebarItem.link_to == "custom"
                                    ? sidebarItem.custom_url
                                    : sidebarItem.url;
                                return (
                                  <div key={"sidebarmenu" + m}>
                                    <Link
                                      to={menuUrl}
                                      title="BOXING & MMA News"
                                      onClick={mouseOutEvent}
                                    >
                                      {sidebarItem.menu_name}
                                    </Link>
                                    <i
                                      className="fa fa-chevron-right"
                                      aria-hidden="true"
                                    />
                                  </div>
                                );
                              })}
                            </div>
                            <div className="left menu_partiton_border" />
                            {item.submenu.map((submenuItem, j) => {
                              return (
                                <>
                                  <div key={j} className="left">
                                    <div className="left main_menu_label">
                                      {submenuItem.title}
                                    </div>
                                    <div className="left arrow-right" />
                                    <div
                                      className="image-main-frame"
                                      style={{ height: 179 }}
                                    >
                                      <div className="frame-image">
                                        <Link
                                          target={
                                            submenuItem.is_new_tab == 1
                                              ? "_blank"
                                              : ""
                                          }
                                          to={submenuItem.slug}
                                          onClick={mouseOutEvent}
                                        >
                                          <img
                                            alt
                                            className=" lazyloaded"
                                            height={145}
                                            data-src={submenuItem.image}
                                            width={205}
                                            src={submenuItem.image}
                                          />
                                        </Link>
                                      </div>
                                      <div className="frame-caption">
                                        {submenuItem.caption}
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </li>
                        </ul>
                      ) : (
                        <></>
                      )}
                    </li>
                  )}
                </>
              );
            })}
          </ul>
          <div className="clear" />
        </div>
      </div>
      <div className="container nopadding" id="formNav">
        <div className="row nomargin">
          <ul className="nav w-100" style={{ justifyContent: "space-between" }}>
            <li className="nav-item">
              <Link
                className="nav-link text-truncate main-menu pl-1"
                title="NEWS"
                to="/news-boxing"
              >
                NEWS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-truncate main-menu "
                title="ESPAÑOL"
                to="/espanol-boxeo"
              >
                ESPAÑOL
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-truncate main-menu pr-1"
                title="betting"
                to="https://sportsbook.fanduel.com/boxing"
              >
                BETTING
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-truncate main-menu pr-1"
                title="FIGHT ODDS"
                to="/launchingsoons"
              >
                FIGHT CLUB
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
