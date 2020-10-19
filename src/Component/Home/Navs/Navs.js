import React, { useEffect, useState } from "react";
import Surah from "../Surah/Surah";

const Navs = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((result) => {
        setItem(result.data);
        console.log(result.data[1]);
      });
  }, []);
  return (
    <div className="container">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Surah
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Juz
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className=" text-white tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="row">
            {item.map((surah, index) => (
              <Surah surah={surah} key={index + 1} />
            ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default Navs;
