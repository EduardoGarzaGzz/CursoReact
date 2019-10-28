import React, { Fragment } from 'react';

/**
 * @return {null}
 */
function Cancion( props ) {

    const { letra } = props;

    if ( letra.length === 0 ) return null;

    return (
        <Fragment>
            <h2>Letra de la cancion</h2>
            <p className="letra">{ letra }</p>
        </Fragment>
    );
}

export default Cancion;
