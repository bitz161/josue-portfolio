import "./hamburger.styles.scss";

const Hamberger = ({ setSidebar, sidebar }) => {
  const handleChange = () => setSidebar(!sidebar);
  return (
    <label htmlFor="check" className="bar">
      <input id="check" type="checkbox" />

      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom" onClick={handleChange}></span>
    </label>
  );
};

export default Hamberger;
