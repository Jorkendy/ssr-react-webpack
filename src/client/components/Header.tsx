import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { MenuLinks } from "../../routes";
const Header = () => {
  return (
    <Fragment>
      {MenuLinks.map((menu, index) => (
        <Link key={index} to={menu.url}>
          {menu.menuText}
        </Link>
      ))}
    </Fragment>
  );
};

export default Header;
