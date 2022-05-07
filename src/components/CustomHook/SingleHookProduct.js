import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleHookProduct = () => {
    const [product, setProduct] = useState([]);
    const{id} =useParams()

    useEffect(() => {
        fetch(`https://evening-wave-77311.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return [product, setProduct];
}
