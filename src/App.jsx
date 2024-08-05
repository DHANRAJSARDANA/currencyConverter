import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyingo'
function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState('usd')
  const [to, setto] = useState('inr')
const [convertedAmount,setconvertedAmount]=useState(0)
const currencyInfo=useCurrencyInfo(from);
const options=Object.keys(currencyInfo);

const swap=()=>{
  setfrom(to)
  setto(from)
  setconvertedAmount(amount)
  setamount(convertedAmount)
}

const convert=()=>{
setconvertedAmount(amount*currencyInfo[to])
}
return (
    <>
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-black'>
<div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
<form onSubmit={(e)=>{
e.preventDefault();//we don not want our form data to be sent on any url
convert()
}}>
<div className="w-full mb-1">
  <InputBox 
  label="From"
  amount={amount}
  currencyOptions={options}
  onCurrencyChange={(currency)=> setamount(amount)}
  selectCurrency={from}
  onAmountChange={(amount)=> setamount(amount)}
  />
  </div>
  <div className="relative w-full h-0.5">
    <button
    type='button'
    className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
    onClick={swap}
    >
Swap
    </button>
  </div>
<div className='w-full mt-1 mb-4'>
  <InputBox
label="To"
amount={convertedAmount}
currencyOptions={options}
onCurrencyChange={(currency)=> setto(currency)}
selectCurrency={to}
  amountDisable
  />
</div>
<button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
  Convert {from.toUpperCase()} to {to.toUpperCase()}
</button>
</form>
</div>
    </div>
    </>
  )
}

export default App
