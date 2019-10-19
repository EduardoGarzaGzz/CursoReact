import React, { Component } from 'react';

class Formulario extends Component {

    state = {
        category: ''
    };

    componentDidMount() {
        this.setState( {
            category: 'general'
        } )
    }

    handleChange = ( event ) => {
        this.setState( {
            category: event.target.value
        }, () => {
            this.props.changeCategory( this.state.category );
        } );
    };

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Categorías de noticias</h2>

                        <div className="input-field col s12">
                            <select onChange={ this.handleChange }>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;
