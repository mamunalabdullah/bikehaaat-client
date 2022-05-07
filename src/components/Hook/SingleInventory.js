import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleInventory = () => {
    const [inventory, setInventory] = useState([]);
    const{id} =useParams()

    useEffect(() => {
        fetch(`https://evening-wave-77311.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    return [inventory, setInventory];
}
