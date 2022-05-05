import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const AddInventory = () => {
    const handleUpload = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const picture = event.target.picture.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        toast('Inventory add success');
        event.target.reset();

        const url = `http://localhost:5000/inventoryAdd`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name, picture, description, quantity, price, supplier
            }),
            
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    
                    <div className="col-md-6 mx-auto">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="">Add New Product</h3>
                                <div className="row bg-info py-3">
                                    <Form onSubmit={handleUpload}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Name</Form.Label>
                                            <Form.Control type="text" name='name' placeholder="Enter product name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                                            <Form.Label>Photo Url</Form.Label>
                                            <Form.Control type="text" name='picture' placeholder="Enter product photo url" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text" name='description' placeholder="Descriptions" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control type="text" name='quantity' placeholder="Quantity" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="text" name='price' placeholder="Price" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label>Supplier</Form.Label>
                                            <Form.Control type="text" name='supplier' placeholder="Supplier" required />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Add inventory
                                        </Button>
                                    </Form>
                                </div>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddInventory;