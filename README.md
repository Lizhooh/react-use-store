# react-use-store
Global data management hooks like redux.

## install

```sh
yarn add react-use-store
yarn add redux redux-store-init
```

## usage
First, create a store, just like using react-redux.

```js
import React from 'react';
import Store from 'redux-store-init';
import { Provider } from 'react-use-store';
import * as reducers from './reducers';
import App from './app';

const store = Store({ reducers });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
```

To create a Reducer in the reducers.js file, you need to use the createReducer function provided by the react-use-store. Its first argument is the name of the module, and the second argument is the initial state value.

```js
// reducers.js
import { createReducer } from 'react-use-store';

// createReducer(name, initState)
export const index = createReducer('index', {
    count: 1,
});
```

Then use `uer-store` in the component to get the global data.
You can use commit to submit updates.

```js
import React from 'react';
import useStore from 'react-use-store';

export default function app() {
    const [state, commit] = useStore('index');

    const onClick = e => {
        commit({ count: state.count + 1 });
    };

    return (
        <div>
            <div>Count: {state.count}</div>
            <button onClick={onClick}>Update</button>
        </div>
    );
}
```

