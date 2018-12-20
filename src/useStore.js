import { useContext, useEffect, useState } from 'react';
import Context from './context';

export default function (name) {
    const store = useContext(Context);
    const [rootState, update] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => update(store.getState()));
        return () => unsubscribe();
    });

    function commit(cb) {
        if (typeof cb === 'function') {
            return store.dispatch({
                type: name || '$$root',
                newState: (state, initState) => ({ ...state, ...cb(state, initState, rootState) }),
            });
        }
        else if (typeof cb === 'object') {
            return store.dispatch({
                type: name || '$$root',
                newState: state => ({ ...state, ...cb }),
            });
        }
    }

    if (typeof name === 'string') {
        return [rootState[name], commit, rootState];
    }

    return [rootState, commit, rootState];
};
