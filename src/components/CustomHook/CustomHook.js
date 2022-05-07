import { useEffect, useState } from "react";

export const CustomHook = () => {
    const [products, setProducts] = useState([]);
    const [isReload, setIsreload]= useState(false);

    useEffect(() => {
        fetch('https://evening-wave-77311.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
}