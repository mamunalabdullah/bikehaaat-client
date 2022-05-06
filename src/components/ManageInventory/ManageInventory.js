import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { InventoriesHook } from '../Hook/InventoriesHook';
import './ManageInventory.css';

const ManageInventory = ({inventory}) => {
    const [user] = useAuthState(auth);
    const { name, picture, quantity, supplier, price } = inventory;
    const navigate = useNavigate();

    const edit = id =>{
        navigate(`/editInventory/${id}`);
    }
    const [inventories, setInventories] = InventoriesHook([]);

    const deleteHandle = id => {
        const proceed = window.confirm("Are you want to delete inventory ?");
        toast('Inventory delete');
        if(proceed){
            const url = `https://evening-wave-77311.herokuapp.com/inventory/${id}`;
            fetch(url, {
               method: 'DELETE' 
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const rest = inventories.filter(inventory => inventory._id !== id);
                setInventories(rest);
            })
        }
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <img className='border rounded-circle custom-size' src={picture} alt="" />
            </td>
            <td>{price} $</td>
            <td>{supplier}</td>
            <td>
                <div className="d-flex">
                    <button onClick={()=>edit(inventory._id)} className='btn'><span className='edit-btn'><FaEdit /> </span></button>
                    <button onClick={()=>deleteHandle(inventory._id)} className='btn'><span className='delete-btn'><AiFillDelete /></span></button>
                </div>
            </td>
        </tr>
    );
};

export default ManageInventory;