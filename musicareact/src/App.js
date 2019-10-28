import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Informacion from "./components/Informacion";

function App() {

    const [ artista, agregarArtista ] = useState( '' );
    const [ letra, agregarLetra ] = useState( [] );
    const [ info, agregarInfo ] = useState( {} );

    const consultarApiLetra = async ( val ) => {
        const { artista, cancion } = val;
        const url = `https://api.lyrics.ovh/v1/${ artista }/${ cancion }`;

        agregarArtista( artista );
        const resultado = await axios( url );
        agregarLetra( resultado.data.lyrics );
    };

    const consultarApiInfo = async () => {

        if ( artista ) {
            const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${ artista }`;
            const resultado = await axios( url );
            agregarInfo( resultado.data.artists[ 0 ] );
        }
    };

    useEffect( () => {
        consultarApiInfo().then();
    }, [ artista ] );


    return (
        <Fragment>
            <Formulario consultarApiLetra={ consultarApiLetra } />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Informacion info={ info } />
                    </div>
                    <div className="col-md-6">
                        <Cancion letra={ letra } />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
