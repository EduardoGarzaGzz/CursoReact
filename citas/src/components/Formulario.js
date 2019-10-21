import React, { Fragment, useState } from 'react';

function Formulario( { crearCita } ) {

    const initState = {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    };

    const [ cita, guardarCita ] = useState( initState );

    const handleChange = ( event ) => {
        guardarCita( {
            ...cita,
            [ event.target.name ]: event.target.value
        } );
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();
        event.stopPropagation();

        crearCita( cita );
        guardarCita( initState );
    };

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form onSubmit={ handleSubmit }>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    value={ cita.mascota }
                    onChange={ handleChange } />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    value={ cita.propietario }
                    onChange={ handleChange } />

                <label>Fecha</label>
                <input
                    type="date"
                    className="u-full-width"
                    name="fecha"
                    value={ cita.fecha }
                    onChange={ handleChange } />

                <label>Hora</label>
                <input
                    type="time"
                    className="u-full-width"
                    name="hora"
                    value={ cita.hora }
                    onChange={ handleChange } />

                <label>Síntomas</label>
                <textarea className="u-full-width" name="sintomas" onChange={ handleChange } value={ cita.sintomas } />

                <button type="submit" className="button-primary u-full-width">Agregar</button>
            </form>
        </Fragment>
    );
}

export default Formulario;
