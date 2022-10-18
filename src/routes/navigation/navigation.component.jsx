import {
  NavContainer,
  PageIcon,
  NavLinksContainer,
  NavLinks,
} from "./navigation.styles.jsx";

import ThemeSwitch from "../../components/switch/switch.component";
import Hamburger from "../../components/hamburger/hamburger.component";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentTheme,
  selectDarkMode,
  selectLightMode,
} from "../../store/darkmode/darkmode.selector.js";
const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  //false = lightmode
  //true = darkmode

  const usingTheme = useSelector(selectCurrentTheme);
  const darkmodeTheme = useSelector(selectDarkMode);
  const lightmodeTheme = useSelector(selectLightMode);

  return (
    <NavContainer themecolor={usingTheme ? darkmodeTheme : lightmodeTheme}>
      <PageIcon themecolor={usingTheme ? darkmodeTheme : lightmodeTheme} />
      <NavLinksContainer>
        <NavLinks
          className={sidebar ? "enableSidebar" : "disableSidebar"}
          themecolor={usingTheme ? darkmodeTheme : lightmodeTheme}
        >
          <li>Project</li>
          <li>About_Me</li>
          <li>Contact_Me</li>
        </NavLinks>
        <ThemeSwitch />
        <Hamburger setSidebar={setSidebar} sidebar={sidebar} />
      </NavLinksContainer>
    </NavContainer>
  );
};

export default Navigation;
