import { useEffect, useState } from "react";

export const InventoriesHook=()=>{
const [inventories, setInventories] = useState([]);
    useEffect(() => {
        const url = 'https://evening-wave-77311.herokuapp.com/inventories';
        fetch(url)
        .then(res => res.json())
        .then(data => setInventories(data))
    },[])

    return [inventories, setInventories];
}

