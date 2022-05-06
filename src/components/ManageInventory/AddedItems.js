import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import axiosPrivate from '../axios/axiosPrivate';

const AddedItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        const getItems = async() => {
            const email = user?.email;
            const url =`https://evening-wave-77311.herokuapp.com/item?email=${email}`;
            try {
                const {data} = await axiosPrivate.get(url);
                setItems(data);
            } catch (error) {
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth)
                    navigate('/login')
                }
            }   
        }
        getItems()
    },[user])
    return (
        <div>
            {
                items.map(item => <div key={item._id} className='container py-5'>
                    <h2>total items: {items.length}</h2>
                    <div className="row">
                        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
                            <div className="card" style= {{width:18+"rem"}}>
                                <img src={item.picture} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p>Price: {item.price} | Quantity: {item.quantity}</p>
                                    <p>Supplier: {item.supplier}</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AddedItems;