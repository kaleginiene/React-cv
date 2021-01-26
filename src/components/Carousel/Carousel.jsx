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
  FrontEndAdvanced,
} from "../../assets/certificates";
import "./Carousel.css";

function CarouselBoot() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={FrontEnd} alt="Front-End" />
        <Carousel.Caption>
          <h4>Front-End</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={JsBasics} alt="JavaScript Basics" />
        <Carousel.Caption>
          <h4>JavaScript Basics</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Digital}
          alt="Digital skills training"
        />
        <Carousel.Caption>
          <h4>Digital skills training</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={WebDev} alt="Web development" />
        <Carousel.Caption>
          <h4>Web development</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Wgt}
          alt="Women Go Tech: 'Atrask technologijas!'"
        />
        <Carousel.Caption>
          <h4>Atrask technologijas</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Agile}
          alt="Agile project management"
        />
        <Carousel.Caption>
          <h4>Agile project management</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FrontEndAdvanced}
          alt="Front-end intermediate course"
        />
        <Carousel.Caption>
          <h4>Front-end intermediate course</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBoot;
