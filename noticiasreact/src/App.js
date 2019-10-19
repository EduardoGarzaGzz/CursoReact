import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {

    state = {
        news: []
    };

    componentDidMount() {
        this.getNews();
    }

    getNews = async ( category = 'general' ) => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${ category }&apiKey=cdfb5164a0ef46cd86039b2539115cdc`;

        const resp = await fetch( url );
        const news = await resp.json();

        this.setState( {
            news: news.articles
        } );
    };

    render() {
        return (
            <Fragment>
                <Header title="Noticias react api" />

                <div className="container white contenedor-noticias">
                    <Formulario changeCategory={ this.getNews } />

                    <ListaNoticias listNews={ this.state.news } />
                </div>
            </Fragment>
        );
    }
}

export default App;
