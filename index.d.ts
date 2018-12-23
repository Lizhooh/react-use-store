import * as React from 'react';

export interface IProviderProps {
    store: object,
    children?: any,
}

interface ICommit {
    (newState: object): void,
    (cb: (state, initState, rootState) => object): void,
    (name: string, cb: (state, initState, rootState) => object): void,
}

export interface IUseStoreReturn {
    /** state */
    [0]: object | any,
    /** commit */
    [1]: ICommit,
    /** rootState */
    [2]: object | any,
}

export class Provider extends React.Component<IProviderProps> { }
export function createReducer(name, initState): (state: any, action: any) => void;

export default function useStore(name?: string): IUseStoreReturn;

