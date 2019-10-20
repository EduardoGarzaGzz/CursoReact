import React, { Component } from 'react';
import { CategoriaConsumer } from "../context/CategoriaContext";
import { EventosConsumer } from "../context/EventosContext";

class Formulario extends Component {

    state = {
        nombre: '',
        categoria: ''
    };

    handleChange = ( event ) => {
        this.setState( {
            ...this.state,
            [ event.target.name ]: event.target.value
        } );
    };

    render() {
        return (
            <EventosConsumer>
                { ( val ) => {
                    return (
                        <form onSubmit={ ( event ) => {
                            event.preventDefault();
                            event.stopPropagation();

                            val.getEventos( this.state ).then();
                        } }>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por nombre o categoría
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de evento o cuidad"
                                        onChange={ this.handleChange } />
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        className="uk-select"
                                        name="categoria"
                                        onChange={ this.handleChange }>
                                        <option value="">--- Selecciona una categoría ---</option>
                                        <CategoriaConsumer>
                                            { ( val ) => {
                                                return (
                                                    val.categorias.map( categoria => (
                                                            <option key={ categoria.id } value={ categoria.id }
                                                                    data-uk-form-select>
                                                                { categoria.name_localized }
                                                            </option>
                                                        )
                                                    )
                                                )
                                            } }
                                        </CategoriaConsumer>
                                    </select>
                                </div>

                                <div>
                                    <input
                                        type="submit"
                                        className="uk-button uk-button-danger"
                                        value="Buscar eventos" />
                                </div>
                            </div>
                        </form>
                    );
                } }
            </EventosConsumer>
        );
    }
}

export default Formulario;
