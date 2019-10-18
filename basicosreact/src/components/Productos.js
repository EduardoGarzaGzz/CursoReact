import React, {Component, Fragment} from 'react';
import Producto from "./Producto";

class Productos extends Component {

    state = {
        products: [
            {id: 1, name: 'Camisa ReactJS', precio: 30},
            {id: 2, name: 'Camisa VueJS', precio: 30},
            {id: 3, name: 'Camisa AngularJS', precio: 30},
            {id: 4, name: 'Camisa Node.JS', precio: 30}
        ]
    };

    render() {
        const {products} = this.state;

        return (
            <Fragment>
                <h4>Lista de camisas</h4>
                {products.map(value => (<Producto key={value.id} product={value} />))}
            </Fragment>
        );
    }
}

export default Productos;
