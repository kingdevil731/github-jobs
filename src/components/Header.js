import React from "react";
// Icons, Svgs
import Settings from "../imgs/svgs/settings.svg";

const Header = () => {
  return (
    <header className="header">
      <p>Github Jobs</p>
      <img src={Settings} alt="Settings Icon" />
    </header>
  );
};

export default Header;
