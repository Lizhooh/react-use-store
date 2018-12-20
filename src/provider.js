import React from 'react';
import Context from './context';

export default ({ store, children }) => (
    <Context.Provider value={store}>{children}</Context.Provider>
);