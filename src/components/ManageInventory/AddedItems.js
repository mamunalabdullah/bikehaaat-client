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
            const email = user.email;
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
            <h2>total items: {items.length}</h2>
        </div>
    );
};

export default AddedItems;