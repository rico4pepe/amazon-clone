export const initialState = {
    basket: [],

};

const reducer =(state, action) => {
    console.log(action + " Hello ")

    switch (action.type){ 
       case 'ADD_TO_BASKET':
        return{
            //retain state 
            ...state,
            //Get user
            basket:[...state.basket, action.item] ,
        };        
        default:
            return state; 
    }
  
}; 
export default reducer;