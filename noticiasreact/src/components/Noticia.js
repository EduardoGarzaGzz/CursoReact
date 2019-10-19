import React from 'react';

const Noticia = ( { news } ) => {

    const { urlToImage, url, title, description, source } = news;

    const image = ( urlToImage ) ?
        <div className="card-image">
            <img src={ urlToImage } alt={ title } />
            <span className="card-title">{ source.name }</span>
        </div>
        : null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                { image }

                <div className="card-content">
                    <h3>{ title }</h3>
                    <p>{ description }</p>

                    <div className="card-action">
                        <a href={ url } target="_blank" className="waves-effect waves-light btn"
                           rel="noopener noreferrer">
                            Ver noticia completa
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Noticia;
