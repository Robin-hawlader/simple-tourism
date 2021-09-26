import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let names = [];
    for (let place of cart) {
        total = total + place.cost;
        names.push(place)
    }
    const count = props.cart.length;


    //travel calculation cart----------------
    return (
        <div>
            <h5 className='text-light text-center bg-dark'>Calculation Cost</h5>
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td>Place Select:</td>
                        <td>{count}</td>
                    </tr>
                    <tr>
                        <td>Total cost:</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
            {
                names.map(name => <p key={name.id} className='bg-dark text-light rounded text-center w-75'>Name: {name.placeName}</p>)
            }
        </div>
    );
};

export default Cart;