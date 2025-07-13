import React from 'react';

const ShoppingCart = ({ cartItems }) => {


    return (
        <>
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.length ? (
                    <>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.name}>
                                    <h3>{item.name}</h3>
                                    <p>Price {item.unitPrice}</p>
                                    <p>Quantity {item.quantity}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                ) :
                    (<p>No items in the cart.</p>)}

            </div>
        </>

    );
}

export default ShoppingCart;
