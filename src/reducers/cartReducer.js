const initialState={
    products: [{ name: "iphone 5", price: 200, QTY: 2, Total: 400,id:1},
    { name: "iphonev5s", price: 250, QTY: 1, Total: 250,id:2},
    { name: "iphone 6", price: 300, QTY: 2, Total: 600,id:3},
    { name: "iphone 6s", price: 350, QTY: 2, Total: 700,id:4},
    { name: "iphone x", price: 400, QTY: 2, Total: 800,id:5}],
    username:'ewrre'
}



const cartReducer=(state=initialState,action)=>{
switch(action.type){
    case 'DELETE_ITEM':
    return {
      ...state,
      products:state.products.filter(
        ({id}) => id !== action.id
      )
    }

    default:
    return state
}
}

export default cartReducer