import "./carousel.styles.scss";

import { useState } from "react";
import { useSelector } from "react-redux";

import { selectProjectList } from "../../store/projects/projects.selector";

import Carousel from "react-bootstrap/Carousel";

const CarouselBootstrap = () => {
  const projectList = useSelector(selectProjectList);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {projectList.map((data, idx) => {
        const { imageUrl, name } = data;
        return (
          <Carousel.Item interval={1000} key={idx}>
            <img className="d-block w-100" src={imageUrl} alt="First slide" />
            <Carousel.Caption>
              <h3 className="text-dark">{name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselBootstrap;
