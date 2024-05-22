import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ExpenseContext from '../Context/ExpenseContext';


const FormSec = () => {

const {saveTransactions , edit , updateTransactions} = useContext(ExpenseContext)

const [text , setText] = useState(" ")
const [amount , setAmount] = useState(" ")
const handleSubmit = (e) => {
  e.preventDefault();
  if(edit.isEdit){
    updateTransactions(edit.transactions.id, text , amount)
  }else{
    saveTransactions(text , amount)
  }
  setText("")
  setAmount("")
}


useEffect(()=>{
setText(edit.transactions.text),
setAmount(edit.transactions.amount)
}, [edit])

  return (
    <div className="form-section bg-light">
    <div className="form-container container bg-dark d-flex align-items-center justify-content-center">
      <form action="" className='w-75' 
      onSubmit={(e) => handleSubmit(e)}>
        {/* <input type="text" 
        placeholder='Enter Salary, House Rent...'
        className='form-control p-4 border border-light' 
        required
        onChange={e => setText(e.target.value)}
        value={text}
       /> */}

       <input type="text"
       placeholder='Enter Narration'
       className='form-control p-4 border border-light'
       required
        onChange={e => setText(e.target.value)}
        value={text} />
        <input type="number" placeholder='Enter Amount' className='form-control p-4 border border-light' 
        required
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
        <button className='btn btn-success w-100 p-4'>Create Transactions</button>
      </form>
    </div>
    </div>
  )
}

export default FormSec
