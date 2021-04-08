import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions === {addPaymentMethod: (dispatch) => {return () => {]}}
    //actions === {editPaymentMethod: (dispatch) => {return () => {]}}

    const boundActions = {};

    for (let key in actions) {
      //key === addPaymentMethod
      //boundActions.addPaymentMethod = addPaymentMethod(dispatch)
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{data: state, boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
