
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { SingleInventory } from '../Hook/SingleInventory';

const EditProduct = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [inventory, setInventory] = SingleInventory(id);
    const [user] = useAuthState(auth);
    console.log(user);
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const picture = event.target.picture.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;

        //     console.log(name, img, des, quantity, supplier, price);
        const url = `https://evening-wave-77311.herokuapp.com/inventory/${id}`
        console.log(url);
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                name, picture, description, quantity, supplier, price
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => setData(data));
        
        toast('Update successfully')
        event.target.reset();
        navigate('/inventoryList');

    }

    const Name = (e) => {
        const {name, ...rest}= inventory;
        const newName = e.target.value;
        const newProduct = {name: newName, ...rest};
        setInventory(newProduct);

    }
    const Image = (e) => {
        const {picture, ...rest}= inventory;
        const newImg = e.target.value;
        const newImage = {picture: newImg, ...rest};
        setInventory(newImage);

    }
    const Des = (e) => {
        const {description, ...rest}= inventory;
        const newDes = e.target.value;
        const newDesc = {description: newDes, ...rest};
        setInventory(newDesc);

    }
    const Sup = (e) => {
        const {supplier, ...rest}= inventory;
        const newSup = e.target.value;
        const newSupp = {supplier: newSup, ...rest};
        setInventory(newSupp);

    }
    const Quantity = (e) => {
        const {quantity, ...rest}= inventory;
        const newQun = e.target.value;
        const newQuanti = {quantity: newQun, ...rest};
        setInventory(newQuanti);

    }
    const Price = (e) => {
        const {price, ...rest}= inventory;
        const newPric = e.target.value;
        const newPrice = {price: newPric, ...rest};
        setInventory(newPrice);

    }

    return (
        <div>
            <div className="container py-5">
                <div className="row"> 
                    <div className="col-md-6 mx-auto">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="">Update Product</h3>
                                <div className="row bg-info py-3">
                                    <Form onSubmit={handleUpdate}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Name</Form.Label>
                                            <Form.Control onChange={Name} type="text" name='name' placeholder="Enter product name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                                            <Form.Label>Photo Url</Form.Label>
                                            <Form.Control onChange={Image} type="text" name='picture' placeholder="Enter product photo url" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control onChange={Des} type="text" name='description' placeholder="Descriptions" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control onChange={Quantity} type="text" name='quantity' placeholder="Quantity" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control onChange={Price} type="text" name='price' placeholder="Price" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label>Supplier</Form.Label>
                                            <Form.Control onChange={Sup} type="text" name='supplier' placeholder="Supplier" required />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className='btn btn-warning'>
                                            Update inventory
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
