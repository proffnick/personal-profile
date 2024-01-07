import React from "react";
import logo from '../logo512.jpg';
import { Menu } from "../components/Menu";

const LeftSideBar = () => {

  return(
    <section className="col-12 col-lg-3 px-0 mb-5 mb-lg-0" id="left-menu">
      <div className="inner-left px-2 px-lg-3">
      <header className="p-3">
        <div className="text-center">
          <a href="./">
          <img src={logo} className="rounded-circle img img-thumbnail d-block mx-auto" style={{maxHeight: 90}} />
          </a>
          </div>
      </header>
      <Menu />
      </div>
    </section>
  )
}

export default LeftSideBar;