import React, { Component } from 'react';
import axios from 'axios';

const CategoriaContext = React.createContext( undefined, undefined );
export const CategoriaConsumer = CategoriaContext.Consumer;

class CategoriaProvider extends Component {

    token = 'EF6BUAGELBS6Z4FCB3ZW';

    state = {
        categorias: []
    };

    componentDidMount() {
        this.getCategorias().then();
    }

    getCategorias = async () => {
        const url = `https://www.eventbriteapi.com/v3/categories/?token=${ this.token }&locale=es_ES`;

        let categoria = await axios.get( url );

        this.setState({
            categorias: categoria.data.categories
        })
    };

    render() {
        return (
            <CategoriaContext.Provider
                value={ {
                    categorias: this.state.categorias
                } }>
                { this.props.children }
            </CategoriaContext.Provider>
        );
    }
}

export default CategoriaProvider;
