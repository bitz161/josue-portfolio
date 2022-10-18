import "./introduction.styles.scss";
import firstImage from "../../assets/images/firstImage.jpg";
const Introduction = () => {
  return (
    <div className="introduction-container">
      <section className="introduction-details">
        <h1>Josue Garcia II</h1>
        <h4>Front-end Developer</h4>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Dis nascetur
          parturient justo. Himenaeos nibh metus. Pretium primis condimentum.
          Adipiscing erat commodo. Tortor praesent arcu. Lobortis libero ut.
          Rhoncus mi.
        </p>
      </section>
      <section className="image-wrapper">
        <img src={firstImage} alt="" />
        <img src={firstImage} alt="" />
        <img src={firstImage} alt="" />
      </section>
    </div>
  );
};

export default Introduction;
