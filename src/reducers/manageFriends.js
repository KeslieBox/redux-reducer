export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case 'ADD_FRIEND': 
            return Object.assign({}, state, {
                friends: 
                [...state.friends, action.friend]
            })
            // also: 
            // return ({...state, friends: [...state.friends, action.friend]})
        case 'REMOVE_FRIEND':
            const removeI = state.friends.findIndex(f => f.id === action.id)

            // return (
            //     {...state, 
            //         friends: [
            //             ...state.friends.slice(0, removeI), 
            //             ...state.friends.slice(removeI + 1),
            //         ]
            //     }
            // )
            return Object.assign({}, state, {
                friends: [...state.friends.slice(0, removeI), ...state.friends.slice(removeI + 1)]})
        default:
            return state
    }
}
