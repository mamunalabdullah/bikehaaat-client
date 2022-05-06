import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SingleInventory } from '../Hook/SingleInventory';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const UpdateInventory = () => {
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
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        toast('Update success');
        event.target.reset();

        const url = `https://evening-wave-77311.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                name, picture, description, quantity, supplier, price
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => setData(data));

        navigate('/inventoyList');

    }
    const Name = (e) => {

        const {name, ...rest}= inventory;
        const newName = e.target.value;
        const newProduct = {name: newName, ...rest};
        setInventory(newProduct);

    }
    const Image = (e) => {

        const {img, ...rest}= inventory;
        const newImg = e.target.value;
        const newImage = {img: newImg, ...rest};
        setInventory(newImage);

    }
    const Des = (e) => {

        const {des, ...rest}= inventory;
        const newDes = e.target.value;
        const newDesc = {des: newDes, ...rest};
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
        const newPrice = e.target.value;
        const newPric = {price: newPrice, ...rest};
        setInventory(newPric);

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
                                            <Form.Label>Product Name:</Form.Label>
                                            <Form.Control onChange={Name} type="text" name='name' value={inventory.name} placeholder="Enter product name"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                                            <Form.Label>Photo Url</Form.Label>
                                            <Form.Control onChange={Image} type="text" name='img' value={inventory.img} placeholder="Enter product photo url"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Descriptions</Form.Label>
                                            <Form.Control as="textarea" rows={3} type="text" name='des' onChange={Des} value={inventory.des} placeholder="Descriptions"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control type="text" name='quantity' onChange={Quantity} value={inventory.quantity} placeholder="Quantity"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicSupplier">
                                            <Form.Label>Supplier</Form.Label>
                                            <Form.Control type="text" name='supplier' onChange={Sup} value={inventory.supplier} placeholder="Supplier"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="text" name='price' onChange={Price} value={inventory.price} placeholder="Price"/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
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

export default UpdateInventory;