import React from "react";
import "./blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faHeartCircleBolt,
  faSuitcaseMedical,
  faUserNurse,
  faTruckMedical,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const doctor = <FontAwesomeIcon className="doctor-icon" icon={faUserDoctor} />;
  const heartCircleBolt = <FontAwesomeIcon icon={faHeartCircleBolt} />;
  const suitcaseMedical = <FontAwesomeIcon icon={faSuitcaseMedical} />;
  const userNurse = <FontAwesomeIcon icon={faUserNurse} />;
  const truckMedical = <FontAwesomeIcon icon={faTruckMedical} />;
  const premiumHospital = <FontAwesomeIcon icon={faHospital} />;

  return (
    <div className="about">
      <h4>What we stand for?</h4>
      <h1 className="about-main-title">
        Our <span>Core Values</span>
      </h1>
      <div className="values-container">
        <div className="value">
          <div>{doctor}</div>
          <div>
            <h3>Doctor you choose</h3>
            <p>
              Donec porta tellus ac purus eleifend faucibus sit amet eu eros.
              Donec cursus laoreet felis blandit facilisis.
            </p>
          </div>
        </div>
        <div className="value">
          <div>{heartCircleBolt}</div>
          <div>
            <h3>Your Healthcare</h3>
            <p>
              Donec porta tellus ac purus eleifend faucibus sit amet eu eros.
              Donec cursus laoreet felis blandit facilisis.
            </p>
          </div>
        </div>
        <div className="value">
          <div>{suitcaseMedical}</div>
          <div>
            <h3>Always there for you</h3>
            <p>
              Donec porta tellus ac purus eleifend faucibus sit amet eu eros.
              Donec cursus laoreet felis blandit facilisis.
            </p>
          </div>
        </div>
        <div className="value">
          <div>{userNurse}</div>
          <div>
            <h3>Nursing Stuff</h3>
            <p>
              Donec porta tellus ac purus eleifend faucibus sit amet eu eros.
              Donec cursus laoreet felis blandit facilisis.
            </p>
          </div>
        </div>
        <div className="value">
          <div>{truckMedical}</div>
          <div>
            <h3>Emergency services</h3>
            <p>
              Donec porta tellus ac purus eleifend faucibus sit amet eu eros.
              Donec cursus laoreet felis blandit facilisis.
            </p>
          </div>
        </div>
        <div className="value">
          <div>{premiumHospital}</div>
          <div>
            <h3>Premium facilities</h3>
            <p>
              Donec porta tellus ac purus eleifend faucibus sit amet eu eros.
              Donec cursus laoreet felis blandit facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
