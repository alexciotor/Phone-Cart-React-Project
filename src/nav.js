import {BsLockFill} from 'react-icons/bs'
import {useContext} from 'react'
import { AppContext } from './App'
const Nav =()=>{
    const state = useContext(AppContext)
    return (
        <div className="nav-container">
            <nav className="nav">
            <h4>useReducer</h4>
        
            <div className="total-container">
            <BsLockFill/>
            <span className="span">{state.amount}</span>
            </div>
            </nav>
        </div>
    )
}

export default Nav