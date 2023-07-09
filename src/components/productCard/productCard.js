import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductCard({ data }) {
  const { id, name, image } = data;
  const { countryname } = useParams()
  const navigate = useNavigate()
  console.log(countryname);
  return (
    <div onClick={() => {
      navigate(`/country/${name}`)
      
    }} className="product-container">
      <div className="bat-card bat-border-1">
        <img
          src={image}
          alt="batman"
        />
        <div className="bat-flex bat-flx-dir-col bat-justify-between bat-m-r-8px">
          <div className="fs-1r bold-500">{name}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
