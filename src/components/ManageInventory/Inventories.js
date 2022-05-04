import { InventoriesHook } from '../Hook/InventoriesHook';
import Inventory from './Inventory';

const Inventories = () => {
    const [ inventories ] = InventoriesHook([]);
    return (
        <div className="container py-5">
            <h1>Total Bikes: {inventories.length}</h1>
            <div className='row'>
                {
                    inventories.map( inventory => <Inventory key={inventory._id} inventory={inventory} />)
                } 
            </div>
        </div>
    );
};

export default Inventories;