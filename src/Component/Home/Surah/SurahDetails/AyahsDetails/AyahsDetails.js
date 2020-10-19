import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BracetL from "../../../../../static/images/Bracket-L.png";
import BracetR from "../../../../../static/images/Bracket-R.png";
import "./Ayah.css";
const AyahsDetails = (props) => {
  const { surahNumber } = useParams();
  const [translate, setTranslate] = useState([]);
  const { text, number, numberInSurah } = props.ayah;
  useEffect(() => {
    fetch(
      `https://api.alquran.cloud/v1/ayah/${number}/editions/quran-uthmani,en.pickthall`
    )
      .then((res) => res.json())
      .then((result) => {
        setTranslate(result.data[1]);
        console.log(result.data[1].edition.englishName);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="ayah-area row ">
            <div className="col-md-4">
              <p style={{ marginTop: "-3%" }}>
                {surahNumber}:{numberInSurah}
              </p>
              <p>{translate.text}</p>
              <span> Mohammed Marmaduke William Pickthall</span>
            </div>
            <div className="col-md-8">
              <h4 className="ayahStyle d-flex justify-item-center  justify-content-end">
                <span className="d-flex justify-item-end mr-2">
                  <img
                    src={BracetL}
                    style={{ height: "20px" }}
                    className="img-fluid"
                    alt=""
                  />
                  <small>{numberInSurah}</small>
                  <img
                    src={BracetR}
                    style={{ height: "20px" }}
                    className="img-fluid"
                    alt=""
                  />
                </span>
                {text}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyahsDetails;
