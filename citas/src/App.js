import React, { useState, useEffect, Fragment } from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

    let citasIniciales = JSON.parse( localStorage.getItem( 'citas' ) );

    if ( !citasIniciales ) {
        citasIniciales = [];
    }

    const [ citas, guardarCitas ] = useState( citasIniciales );

    const crearCita = ( cliente ) => {
        const nuevasCitas = [ ...citas, cliente ];

        guardarCitas( nuevasCitas );
    };

    const eliminarCita = ( index ) => {

        console.log( index );

        const listCitas = [ ...citas ];
        listCitas.splice( index, 1 );
        guardarCitas( listCitas );
    };

    useEffect( () => {
        let citasIniciales = JSON.parse( localStorage.getItem( 'citas' ) );

        if ( citasIniciales ) {
            localStorage.setItem( 'citas', JSON.stringify( citas ) );
        } else {
            localStorage.setItem( 'citas', JSON.stringify( [] ) );
        }

    }, [ citas ] );

    const titulo = ( Object.keys( citas ).length === 0 ) ? 'No hay citas' : 'Administrar las citas aquí';

    return (
        <Fragment>
            <h1>Administrador de pacientes</h1>

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario crearCita={ crearCita } />
                    </div>

                    <div className="one-half column">
                        <h2>{ titulo }</h2>
                        { citas.map( ( cita, index ) => (
                            <Cita key={ index } index={ index } cita={ cita } eliminarCita={ eliminarCita } />
                        ) ) }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
