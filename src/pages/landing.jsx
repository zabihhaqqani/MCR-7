import React from 'react'
import { data } from '../data';
import ProductCard from "../components/productCard/productCard"

function LandingPage() {
  return (
    <div>
      <h3>Welcome to Trip Advisor </h3>
        <h4>Top Continents fot your next holiday</h4>
        <ul>
          {data?.continents?.map(item => {
             return <ProductCard key={item?.id} data={item} />
          })}
        </ul>
    </div>
  );
}

export default LandingPage