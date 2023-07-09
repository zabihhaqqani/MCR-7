import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../data';

const DetailPage = () => {
  const { places } = useParams();



  const  destinationDetail = data?.continents?.map(data=>data)

  console.log(destinationDetail);
  return <div>DetailPage</div>;
}

export default DetailPage