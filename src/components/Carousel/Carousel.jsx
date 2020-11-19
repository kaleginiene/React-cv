import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FrontEnd,
  JsBasics,
  Digital,
  WebDev,
  Wgt,
} from "../../assets/certificates";
import "./Carousel.css";

function CarouselBoot() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={FrontEnd} alt="First slide" />
        <Carousel.Caption>
          <h3>Front-End</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={JsBasics} alt="Third slide" />
        <Carousel.Caption>
          <h3>JavaScript Basics</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Digital} alt="Third slide" />
        <Carousel.Caption>
          <h3>Digital skills training</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={WebDev} alt="Third slide" />
        <Carousel.Caption>
          <h3>Web development</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Wgt} alt="Third slide" />
        <Carousel.Caption>
          <h3>Atrask technologijas</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBoot;
