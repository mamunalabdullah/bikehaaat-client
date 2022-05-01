import { Link } from 'react-router-dom';
import { InventoriesHook } from '../Hook/InventoriesHook';
import Inventory from './Inventory';

const Inventories = () => {
    const [ inventories ] = InventoriesHook([]);
    return (
        <div className="container py-5">
            <div className='row'>
                {
                    inventories.slice(0, 6).map( inventory => <Inventory key={inventory._id} inventory={inventory} />)
                } 
            </div>
            <Link to="/minventory" className="btn btn-primary mt-5">Inventories</Link>
        </div>
    );
};

export default Inventories;