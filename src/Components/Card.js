import React from 'react';
import { mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';


function Card({locations}){
  console.log(locations)
  return(
    <div>
    <div className='Card'>
        <div className='Card--image-wrapper'>
          <img src = {locations.imageUrl} alt="" />
        </div>
        <div className='Card--content'>
          <p className='Card--location'>
            <Icon
              path= {mdiMapMarker}
              size={0.8}
              color='#F55A5A'
            />
            <span>{locations.location}</span>
            <a href={locations.googleMapsUrl}>View on Google Maps</a>
          </p>
          <h1 className='Card--title'>{locations.title}</h1>
          <p className='Card--dates'>{locations.startDate} - {locations.endDate}</p>
          <p className='Card--description'>
            {locations.description}
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Card;