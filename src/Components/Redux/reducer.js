export default function rootReducer(prevState  , action)
{
    if(action.type === "CART") {
        return{...prevState , count : prevState.count + 1}
    }
    return prevState;
}