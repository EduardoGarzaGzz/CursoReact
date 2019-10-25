import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Frase( { frase } ) {
    return (
        <div className="frase">
            <h1>{ frase.quote }</h1>
            <p>{ frase.author }</p>
        </div>
    );
}

function App() {

    const [ frase, obtenerFrase ] = useState( {} );

    const getApi = async () => {
        const resultado = await axios( 'https://breaking-bad-quotes.herokuapp.com/v1/quotes' );
        obtenerFrase( resultado.data[ 0 ] );
    };

    useEffect( () => {
        getApi().then();
    }, [] );

    return (
        <div className="contenedor">
            <Frase frase={ frase } />
            <button onClick={ getApi }>Generar nueva</button>
        </div>
    );
}

export default App;
