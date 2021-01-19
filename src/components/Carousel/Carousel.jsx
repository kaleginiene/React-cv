import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FrontEnd,
  JsBasics,
  Digital,
  WebDev,
  Wgt,
  Agile,
} from "../../assets/certificates";
import "./Carousel.css";

function CarouselBoot() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={FrontEnd} alt="Front-End" />
        <Carousel.Caption>
          <h3>Front-End</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={JsBasics} alt="JavaScript Basics" />
        <Carousel.Caption>
          <h3>JavaScript Basics</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Digital}
          alt="Digital skills training"
        />
        <Carousel.Caption>
          <h3>Digital skills training</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={WebDev} alt="Web development" />
        <Carousel.Caption>
          <h3>Web development</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Wgt}
          alt="Women Go Tech: 'Atrask technologijas!'"
        />
        <Carousel.Caption>
          <h3>Atrask technologijas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Agile}
          alt="Agile project management"
        />
        <Carousel.Caption>
          <h3>Agile project management</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBoot;
