import React, { useState } from 'react';
import Error from "./Error";
import * as shortid from 'shortid';

function Formulario( props ) {

    const { guardarGasto, guardarCrearGasto } = props;

    const [ nombreGasto, setNombreGasto ] = useState( '' );
    const [ cantidadGasto, setCantidadGasto ] = useState( 0 );
    const [ error, setError ] = useState( false );

    const handleChange = ( event ) => {

        switch ( event.target.name ) {
            case 'nombreGasto':
                setNombreGasto( event.target.value );
                break;
            case 'cantidadGasto':
                setCantidadGasto( parseInt( event.target.value, 10 ) );
                break;
            default:
                return 0;
        }
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();
        event.stopPropagation();

        if ( cantidadGasto <= 0 || isNaN( cantidadGasto ) || nombreGasto === '' ) {
            setError( true );
            return null;
        }

        guardarGasto( {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        } );
        guardarCrearGasto(true);

        setError( false );
        setNombreGasto( '' );
        setCantidadGasto( '' );
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Agrega tus gastos aquí</h2>

            { ( error ) ? <Error msg="El presupuesto es incorrecto" /> : null }

            <div className="campo">
                <label>Nombre gasto</label>
                <input type="text"
                       name="nombreGasto"
                       className="u-full-width"
                       placeholder="Ej. trasporte"
                       onChange={ handleChange } />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input type="text"
                       name="cantidadGasto"
                       className="u-full-width"
                       placeholder="Ej. 300"
                       onChange={ handleChange } />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar gasto" />
        </form>
    );
}

export default Formulario;
