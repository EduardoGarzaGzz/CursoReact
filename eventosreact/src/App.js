import React from 'react';
import Header from "./components/Header";
import CategoriaProvider from "./context/CategoriaContext";
import Formulario from "./components/Formulario";
import EventosProvider from "./context/EventosContext";

function App() {
    return (
        <EventosProvider>
            <CategoriaProvider>
                <Header />

                <div className="uk-container">
                    <Formulario />
                </div>
            </CategoriaProvider>
        </EventosProvider>
    );
}

export default App;
