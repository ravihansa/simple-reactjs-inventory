import React, { useState } from 'react';
import Split from 'react-split';
import ShoppingCart from './ShoppingCart';
import { inventoryData } from './../data/inventory';


const InventoryList = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {

        setCartItems(prev => {
            const exists = prev.find(i => i.name === item.name);
            if (exists) {
                return prev.map(i =>
                    i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    return (
        <>
            <Split
                className="split-container"
                sizes={[50, 50]}
                minSize={300}
                gutterSize={10}
                direction="horizontal"
            >
                <div className="panel-content">
                    <h2>Inventory List</h2>
                    <div>
                        <ul>
                            {inventoryData.map(item => (
                                <li key={item.name}>
                                    <h3>{item.name}</h3>
                                    <p>Price {item.unitPrice}</p>
                                    <p>Quantity {item.quantity}</p>
                                    <button onClick={() => addToCart(item)}>Add {item.name}  </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="panel-content">
                    <ShoppingCart cartItems={cartItems}></ShoppingCart>
                </div>
            </Split>
        </>
    );
}

export default InventoryList;
