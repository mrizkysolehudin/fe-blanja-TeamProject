import React from "react";
import iconStar from "../../../assets/icons/icon-star.svg";
import { getFirstThreeWords } from "../../../utils/getThreeWords";
import { Link } from "react-router-dom";

const Card = ({ item = { image: "" } }) => {
  return (
    <div id="card">
      <div className="content " style={{ marginLeft: "6%" }}>
        <div className="card h-100">
          <Link to={`/product/${item?.id}`} className="stretched-link"></Link>

          <img
            crossOrigin="anonymous"
            src={item?.image}
            className="card-img-top"
            alt="cardImage"
            style={{ height: "136px" }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h4 className="card-title text-dark" style={{ fontSize: "16px" }}>
              {getFirstThreeWords(item?.name)}
            </h4>
            <div>
              <h5 className="text-danger metropolis-b">$ {item?.price}</h5>
              <span className="card-text text-secondary text-break">
                {item?.store_name}
              </span>
              <div>
                <img src={iconStar} alt="Star" />
                <img src={iconStar} alt="Star" />
                <img src={iconStar} alt="Star" />
                <img src={iconStar} alt="Star" />
                <img src={iconStar} alt="Star" />
                <span className="text-secondary">(10)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
