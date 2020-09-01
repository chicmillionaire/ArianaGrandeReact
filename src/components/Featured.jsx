import React from 'react';
import Carousel from './Carousel';
import Timer from './Timer'
import "../styles/Featured.css";

const Featured = () => {
  return (
    <div style = {{position: 'relative'}}>
      
      <Carousel/>
        
        <div className='artist_name'>
          
          <div className='wrapper'>            
            Ariana Grande
          </div>

        </div>
      <Timer/>
    </div>
  );
};

export default Featured;