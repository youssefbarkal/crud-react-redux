const InitialeState = {
    Users : [
        {id:1,Fullname:'Ahmed laarbaoui',email:'ahmed23@gmail.com'}
    ]
};
const Reducer = (state = InitialeState,action) => {
    if(action.type === 'ADD_USER'){
        return {...state,Users : [...state.Users,action.payload]}
    }
    if(action.type === 'UPDATE_USER'){
        return {
            ...state,
            Users : state.Users.map(user => 
                user.id === +action.payload.id ? {...user,...action.payload} : user
            )
        }
    }
    if(action.type === 'DELETE_USER'){
        return {
            ...state,
            Users : state.Users.filter(user => user.id !== action.payload)
        }
    }
    return state;
}
export default Reducer;