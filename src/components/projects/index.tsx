import React, { useEffect, useRef } from "react";
import SectionWrapper from "../section-wrapper";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const ProjectSection = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <SectionWrapper>
      <div className="wrapper">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell bg-blue-50">1</div>
            <div className="carousel__cell bg-yellow-50">2</div>
            <div className="carousel__cell bg-red-50">3</div>
            <div className="carousel__cell bg-green-50">4</div>
            <div className="carousel__cell bg-orange-50">5</div>
            <div className="carousel__cell bg-purple-50">6</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
