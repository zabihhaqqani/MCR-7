import React from "react";
import { data } from "../data";
import { useNavigate, useParams } from "react-router-dom";

const CountryPage = () => {
  const { countryname } = useParams();

  const continents = data?.continents?.filter(
    (data) => data?.name === countryname
  );

  const navigate = useNavigate();

  return (
    <div>
    <h5>Top Countries in {countryname} for your next holiday</h5>
      {continents?.map((data) =>
        data?.countries?.map((item) => (
          <div
          key={item?.id}
            onClick={() => {
              navigate(`/destinations/${item?.name}`);
            }}
            className="product-container"
          >
            <div className="bat-card bat-border-1">
              <img src={item?.image} alt="batman" />
              <div className="bat-flex bat-flx-dir-col bat-justify-between bat-m-r-8px">
                <div className="fs-1r bold-500">{item?.name}</div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CountryPage;
