import { useState } from 'react';
import { useParams } from "react-router";
import Item from '../components/Item';
import { products } from '../test_data/seedItems';
import AddForm from './AddForm';

function Collection() {
  const {collectionName} = useParams();
  const [inventory, setInventory] = useState(products);
  const [searchFilter, setSearchFilter] = useState('');
  const [addMode, setAddMode] = useState(false);

  const items = inventory.reduce((acc, product) => {
    let shouldPush = false;
    if (product.collection === collectionName || collectionName === 'All') {
      if (!searchFilter) {
        shouldPush = true;
      } else {
        if (product.name.toLowerCase().includes(searchFilter.toLowerCase())) {
          shouldPush = true;
        }
      }
    }
    if (shouldPush) {
      acc.push(<Item key={ product.name } productData={ product }/>);
    }
    return acc;
  }, []);
  
  return (
    <div className="w-full px-10">
      {/* add modal */}
      { addMode && 
        <AddForm handleClose={() => setAddMode(false)} />
      }

      {/* header */}
      <div className="flex justify-between mb-10">
        <div className="flex justify-center gap-2">
          <i className="text-2xl fi fi-rr-search"/>
          <input 
            type="text" 
            className="bg-violet-200 text-violet-700 placeholder:text-violet-400 rounded-sm pl-2"
            placeholder="search by keyword"
            value={searchFilter} 
            onChange={(e) => setSearchFilter(e.target.value)} />
        </div>
        <i className="text-2xl fi fi-rr-edit"/>
      </div>

      {/* collections view */}
      <h1 className="font-bold mb-10">{collectionName} Items</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="w-80 bg-violet-300/75 text-violet-800 rounded-lg p-2 flex flex-row justify-center items-center gap-2 opacity-90 hover:cursor-pointer" onClick={() => setAddMode(!addMode)}>
          <i className="text-2xl pt-2 fi fi-rr-add"/>
          <p className="text-xl">add item</p>
        </div>
        { items.length > 0 && items }
      </div>
    </div>
  )
}

export default Collection;