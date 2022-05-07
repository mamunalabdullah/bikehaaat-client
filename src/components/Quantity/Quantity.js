import React from 'react';
import { Button, Card, Col, Form, FormLabel, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { SingleHookProduct } from '../CustomHook/SingleHookProduct';

const Quantity = () => {
    const { id } = useParams();
    const [product, setProduct] = SingleHookProduct(id)
;

    const ReStock = e => {
        const quantity = parseInt(e.target.reStock.value) + parseInt(product.quantity);

        const updateRestock = { quantity };
        // console.log(updateRestock);
        const url = `https://evening-wave-77311.herokuapp.com/inventory/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',

            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(
                updateRestock
            ),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

            });

    }

    const handleQuantity = e => {
        const quantity = e.target.quantity.value - 1;
        const updateQuantity = { quantity }
        console.log(updateQuantity);
        const url = `https://evening-wave-77311.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(
                updateQuantity
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => {
                // setProducts(data)
                console.log(data);

            });
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <div className=' p-5'>
                        <h4>Update Quantity</h4>
                        <Form onSubmit={ReStock} className='d-flex'>
                            <input type='number' name='reStock' placeholder="quantity" />
                            <Button className='ms-2' variant="dark" type="submit">
                                ADD STOCK
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="col-5">
                    <Card className='mx-auto' style={{ width: '20rem' }}>
                        <Card.Img className='pt-3' variant="top" src={product.picture} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.des}
                            </Card.Text>
                            {/* <Card.Text>
                                <p>Quantity: {product.quantity}</p>
                            </Card.Text> */}
                            <Card.Text>
                                <p>Supplier:{product.supplier}</p>
                            </Card.Text>
                            <Card.Text>
                                <p>Price: {product.price} $</p>
                            </Card.Text>
                            <form onSubmit={handleQuantity}>
                                
                                <FormLabel>Quantity: </FormLabel>
                                <input className='ms-2 border border-white' type="number" name="quantity" value={product.quantity} readOnly />

                                <button className='btn btn-primary'>DELIVERD</button>

                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Quantity;