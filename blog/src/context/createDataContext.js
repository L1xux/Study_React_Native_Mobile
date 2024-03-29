import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === { addBlogPost: ( return () => {} )}

        const boundActions = {};
        for (let key in actions) {
            // key === 'addBlogPost'
            // actions[key] ===  (dispatch) => { return () => { dispatch({ type: 'add_blogpost' }); };
            boundActions[key] = actions[key](dispatch);
        }

        return( 
        <Context.Provider value={{ state, ...boundActions }}>
        {children}
        </Context.Provider>);
    }

    return { Context, Provider };
};