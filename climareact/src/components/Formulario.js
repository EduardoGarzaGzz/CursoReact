import React, { useState } from 'react';

const Formulario = ( { datosConsulta } ) => {

    const [ busqueda, guardarBusqueda ] = useState( {
        ciudad: '',
        pais: ''
    } );

    const handleChange = ( event ) => {
        guardarBusqueda( {
            ...busqueda,
            [ event.target.name ]: event.target.value
        } );
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();

        console.log( busqueda );
        datosConsulta( busqueda );
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={ handleChange } />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={ handleChange } name="pais">
                    <option value="">--- Selecciona un país ---</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    className="btn-large btn-block yellow accent-4"
                    value="Buscar clima" />
            </div>
        </form>
    );
};

export default Formulario;
