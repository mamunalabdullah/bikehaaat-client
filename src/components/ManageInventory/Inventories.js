import React, { useState, useEffect} from 'react';
import { InventoriesHook } from '../Hook/InventoriesHook';
import Inventory from './Inventory';
import './Inventories.css';

const Inventories = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/inventories?page=${page}&size=${size}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventories(data))
    },[page, size])

    useEffect(() => {
        const url = `http://localhost:5000/inventoryCount`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    },[]);

    return (
        <div className="container py-3">
            <div className='row'>
                {
                    inventories.map( inventory => <Inventory key={inventory._id} inventory={inventory} />)
                } 
            </div>
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()].map(number => <button className={page === number ? 'selected' : ''} onClick={() => setPage(number)}>{number}</button>)
                }
            
            </div>
            
        </div>
    );
};

export default Inventories;