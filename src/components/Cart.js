import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteProduct}  from './../actions';


class Cart extends Component {
    
    render() {
      console.log(this.props)
        return (
            <div className="container">
                <div>
                    <h1>Cart</h1>
                    <table>
                        <tbody>                       
                        {
                            this.props.products.map((product,index)=>{
                                return(
                                    <tr key={index}>
                                    <td >{product.name}</td>
                                    <td >{product.id}</td>
                                    <td>{product.price}</td>
                                    <td><button onClick={() => this.props.deleteProduct(product.id)}>Remove</button></td>
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                   
                   
                </div>
            </div>
        );
    }
}


export default connect(({products,username})=>({products,username}),{deleteProduct})(Cart);