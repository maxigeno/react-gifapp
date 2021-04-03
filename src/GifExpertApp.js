//SNIPPER PARA COMPONENTE COMPLETO RAFCP

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () =>{

  //const categories = [ 'Boca', 'River', 'Independiente' ];
  //usestate nos da  una funcion para poder editar el array en este caso que react detecta cuando se llama la funcion para renderizar solo ese pedacito
  const [categories, setCategories] = useState( ["Boca"] );

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory   setCategories={ setCategories } />
      <hr/>

      <ol>
            {
              categories.map( (category)  => (
                <GifGrid 
                    //el key que ponemos es para que react sepa que el estamos iterando
                    key ={ category }
                    category = {category}
                  />
              ))
            }  
        </ol>
    </>
  )
};

export default GifExpertApp;
