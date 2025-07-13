import React, { useState } from 'react';
import { inventoryData } from './../data/inventory';


const InventoryList = () => {

    return (
        <>
            <div style={{ height: '100%', overflow: 'auto' }}>
                <h2>Inventory List</h2>
                <div>
                    <ul>
                        {inventoryData.map(item => (
                            <li key={item.name}>
                                <h3>{item.name}</h3>
                                <p>Price {item.unitPrice}</p>
                                <p>Quantity {item.quantity}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default InventoryList;
