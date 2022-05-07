import React, { useState } from 'react';
import { AiFillDelete, AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
// import { GrView } from 'react-icons/gr';
// import { FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { InventoriesHook } from '../Hook/InventoriesHook';
import './ManageInventory.css';
import { CustomHook } from '../CustomHook/CustomHook';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const ManageInventory = ({inventory}) => {

    const [user] = useAuthState(auth);
    // console.log(user);
    const { name, picture, quantity, supplier, price } = inventory;
    const navigate = useNavigate();
    const edit = id =>{
        navigate(`/editInventory/${id}`);
    }
    const handleQuantity = id =>{
        navigate(`/quantity/${id}`);
    }
    const handleView = id =>{
        navigate(`/view/${id}`)
    }

    const [products, setProducts] = CustomHook();
    const [count, setCount] =useState(0);
    const {id} = useParams();

    const deleteHandle = id =>{
        const proceed = window.confirm('Are you sure delete this product?');
        if(proceed){
            const url = `https://evening-wave-77311.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                toast("Delete this Product")
                const rest = products.filter(product => product._id !== id);
                setProducts(rest);
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
                <div className="d-flex justify-content-around">
                    <button onClick={()=>edit(inventory._id)} className='btn btn-warning'><span><FaEdit /> </span></button>
                    <button onClick={()=>deleteHandle(inventory._id)} className='btn btn-danger'><span><AiFillDelete /></span></button>
                    <button onClick={()=>handleQuantity(inventory._id)} className='btn'><span className='delivery-success'><AiOutlineDeliveredProcedure /></span></button>
                </div>
            </td>
        </tr>
    );
};

export default ManageInventory;