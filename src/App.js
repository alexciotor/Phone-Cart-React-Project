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
  total: 0,
  amount:0,
 items:cart
}
  
const reducer =(state,action)=>{
if(action.type==='INCREMENT'){
    console.log(state.items);
}
 
}

 const AppContext = React.createContext()
function App() {
  const [data,setData] =useState([])
  const [loading, isLoading] = useState(false)
  const [state,dispatch] =useReducer(reducer,initialValue)
const increment = (id)=>{
  dispatch({type:'INCREMENT',payload:id})
}

//   const getData = async()=>{
//     isLoading(true)
//     try{
//       const response = await fetch(url)
//       const data = await response.json()
//       setData(data)
//       isLoading(false)
//     }
//     catch(error){
//       console.log(error);
//     }
//   }


// useEffect(()=>{
//   getData()
// },[])
//   if(loading){
//     return <Loading/>
//   }

 return( 

 <AppContext.Provider value={state.items}>
 <Nav/>
 <div className="bag">
 <h1>your bag</h1></div>
 <div className="context-container">
<Context  /> 
 </div>
 <div className="footer-container"> 
 <Footer/>
 </div>

 </AppContext.Provider>
 )
}

export default App;
export const useGlobal =()=>{
  return useContext(AppContext)
}
export {AppContext}
