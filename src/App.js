import { useSelector } from "react-redux";
import { AppContainer } from "./App.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component";
import {
  selectCurrentTheme,
  selectDarkMode,
  selectLightMode,
} from "./store/darkmode/darkmode.selector.js";

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
    </AppContainer>
  );
}

export default App;
