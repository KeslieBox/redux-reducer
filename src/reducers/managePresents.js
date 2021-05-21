export function managePresents(state = {numberOfPresents: 0,}, action){
    switch(action.type){
        case 'INCREASE':
            // this...
            // return Object.assign({}, state, {
            //     numberOfPresents: state.numberOfPresents + 1
            // })
            // orrrr this: 
            return {numberOfPresents: state.numberOfPresents + 1}
        default: 
            return state
    }
}
