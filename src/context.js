import { useContext } from "react"
import {AppContext} from './App'
import {FiArrowUp} from 'react-icons/fi'
import {FiArrowDown} from 'react-icons/fi'
 
const Context = ({increment,decrement})=>{
      const data = useContext(AppContext)
    return (
<>
{data.items.map(item=>{
    const {img,id,price,title,amount}=item
   
    return ( 
    <article key={id} className="article">
 <div className="left">
 <header className="header">
 <img src={img} alt={title}/>
 <div className="price">
 <h4>{title}</h4>
 <p>{price}</p>
 </div>
 </header>
 </div>
 <div className="right">
 <div className="arrow-container">
 <FiArrowUp onClick={()=>{
      increment(id)
 }} />
 <p>{amount}</p>
 <FiArrowDown onClick={()=>{
     decrement(id)
 }} />
 </div>
 </div>

     </article>
    )
    })}
</>

   
    )
}


export default Context