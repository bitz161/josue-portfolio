import "./switch.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDarkmode } from "../../store/darkmode/darkmode.action";
import { selectCurrentTheme } from "../../store/darkmode/darkmode.selector";
const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const darkmodeStatus = useSelector(selectCurrentTheme);

  const handleChange = () => {
    dispatch(setDarkmode(!darkmodeStatus));
  };

  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider" onClick={handleChange} />
    </label>
  );
};

export default ThemeSwitch;
