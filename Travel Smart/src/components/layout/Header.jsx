import { useEffect } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const search = () => {
    // Define your search function logic here
    console.log("Search button clicked");
  };


  return (
    <section className="hero-header global-header">
      <header className="sticky">
        <div className="container">
          <div className="header">
           <Link to="/"> <h1 className="primary-color">
              <i className="logo alternate-logo"></i>
              TravelSmart
            </h1></Link>
            <nav>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#packages">Tours</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
};

export default memo(Header);
