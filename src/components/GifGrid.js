import React from 'react'
import { useFetchGifs } from '../hocks/useFetchGifs';
//import React, { useEffect, useState } from 'react'

import GifGridItem from './GitGridItem';
//import PropTypes from 'prop-types'

const GifGrid = ( { category } ) => {

  const { data: images, loading } = useFetchGifs( category );
  
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category} </h3>

      {loading && (
        <p className="animate__animated animate__flash">Cargando...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem
            key={img.id}
            {...img}
            //usando el string operator . mandamos el obj ya desestructurado, en este caso paso 3 propiedades .
          />
        ))}
      </div>
    </>
  );
}

/* GitGridd.propTypes = {

} */

export default GifGrid
