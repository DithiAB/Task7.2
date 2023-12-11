import {useContext} from 'react'
import { counterNew } from './Counter'
import './Counter.css'
const Count = () => {
    const {state, dispatch}= useContext(counterNew)
  return (
    <div className='main'>
            <h1>Count:{state}</h1>
            <button onClick={()=>dispatch({type:'Increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>

     </div>
  )
}

export default Count