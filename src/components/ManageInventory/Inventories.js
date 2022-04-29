import { InventoriesHook } from '../Hook/InventoriesHook';
import Inventory from './Inventory';

const Inventories = () => {
    const [ inventories ] = InventoriesHook([]);
    return (
        <div className='container text-center py-2'>
            <div>
                {
                    inventories.map( item => <Inventory key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Inventories;