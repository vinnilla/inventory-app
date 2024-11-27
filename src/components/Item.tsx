import { useState } from 'react';
// import './InventoryApp.css';
import { ItemType } from '../test_data/seedItems';

type ItemProps = {
  productData: ItemType;
};

function Item(props: ItemProps) {
  const [product, setProduct] = useState(props.productData);
  const [isSelected, setIsSelected] = useState(false);
  const [onSale, setOnSale] = useState(props.productData.discount > 0);
  const [inStock, setInStock] = useState(props.productData.stockCount > 0);
  const finalPrice = product.basePrice + product.fees - product.discount;
  
  return (
    <div className={`w-80 bg-violet-300/75 text-violet-800 rounded-lg p-2 flex flex-row items-center ${!inStock ? "opacity-60" : ""}`} onClick={() => setIsSelected(!isSelected)}>
      <img className={`w-32 h-32 p-1 ${!inStock ? "opacity-50" : ""}`} src={product.imageUrl} />
      <div className="flex flex-col p-2">
        <p className="text-base mb-2">{product.name}</p>
        <p className="text-sm mb-2">{product.stockCount} in stock</p>
        { isSelected && (
          <>
            <p className="text-xs">{product.unitValue} {product.unit}</p>
            <p className="text-xs">{product.buyCount} ct</p>
            <p className={`text-xs ${onSale ? "text-green-900" : ""}`}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(finalPrice)}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Item;