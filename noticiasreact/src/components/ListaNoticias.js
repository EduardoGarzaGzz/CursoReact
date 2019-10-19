import React from 'react';
import Noticia from "./Noticia";

const ListaNoticias = ( { listNews } ) => (
    <div className="row">
        { listNews.map( news => ( <Noticia key={news.url} news={news} /> ) ) }
    </div>
);

export default ListaNoticias;
