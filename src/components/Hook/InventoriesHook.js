import { useEffect, useState } from "react";

export const InventoriesHook=()=>{
const [inventories, setInventories] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/inventories';
        fetch(url)
        .then(res => res.json())
        .then(data => setInventories(data))
    },[])

    return [inventories, setInventories];
}
