import React from "react";
import "./navbar.css";
import {
  InstagramOutlined,
  InstagramFilled,
  LinkedinFilled,  // Import LinkedIn icon
} from "@ant-design/icons"; 
import { SocialIcon } from "react-social-icons";
import { ReactComponent as Grid } from "../../assets/navgrid.svg";
import ReactGA from "react-ga";

const Navbar = () => {
  const handleInsta = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Instagram",
    });
    window.open("https://www.instagram.com/electroverse.comm_tsec/");
  };
  
  const handleLinkedIn = () => {  // Handler for LinkedIn
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "LinkedIn",
    });
    window.open("https://www.linkedin.com/company/electroverse-comm-tsec/");  // Replace with your LinkedIn URL
  };

  const handleEmail = () => {  // Handler for Email
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Email",
    });
    window.location.href = "mailto:electroversecommtsec@gmail.com";  // Replace with your email address
  };

  const handleYt = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Youtube",
    });
    window.open("https://youtube.com/@tsecextcdepartment8926?si=j3gMjCncdu4-wag0");
  };

  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("https://unstop.com/hackathons/tech-a-thon-hardware-hackathon-thadomal-shahani-engineering-college-tsec-mumbai-850796");
  };

  const handleScroll = (id) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `${id} - Navbar`,
    });
    if (window.location.pathname !== "/") {
      window.open(`/${id}`, "_self");
    }
    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  if (window.location.hash) handleScroll(window.location.hash);

  const handleNavMenuClick = () => {
    ReactGA.event({
      category: "Menu",
      action: "click",
      label: `Mobile Menu Grid`,
    });
    const NavVisiblility = document.querySelector(".parent-navbar-mobile");
    NavVisiblility.classList.toggle("navbar-open-mobile");

    const NavDropVisibility = document.querySelector(".navbar-open");
    NavDropVisibility.classList.toggle("navbar-close-mobile");
  };

  return (
    <React.Fragment>
      <div className="parent">
        <div className="components">
          <div className="title" onClick={() => window.open("/", "_self")}>
            <img src="/images/diamond.webp" className="logo" alt="Logo" />
            Tech-A-Thon
            <div className="socials">
              <div className="insta">
                <SocialIcon
                  onClick={handleInsta}
                  network="instagram"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
              <div className="linkedin">
                <SocialIcon
                  onClick={handleLinkedIn}  // LinkedIn click handler
                  network="linkedin"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
              <div className="yt">
                <SocialIcon
                  onClick={handleYt}
                  network="youtube"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
              <div className="email-icon">
                <SocialIcon
                  onClick={handleEmail}  // Email click handler
                  network="email"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
            </div>
          </div>

          <ul>
            <li>
              <p onClick={() => window.open("/", "_self")}>Home</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#agenda")}>Agenda</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#schedule")}>Schedule</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#faqs")}>FAQs</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#contact")}>Contact</p>
            </li>
          </ul>
          <div className="last">
            <h2 className="register">
              <p onClick={handleRegisterClick}> Register</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="main-navbar-mobile">
        <div className="parent-navbar-mobile">
          <div className="components-mobile">
            <div
              className="title-mobile"
              onClick={() => window.open("/", "_self")}
            >
              <img src="/images/diamond.webp" width="30vw" alt="logo" />
              Tech-A-Thon
            </div>
            <div className="last-mobile">
              <h2 className="register-mobile">
                <a href="https://unstop.com/hackathons/tech-a-thon-hardware-hackathon-thadomal-shahani-engineering-college-tsec-mumbai-850796" target="_blank">
                  Register
                </a>
              </h2>
            </div>
            <Grid
              className="navbar-menu-mobile"
              onClick={handleNavMenuClick}
            />
          </div>
          <div className="navbar-open navbar-close-mobile">
            <ul>
              <li>
                <p onClick={() => window.open("/", "_self")}>Home</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#agenda")}>Agenda</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#schedule")}>Schedule</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#faqs")}>FAQs</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#contact")}>Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;