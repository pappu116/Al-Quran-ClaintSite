import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AyahsDetails from "./AyahsDetails/AyahsDetails";

const SurahDetails = () => {
  const { surahNumber } = useParams();
  const [ayahs, setAyahs] = useState([]);
  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setAyahs(data.data.ayahs);
        console.log(data.data.ayahs);
      });
  }, []);
  return (
    <div className="text-white">
      {ayahs.map((ayah, index) => (
        <AyahsDetails ayah={ayah} key={index + 1} />
      ))}
    </div>
  );
};

export default SurahDetails;
