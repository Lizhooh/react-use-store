import * as React from 'react';

export interface IProviderProps {
    store: object,
    children?: any,
}

export interface IUseStoreReturn {
    [0]: object | any,
    [1]: (name: string, callback: (state, initState, rootState) => object | any) => void,
}

export class Provider extends React.Component<IProviderProps> { }
export function createReducer(name, initState): (state: any, action: any) => void;

export default function useStore(name?: string): IUseStoreReturn;

