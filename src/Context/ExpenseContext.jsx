import { useReducer, useState } from "react";

import { createContext } from "react";
import ExpenseReducer from "./ExpenseReducer";

const ExpenseContext = createContext();

export const ExpenseProvider = ({children}) => {

  const initialState = {
    transactions : [
    ],
    edit : { transactions : {} , isEdit : false}
  }

  const [state, dispatch] = useReducer(ExpenseReducer, initialState)
    // delete Transactions

    const deleteTransactions = (id) => {
       dispatch ({
        type : "DELETE_TRANSACTIONS",
        payload : id,

       });
    };


    // Save Transactions

    const saveTransactions = (text, amount) => {
      const newTransactions = {
        id : crypto.randomUUID(),
        text ,
        amount : +amount,
      }
    //   console.log(newTransactions)
    dispatch ({
        type : "SAVE_TRANSACTIONS",
        payload : newTransactions,
    });

    }

    // Edit

    const editTransactions = (oldTransactions) => {
        // console.log(oldTransactions)
        dispatch({
          type : "EDIT_TRANSACTIONS",
          payload : oldTransactions,
        });
    }

    // Update

    const updateTransactions = (oldId, newText , newAmount) => {
      dispatch({
        type : "UPDATE_TRANSACTIONS",
        payload : {
          id : oldId,
          text : newText,
          amount : +newAmount,
        }
      })
    }

   
    return (
        <ExpenseContext.Provider value={{transactions : state.transactions, edit : state.edit , deleteTransactions , saveTransactions , editTransactions , updateTransactions}}>{children}</ExpenseContext.Provider>
    )

}

export default ExpenseContext;