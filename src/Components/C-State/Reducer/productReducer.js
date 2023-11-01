export const productReducer=(state={prod:[],cart:[]},action)=>{
switch (action.type){
    case "ADD_PRODUCT":
    return{
        ...state,
        prod:[state.prod,action.payload]
    }
   
         default:
        return state
        }
 return state 

}
