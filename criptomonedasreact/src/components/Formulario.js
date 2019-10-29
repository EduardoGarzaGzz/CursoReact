import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Criptomoneda from "./Criptomoneda";
import Error from "./Error";

function Formulario( props ) {

    const { guardarMoneda, guardarCriptomoneda } = props;

    const [ criptomonedas, guardarCriptomonedas ] = useState( [] );
    const [ monedaCotizar, guardarMonedaCotizar ] = useState( '' );
    const [ criptoCotizar, guardarCriptoCotizar ] = useState( '' );
    const [ error, guardarError ] = useState( false );

    useEffect( () => {

        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get( url );
            guardarCriptomonedas( resultado.data.Data );
        };

        consultarAPI().then();
    }, [] );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        event.stopPropagation();

        if ( monedaCotizar === '' || criptoCotizar === '' ) {
            guardarError( true );
            return null;
        }

        guardarError( false );
        guardarMoneda( monedaCotizar );
        guardarCriptomoneda( criptoCotizar );
    };

    const componente = ( error ) ? <Error mensaje="Ambos campos son obligatorios" /> : null;

    return (
        <form onSubmit={ handleSubmit }>
            { componente }
            <div className="row">
                <label>Elige tu moneda</label>
                <select
                    onChange={ ( e ) => guardarMonedaCotizar( e.target.value ) }
                    className="u-full-width">
                    <option value="">- Elige tu moneda -</option>
                    <option value="USD">Dolar</option>
                    <option value="MXN">Peso mexicano</option>
                    <option value="GBP">Libra</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>

            <div className="row">
                <label>Elige tu criptomoneda</label>
                <select
                    onChange={ ( e ) => guardarCriptoCotizar( e.target.value ) }
                    className="u-full-width">
                    <option value="">- Elige tu criptomoneda -</option>
                    { criptomonedas.map( c => ( <Criptomoneda key={ c.CoinInfo.Id } criptomoneda={ c } /> ) ) }
                </select>
            </div>

            <input type="submit" className="button-primary u-full-width" value="Calcular" />
        </form>
    );
}

export default Formulario;
