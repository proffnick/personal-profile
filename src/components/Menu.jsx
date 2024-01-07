import React from "react";
import { General } from "../context/general";

export const Menu = () => {

  const { active, setMenu } = React.useContext(General);

  const sections  = ["welcome", "about-me", "my-projects", "contact"];

  React.useEffect(() => {

    const handleScroll = () => {
      if(!window) return;
      const welcome   = document.getElementById("welcome");
      const about     = document.getElementById("about-me");
      const project   = document.getElementById("my-projects");
      const contact   = document.getElementById("contact");

      const scrollPosition = window.scrollY + window.innerHeight;

      /*
        const top     = mySectionRef.current.offsetTop;
        const height  = mySectionRef.current.offsetHeight;
      */

      if (scrollPosition > welcome.offsetTop && scrollPosition < welcome.offsetTop + welcome.offsetHeight) {
        // The scroll is within the section, trigger your action here
        setMenu('welcome');
      }

      if (scrollPosition > about.offsetTop && scrollPosition < about.offsetTop + about.offsetHeight) {
        // The scroll is within the section, trigger your action here
        setMenu('about-me');
      }
      if (scrollPosition > project.offsetTop && scrollPosition < project.offsetTop + project.offsetHeight) {
        // The scroll is within the section, trigger your action here
        setMenu('my-projects');
      }
      if (scrollPosition > contact.offsetTop && scrollPosition < contact.offsetTop + contact.offsetHeight) {
        // The scroll is within the section, trigger your action here
        setMenu('contact');
      }

    }

    if(!window) return;



    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);


  return(
    <ul className="nav flex-row flex-lg-column justify-content-center mt-4 mt-lg-5 px-0 px-lg-5" id="menu">
      <li className={`nav-item text-end ${active === 'welcome'?'active-menu':''}`}>
        <a onClick={() => setMenu('welcome')} className="nav-link" href="#welcome">Welcome</a>
      </li>
      <li className={`nav-item text-end ${active === 'about-me'?'active-menu':''}`}>
        <a onClick={() => setMenu('about-me')} className="nav-link" href="#about-me">About</a>
      </li>
      <li className={`nav-item text-end ${active === 'my-projects'?'active-menu':''}`}>
        <a onClick={() => setMenu('my-projects')} className="nav-link" href="#my-projects">Projects</a>
      </li>
      <li className={`nav-item text-end ${active === 'contact'?'active-menu':''}`}>
        <a onClick={() => setMenu('contact')} className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  )
}