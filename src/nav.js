import {BsLockFill} from 'react-icons/bs'
const Nav =()=>{
    return (
        <div className="nav-container">
            <nav className="nav">
            <h4>useReducer</h4>
        
            <div className="total-container">
            <BsLockFill/>
            <span className="span">0</span>
            </div>
            </nav>
        </div>
    )
}

export default Nav