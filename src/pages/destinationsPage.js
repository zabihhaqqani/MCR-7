import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../data';
import { useDataContext } from '../components/context/context';
import { useState } from 'react';

const DestinationsPage = () => {
  const { destinations } = useParams();

  const continents = data.continents;

  const navigate = useNavigate()
  const destinationsPlaces = continents.flatMap((continent) =>
    continent.countries.flatMap((country) =>
      country.name === destinations ? country.destinations : []
    )
  );


  return (
    
    <div>
      <h5>Top Places in {destinations} for your next holiday</h5>
      
      {destinationsPlaces?.map(data=>(
      <div key={data?.id}>
        <div
          onClick={() => navigate(`/destination/${data?.name}`)}
        
          className="product-container"
        >
          <div className="bat-card bat-border-1">
            <img src={data?.image} alt="batman" />
            <div className="bat-flex bat-flx-dir-col bat-justify-between bat-m-r-8px">
              <div className="fs-1r bold-500">{data?.name}</div>
            </div>
            {/* <a
              href={`/destinations/${data?.name}`}
              target="_blank"
              rel="noopener noreferrer"
             
            >
              {data?.name}
            </a> */}
          </div>
        </div>
      </div>
    ))}</div>
  )
}

export default DestinationsPage