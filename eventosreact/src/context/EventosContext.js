import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext( undefined, undefined );
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    token = 'EF6BUAGELBS6Z4FCB3ZW';

    state = {
        eventos: []
    };

    getEventos = async ( busqueda ) => {
        const url = `https://www.eventbriteapi.com/v3/events/search/?q=${ busqueda.nombre }&categories=${ busqueda.categoria }&sort_by=date&locale=es_ES`;

        const eventos = await axios( {
            method: 'get',
            url,
            headers: [
                { 'Authorization': `Bearer ${ this.token }` }
            ]
        } );

        console.log( eventos );
    };

    render() {
        return (
            <EventosContext.Provider
                value={ {
                    eventos: this.state.eventos,
                    getEventos: this.getEventos
                } }>
                { this.props.children }
            </EventosContext.Provider>
        );
    }
}

export default EventosProvider;
