import React, { useContext } from 'react'
import ListItem from './ListItem'
import ExpenseContext from '../Context/ExpenseContext'


const UlSec = () => {

  const {transactions} = useContext(ExpenseContext)
  return (
    <div className="ul-section bg-dark py-4">
    <ul className="list-group" >
      {
        transactions.map(transaction => <ListItem key={transaction.id} transaction={transaction}/>)
      }
      </ul>
  </div>
  )
}

export default UlSec
