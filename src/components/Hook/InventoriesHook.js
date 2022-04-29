import { useEffect, useState } from "react";

export const InventoriesHook=()=>{
const [inventories, setInventories] = useState([]);
    useEffect(() => {
        const url = 'services.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setInventories(data))
    },[])

    return [inventories, setInventories];
}
