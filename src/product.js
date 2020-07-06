import React from 'react';

class Product extends React.Component {
    constructor() {
        super();
    }
    ID = 0;
    Name = '';
    Colour = 'red'

    render() {
        return (
            <li>{this.ID} - {this.Name} - {this.Colour}</li>
        )
    }
}

export default Product;