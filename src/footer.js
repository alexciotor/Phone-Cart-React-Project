import {useContext} from 'react'
import { AppContext } from './App'
const Footer = ({clear})=>{
    const state = useContext(AppContext)
    return <div className="footer-content">
    <div className="total">
    <h4>Total</h4>
    <span>{state.total}</span>
    </div>
    <div className="button">
    <button className="btn" onClick={()=>{
        clear()
    }}>Clear Cart</button>
    </div>
    </div>
}

export default Footer