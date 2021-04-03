//snipper rafc
import React, { useState } from 'react' ;
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {
  //necesito un suestate (estado ), para saber cuando la perosona modifica y escribe
  const [inputValue, setinputValue] = useState('');//paso string vacio xq sino me tira undefind el estado inicial

  const handleInputChange = (e) => {
    // le paso como nuevo estado el value del input
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //me aseguro que el inputvalue  no tenga espacios y que tenga mas de 2 caracteres para que no pueda guardar  cadenas vacias
    if (inputValue.trim.length < 2) {
      setCategories((cats) => [inputValue, ...cats]); //le agrego el valor nuevo que tiene input
      setinputValue(""); // y vuelve el input a cadena vacia
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );

};

AddCategory.propTypes = {
  //digo que mi compo. tiene que recibir como porp una funcion que es requerida y se llama setcategory
  setCategories: PropTypes.func.isRequired
};


