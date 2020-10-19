import React from "react";
import { Link } from "react-router-dom";
import "./Surah.css";
const Surah = (props) => {
  const {
    name,
    englishName,
    englishNameTranslation,
    number,
    numberOfAyahs,
    revelationType,
  } = props.surah;
  return (
    <div className="col-md-4">
      <Link to={"/surah/" + number}>
        <div className="card sm-shadow mt-5">
          <div className="d-flex justify-content-between">
            <h6>{englishName}</h6>
            <p
              style={{
                background: "#00ACC1",
                padding: "0 5px",
                borderRadius: "5px",
              }}
            >
              {number}
            </p>
            <h5 className="icon">{name}</h5>
          </div>
          <p>{englishNameTranslation}</p>
        </div>
      </Link>
    </div>
  );
};

export default Surah;
