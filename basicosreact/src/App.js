import React, {Fragment} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productos from "./components/Productos";


function App() {
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Header title='React basico' />

            <Productos />

            <Footer year={year} />
        </Fragment>
    );
}

export default App;
