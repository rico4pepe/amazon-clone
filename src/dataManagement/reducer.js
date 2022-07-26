export const initialState = {
    basket: [],

};

//How to Create a Selector
export const getBasketTotal = (basket) => (
    //Everytime the item loops thru i want the item price to add to amount and the initial amount is 0 
    basket?.reduce((amount, item) => item.price + amount, 0)
)

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