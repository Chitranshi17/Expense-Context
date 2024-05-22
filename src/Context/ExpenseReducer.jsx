const ExpenseReducer = (state , action) => {
    if(action.type === "DELETE_TRANSACTIONS"){
        return {
            ...state,
            transactions : state.transactions.filter(item => item.id !== action.payload),
        };
        }
        else if(action.type === "SAVE_TRANSACTIONS"){
            return {
                ...state,
                transactions : [action.payload , ...state.transactions]
            };
        }
        else if(action.type === "EDIT_TRANSACTIONS"){
            return {
                ...state,
                edit : {transactions : action.payload, isEdit : true},
            };
        }
        else if(action.type === "UPDATE_TRANSACTIONS"){
            return {
                ...state,
                transactions : state.transactions.map(item => item.id === action.payload.id ? action.payload : item),
                edit : {transactions : {} , isEdit : false}
            }
        }
    }


export default ExpenseReducer;