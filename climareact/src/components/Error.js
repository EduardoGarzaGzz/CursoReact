import React from 'react';

const Error = ( { mensaje } ) => (
    <div className="card-panel red darken-4 error col s12">
        { mensaje }
    </div>
);

export default Error;
