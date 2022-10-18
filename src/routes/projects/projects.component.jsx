import CarouselBootstrap from "../../components/carousel/carousel.component";
import "./projects.styles.scss";

const Projects = () => {
  return (
    <div className="project-container" id="project-container">
      <h2>Projects</h2>
      <section className="carousel-container">
        <CarouselBootstrap />
      </section>
    </div>
  );
};

export default Projects;
