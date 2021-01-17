import { useContext } from "react"
import {AppContext} from './App'
import {FiArrowUp} from 'react-icons/fi'
import {FiArrowDown} from 'react-icons/fi'
 import {useGlobal} from './App'
 console.log(useGlobal);
const Context = ({increment})=>{
      const data = useContext(AppContext)
 console.log(data);




    return (
<>
{data.map((item,index)=>{
    const {img,id,price,amount,title}=item
    return ( 
    <article key={id} className="article">
 <div className="left">
 <header className="header">
 <img src={img} alt=""/>
 <div className="price">
 <h4>{title}</h4>
 <p>{price}</p>
 <button className="btn-remove">remove</button>
 </div>
 </header>
 </div>
 <div className="right">
 <div className="arrow-container">
 <FiArrowUp onClick={()=>{
     increment()
 }}/>
 <p>{amount}</p>
 <FiArrowDown/>
 </div>
 </div>

     </article>
    )
    })}
</>

   
    )
}


export default Context