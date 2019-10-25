import React, { Fragment, useState } from 'react';
import Error from "./Error";

function Pregunta( props ) {

    const { guardarPresupuesto, guardarPreguntaRespuesta, guardarRestante } = props;

    const [ cantidad, guardarCantidad ] = useState( 0 );
    const [ error, guardarError ] = useState( false );

    const handleOnChange = ( event ) => {
        guardarCantidad( parseInt( event.target.value, 10 ) );
    };

    const handleOnSubmit = ( event ) => {
        event.preventDefault();
        event.stopPropagation();


        if ( cantidad <= 0 || isNaN( cantidad ) ) {
            guardarError( true );
            return 0;
        }

        guardarError( false );
        guardarPresupuesto( cantidad );
        guardarRestante( cantidad );
        guardarPreguntaRespuesta( false );
    };

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { ( error ) ? <Error msg="El presupuesto es incorrecto" /> : null }

            <form onSubmit={ handleOnSubmit }>
                <input type="number"
                       className="u-full-width"
                       placeholder="Agrega tu presupuesto"
                       onChange={ handleOnChange } />

                <input type="submit"
                       className="button-primary u-full-width"
                       value="Definir presupuesto" />
            </form>
        </Fragment>
    );
}

export default Pregunta;
