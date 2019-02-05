import React from 'react';

class TableRow extends React.Component {
   
    
    handleRemove = (id) => {
        this.props.deleteProduct(id)
    }
    render() {
        console.log(this.props,"render")
        return (
            <tr>
                <td >{this.props.product.name}</td>
                <td >{this.props.product.id}</td>
                <td>{this.props.product.price}</td>
                <td><button onClick={() => this.props.deleteProduct(this.props.product.id)}>Remove</button></td>
            </tr>
        )

    }
}

export default TableRow