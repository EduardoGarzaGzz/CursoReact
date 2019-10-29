import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from './cryptomonedas.png';
import Formulario from "./components/Formulario";
import Spinner from "./components/Spinner";
import Cotizacion from "./components/Cotizacion";

function App() {

    const [ moneda, guardarMoneda ] = useState( '' );
    const [ criptomoneda, guardarCriptomoneda ] = useState( '' );
    const [ cargando, guardarCargando ] = useState( false );
    const [ resultado, guardarResultado ] = useState( {} );

    useEffect( () => {
        const cotizarCriptomoneda = async () => {
            if ( moneda === '' || criptomoneda === '' ) return null;

            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptomoneda }&tsyms=${ moneda }`;
            guardarCargando( true );

            const resultado = await axios.get( url );
            guardarCargando( false );
            guardarResultado( resultado.data.DISPLAY[ criptomoneda ][ moneda ] );
        };

        cotizarCriptomoneda().then();
    }, [ criptomoneda, moneda ] );

    const componente = ( cargando ) ? <Spinner /> : <Cotizacion resultado={ resultado } />;

    return (
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <img src={ image } alt="Imagen criptomonedas" className="logotipo" />
                </div>
                <div className="one-half column">
                    <h1>Cotiza criptomonedas al instante</h1>

                    <Formulario guardarMoneda={ guardarMoneda } guardarCriptomoneda={ guardarCriptomoneda } />

                    { componente }
                </div>
            </div>
        </div>
    );
}

export default App;
