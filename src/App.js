import { useSelector } from "react-redux";
import { AppContainer } from "./App.jsx";
import AboutMe from "./routes/about/about.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component";
import Projects from "./routes/projects/projects.component.jsx";
import {
  selectCurrentTheme,
  selectDarkMode,
  selectLightMode,
} from "./store/darkmode/darkmode.selector.js";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  //false = lightmode
  //true = darkmode

  const usingTheme = useSelector(selectCurrentTheme);
  const darkmodeTheme = useSelector(selectDarkMode);
  const lightmodeTheme = useSelector(selectLightMode);
  return (
    <AppContainer currentTheme={usingTheme ? darkmodeTheme : lightmodeTheme}>
      <Navigation />
      <Home />
      <Projects />
      <AboutMe />
    </AppContainer>
  );
}

export default App;
