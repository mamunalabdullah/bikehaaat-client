import React from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { InventoriesHook } from '../Hook/InventoriesHook';
import ManageInventory from './ManageInventory';

const InventoryList = () => {
    const [inventories] = InventoriesHook();
    return (
        <div className="container">
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map(inventory => <ManageInventory
                            key = {inventory._id}
                            inventory = {inventory}
                        />)
                    }
                </tbody>
            </Table>
        </div>

    );
};

export default InventoryList;