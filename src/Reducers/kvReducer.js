function kvReducer(state, action) {
    let newState;
    switch(action.type) {
        case 'gokv':
            newState = [...state, true];
        break;
    default: 
        newState = [...state];
    }
    return newState;
}


export default kvReducer;