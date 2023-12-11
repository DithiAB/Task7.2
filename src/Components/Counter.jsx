import {useReducer, createContext} from 'react'
import Count from './Count';
import './Counter.css'

const initialValue=0;
const reducer=(state, action)=>{

    if(action.type==="Increment"){
       return (state<9)? state+1:state
    }

    if(action.type==="Decrement"){
        return (state>0)? state-1:state
    }
    return state;
}
const counterNew= createContext();
const Counter = ({children}) => {
     const[state, dispatch]= useReducer(reducer,initialValue)
    const value={ state, dispatch}
  return (
    <div>
        <counterNew.Provider value={value}>
            {children}
        </counterNew.Provider>
    </div>
  )
}

export default Counter
export {counterNew};

