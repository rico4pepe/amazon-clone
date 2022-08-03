import { act } from "react-dom/test-utils";

export const initialState = {
    basket: [],
    user: null,
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
        case 'REMOVE_FROM_BASKET':
             // This will remove from basket any item with the Id. This is not the right use case cause if i have a duplicate ite and i want to remove only one it work
                // basket: state.basket.filter(item => item.id !==action.id)
                //Better approach is to remove the index of the item in te basket array
                const index =  state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                   
                );
               
                //Create a new Basket array
                let newBasket  = [...state.basket]
                console.log("Hello this is " +   newBasket)
                if(index >= 0){
                    //Check for the index and splice or remove the index from the array and assaign to new basket array
                    newBasket.splice(index, 1)
                }else{
                    console.warn(`Cant remove product of (id: ${action.id}) as its not in basket`)
                }
                
                return{
                    //retain state 
                    ...state,
                    //Get user
                    basket: newBasket ,
                }; 

                case 'SET_USER':
                    return{
                        //retain state 
                        ...state,
                        //Get user
                       user: action.user
                    }; 

                    case 'EMPTY_BASKET':
                        return{
                            //retain state 
                            ...state,
                            //Get user
                           basket: []
                        };
                 
        default:
            return state; 
    }
  
}; 
export default reducer;