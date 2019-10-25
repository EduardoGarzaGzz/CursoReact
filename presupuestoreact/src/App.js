import React, { useState, useEffect } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

    const [ presupuesto, guardarPresupuesto ] = useState( 0 );
    const [ restante, guardarRestante ] = useState( 0 );
    const [ preguntaRespuesta, guardarPreguntaRespuesta ] = useState( true );
    const [ crearGasto, guardarCrearGasto ] = useState( false );
    const [ gasto, guardarGasto ] = useState( {} );
    const [ gastos, guardarGastos ] = useState( [] );

    useEffect( () => {
        if ( crearGasto ) {
            guardarGastos( [ ...gastos, gasto ] );
            guardarCrearGasto( false );

            guardarRestante( restante - gasto.cantidadGasto );
        }
    }, [ crearGasto, gasto, gastos ] );

    return (
        <div className="App container">
            <header>
                <h1>Gasto semanal</h1>
            </header>
            <div className="contenido-principal contenido">
                { ( preguntaRespuesta )
                    ? (
                        <Pregunta guardarPresupuesto={ guardarPresupuesto }
                                  guardarPreguntaRespuesta={ guardarPreguntaRespuesta }
                                  guardarRestante={ guardarRestante } />
                    )
                    : (
                        <div className="row">
                            <div className="one-half column">
                                <Formulario guardarGasto={ guardarGasto } guardarCrearGasto={ guardarCrearGasto } />
                            </div>
                            <div className="one-half column">
                                <Listado gastos={ gastos } />
                                <ControlPresupuesto presupuesto={ presupuesto } restante={ restante } />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default App;
