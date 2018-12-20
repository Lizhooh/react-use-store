
export default function createReducer(name, initState) {
    return (state = initState, action) => {
        if (action.newState && typeof action.newState !== 'function') {
            console.warn(`[${name}] action.newState is not a function`);
            return state;
        }
        if (action.type === name) {
            return action.newState(state, initState) || state;
        }
        return state;
    };
}