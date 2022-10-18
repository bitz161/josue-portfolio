import {
  IntroductionDetails,
  ImageWrapper,
  IntroductionContainer,
  GlitchWrapper,
} from "./introduction.styles.jsx";
import firstImage from "../../assets/images/firstImage.jpg";
const Introduction = () => {
  return (
    <IntroductionContainer>
      <IntroductionDetails>
        <GlitchWrapper>
          <h1 className="glitch" data-glitch="glitch">
            Josue Garcia II
          </h1>
        </GlitchWrapper>

        <hr />
        <h4>Front-end Developer</h4>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Dis nascetur
          parturient justo. Himenaeos nibh metus. Pretium primis condimentum.
          Adipiscing erat commodo. Tortor praesent arcu. Lobortis libero ut.
          Rhoncus mi.
        </p>
      </IntroductionDetails>
      <ImageWrapper>
        <img src={firstImage} alt="" />
        <img src={firstImage} alt="" />
        <img src={firstImage} alt="" />
      </ImageWrapper>
    </IntroductionContainer>
  );
};

export default Introduction;
