import { useContext } from 'react';
import {FaRupeeSign} from 'react-icons/fa'
import ExpenseContext from '../Context/ExpenseContext';


const TotalAmt = () => {

  const {transactions} = useContext(ExpenseContext)

  const TotalBalanse = transactions.reduce((p,c) => {
    return p + c.amount
  }, 0)

 
  return (
    <div className="total-amt bg-dark  border border-light">
    <div className="text w-100 text-center">
    <h2 className= 'text-light display-3'>TOTAL AMOUNT</h2>
    <h4 className='text-light display-5'><FaRupeeSign/>{TotalBalanse}</h4>
    </div>
    </div>
  )
}

export default TotalAmt;
