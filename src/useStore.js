import { useContext, useEffect, useState } from 'react';
import Context from './context';

export default function (name) {
    const store = useContext(Context);
    const [rootState, update] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => update(store.getState()));
        return () => unsubscribe();
    });

    function commit(...arg) {
        if (typeof arg[0] === 'object') {
            return store.dispatch({
                type: name || '$$root',
                newState: state => ({ ...state, ...cb }),
            });
        }
        else if (typeof arg[0] === 'function') {
            return store.dispatch({
                type: name || '$$root',
                newState: (state, initState) => ({ ...state, ...cb(state, initState, rootState) }),
            });
        }
        else if (typeof arg[0] === 'string' && typeof arg[1] === 'function') {
            return store.dispatch({
                type: arg[0] || '$$root',
                newState: (state, initState) => ({ ...state, ...cb(state, initState, rootState) }),
            });
        }
    }

    if (typeof name === 'string') {
        return [rootState[name], commit, rootState];
    }

    return [rootState, commit, rootState];
};
