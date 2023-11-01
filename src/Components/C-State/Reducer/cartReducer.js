export const cartReducer=(state={prod:[],cart:[]},action)=>{
switch (action.type){
    
    case "ADD__TO__CART":
        return{
            ...state,
            cart:[...state.cart,action.payload]
        }   
         default:
        return state
        }
 return state 

}
