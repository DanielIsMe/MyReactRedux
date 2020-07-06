import React from 'react';
import Product from './product';

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {Products: props.Products};        
    }
    const listItems = this.state.Products.map((p) => 
            <Product ID={p.ID} Name={p.Name} Colour={p.Colour} />
        );
        
    };
    
    render() {
        return (<ul></ul>);    
    }    
}

function Products() {    
    return <div><ProductList /></div>
}

export default Products;
