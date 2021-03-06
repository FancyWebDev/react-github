import { AlertContext } from './alert-context';
import { useReducer } from 'react';
import { AlertReducer } from './alert-reducer';
import { HIDE_ALERT, SHOW_ALERT } from '../types';

export const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(AlertReducer, null);
  const { Provider } = AlertContext;

  const hide = () => dispatch({type: HIDE_ALERT});
    
  const show = (text) => dispatch({
    type: SHOW_ALERT,
    payload: { text }
  });
  
  return(
    <Provider value={ {hide, show, alert: state} }>
      { children }
    </Provider>
  )
}