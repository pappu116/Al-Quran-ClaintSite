import React from "react";
import Navbar from "../../Shear/Navbar/Navbar";
import Quran from "../../../image/logo.png";
const HeaderMain = () => {
  const HandelClick = (e) => {
    const search = document.getElementById("search").value;
    console.log(search);
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <Navbar />
      <div className="image">
        <img
          src={Quran}
          alt=""
          style={{ height: "200px", margin: "20px 10px" }}
          className="img-fluid"
        />
        <br />
        <h1 className="color-brand">The Nobel Quran</h1>
      </div>
      <form action="">
        <input type="text" name="" id="search" />
        <button onClick={HandelClick} className="btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default HeaderMain;
