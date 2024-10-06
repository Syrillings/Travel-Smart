import Contact from "./layout/Contact";
import About from "./layout/About";
import Packages from "./layout/Packages";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const header = document.querySelector("header");
    const logotext = document.querySelector(".header h1 ");
    const logo = document.querySelector(".logo");

    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav");

    menuBtn.onclick = (e) => {
      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");
      menuBtn.setAttribute(
        "class",
        isOpen ? "fa-solid fa-xmark": "fa-solid fa-bars"
      );
    };

    nav.onclick = (e) => {
      menuBtn.setAttribute("class", "fa-solid fa-bars");
    };

    window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 0);
      logotext.classList.toggle("primary-color", window.scrollY > 0);
      logo.classList.toggle("alternate-logo", window.scrollY > 0);
    });
  }, []);
  return (
    <>
      <section className="hero-header">
        <header>
          <div className="container">
            <div className="header">
              <h1>
                <i className="logo"></i>
                TravelSmart
              </h1>
              <i className="fa-solid fa-bars"  id="menu-btn"></i>
              <nav id="nav">
                <ul >
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
        <section id="hero">
          <div className="container">
            <h2>Discover Your Next Adventure</h2>
            <h3>
              Explore the best tours, destinations, and activities worldwide
            </h3>
            <div>
              <a href="#explore">
                <button id="hero-button" type="button">
                  Explore
                </button>
              </a>
            </div>
          </div>
        </section>
      </section>
      <Packages />
      <About />
      <Contact />
    </>
  );
};

export default Home;
