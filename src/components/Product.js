import React, { Component } from 'react';

class Product extends Component {
    showInfoProduct(product) {
        if (product.status) {
            return (
                <h3>
                    ID: {product.id}<br />
                    Price: {product.price}đ<br />
                    Status: {product.status ? 'Active' : "Pending"}
                </h3>
            )
        }
    };
    render() {
        var a = 5;
        var name = 'Quang';
        var b = 7;
        var product = {
            id: 1,
            name: 'iphone 7 plus',
            price: 15000000,
            status: true
        };

        return (
            <div className='ml-30'>
                <h2>
                    a = {a}<br />
                    b = {b}<br />
                    a + b = {a + b}
                </h2>
                <div>
                    Name: {name}
                    {this.showInfoProduct(product)}
                    <br />
                    <hr />
                </div>
            </div>
        );
    }
}

export default Product;
