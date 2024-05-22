import React, { useContext } from 'react'
import {FaRupeeSign} from 'react-icons/fa'
import ExpenseContext from '../Context/ExpenseContext'


const MidSec = () => {

  const {transactions} = useContext(ExpenseContext)

  
  const Income = transactions.filter(transaction => transaction.amount > 0).reduce((p,c)=> {
    return p + c.amount
  }, 0)
  
  const Expense = transactions.filter(transaction => transaction.amount < 0).reduce((p,c)=> {
    return p + c.amount
  }, 0)
  

  return (
    <div className="mid bg-dark">
    <div className="income">
      <div className="text w-100 text-center bg-dark p-3">
      <h3 className='text-light'>Income</h3>
      <h5 className='text-light'><FaRupeeSign/>{Income}</h5>
      </div>
    </div>
    <div className="expense">
      <div className="text w-100 text-center bg-dark p-3">
      <h3 className='text-light'>Expense</h3>
      <h5 className='text-light'><FaRupeeSign/>{Expense}</h5>
      </div>
    </div>
    </div>
  )
}

export default MidSec
