import React from "react";
import PropTypes from "prop-types";
import "./ProyectCard.css";

const ProyectCard = (props) => {
  return (
    <div className="cardProyect">
      <div className="titleProyect">
        <h3>Card 1</h3>
      </div>

      <div className="barProyect">
        <div className="emptybarProyect" />
        <div className="filledbarProyect" />
      </div>

      <div className="desProyect">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          temporibus ea provident beatae unde blanditiis libero cumque eligendi
          ut, odio perferendis nobis eaque, illum eius fugiat distinctio vero
          aperiam esse.
        </span>
      </div>
    </div>
  );
};

ProyectCard.propTypes = {};

export default ProyectCard;
