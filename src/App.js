import React from 'react' 
import './App.scss';
import Nav from './nav'
import Context from './context'
import Footer from './footer'
import Loading from './loading'
 
import cart from './data'
import {useReducer,useContext, useEffect,useState} from 'react'
 const url = 'https://course-api.com/react-useReducer-cart-project'
  
const initialValue={
 loading:false,
 items:cart
}
  
const reducer =(state,action)=>{

if(action.type === 'DISPLAY'){
  return {...state, items: action.payload}
}
if(action.type==='INCREMENT'){
  let cartItem = state.items.map(item=>{
    if(item.id===action.payload){
      return {...item, amount: item.amount+1}

    }
    return item
  })
  return {...state, items:cartItem}
}
if(action.type==='DECREMENT'){
  let cartItem = state.items.map(item=>{
    if(item.id ===action.payload){
      return {...item, amount: item.amount-1}
    }
    return item
  }).filter(item=>item.amount !==0 )
  return {...state, items:cartItem}
}
if(action.type==='TOTAL'){
  let{total,amount} = state.items.reduce((cartTotal,cartItems)=>{
    const{price,amount} = cartItems
    const itemTotal = price * amount
cartTotal.total += itemTotal
cartTotal.amount += amount
return cartTotal
},
{
  total:0, 
  amount:0
  })
  total = parseFloat(total.toFixed(2))
  return {...state, total,amount}
}
if(action.type==='CLEAR'){
  return {...state, items:[]}
}
}

 const AppContext = React.createContext()
function App() {

   
  const [loading, isLoading] = useState(false)
  const [state,dispatch] =useReducer(reducer,initialValue)
const increment = (id)=>{
  dispatch({type:'INCREMENT',payload:id})
}
const decrement = (id)=>{
  dispatch({type:'DECREMENT',payload:id})
}
     const getData = async()=>{
    const response  = await fetch(url) 
    const phone = await response.json() 
    dispatch({ type:'DISPLAY', payload:phone})
  }
  const clear = ()=>{
dispatch({type:'CLEAR'})
  }
useEffect(()=>{
getData()

},[])
useEffect(()=>{
  dispatch({type:'TOTAL'})
},[state.items])

 return( 

 <AppContext.Provider value={state}>
 <Nav/>
 <div className="bag">
 <h1>your bag</h1></div>
 <div className="context-container">
<Context increment= {increment} decrement={decrement} /> 
 </div>
 <div className="footer-container"> 
 <Footer clear= {clear}/>
 </div>

 </AppContext.Provider>
 )
}

export default App;
 
export {AppContext}
