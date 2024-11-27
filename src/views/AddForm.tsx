import { useState } from 'react';
import { FormWrapper } from '../components/FormWrapper';

type InputProps = {
  type: string;
  label: string;
  placeholder: string;
  value?: string;
  setValue?: any;
  autoFocus?: boolean;
}

type AddFormProps = {
  handleClose: any;
}

function InputDiv({ type, label, placeholder, value, setValue, autoFocus }: InputProps) {

  return <div className="flex flex-col">
    <div className="min-w-96 p-4 flex flex-row justify-between items-center">
      <label className="text-violet-300" htmlFor={`product-${label}`}>{label}</label>
      <input
        id={label}
        type={type}
        className="bg-violet-200 text-violet-700 placeholder:text-violet-400 px-2"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus={autoFocus}
      />
    </div>          
  </div>
}


function AddForm({ handleClose }: AddFormProps) {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [unitValue, setUnitValue] = useState(undefined);
  const [buyCount, setBuyCount] = useState(undefined);
  const [basePrice, setBasePrice] = useState(undefined);
  const [fees, setFees] = useState(undefined);
  const [discount, setDiscount] = useState(undefined);
  const [imageUrl, setImageUrl] = useState('');
  const [stockCount, setStockCount] = useState(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);
    console.log('hello', name, unitValue, unit)
  }

  return (
    <div className="absolute w-full h-full left-0 top-0 bg-violet-500/80 z-50">
      <div className="absolute w-1/2 left-1/4 top-32 flex justify-center">
        <FormWrapper onSubmit={handleSubmit} className="text-violet-200 min-w-96 w-1/2 text-center">
          <div className="flex justify-end p-2">
            <i className="text-xl fi fi-rr-cross-circle hover:cursor-pointer" onClick={handleClose}/>
          </div>
          <p className="text-lg">Add New Item</p>
          <InputDiv type="text" label="Name" placeholder="water" value={name} setValue={setName} autoFocus={true} />
          <InputDiv type="text" label="Unit" placeholder="fl oz" value={unit} setValue={setUnit} />
          <InputDiv type="number" label="Unit Value" placeholder="2" value={unitValue} setValue={setUnitValue} />
          <InputDiv type="number" label="Buy Count" placeholder="12" value={buyCount} setValue={setBuyCount} />
          <InputDiv type="number" label="Base Price" placeholder="2.99" value={basePrice} setValue={setBasePrice} />
          <InputDiv type="number" label="Fees" placeholder="0.00" value={fees} setValue={setFees} />
          <InputDiv type="number" label="Discount" placeholder="0.00" value={discount} setValue={setDiscount} />
          <InputDiv type="text" label="Image Url" placeholder="https://www.images.com/water.png" value={imageUrl} setValue={setImageUrl} />
          <InputDiv type="number" label="Stock Count" placeholder="24" value={stockCount} setValue={setStockCount} />
          <div className="min-w-96 mb-4 flex flex-row justify-center">
            <button type="submit" className="min-w-24 bg-violet-500/75 text-violet-200">Add</button>
          </div>
        </FormWrapper>
      </div>
    </div>
  )
}

export default AddForm;