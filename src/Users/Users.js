import React,{useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Users() {

 const [usersList,setUsersList] =useState([])
 const [isDataLoaded,setIsDataLoaded] =useState(false)
 const navigate =useNavigate();

 useEffect( () => {
   if(!isDataLoaded) {
    fetch('https://fakestoreapi.com/products/').then((response) =>response.json()).then( (usersList) => {
      setUsersList(usersList)
      setIsDataLoaded(true)
      console.log(usersList)
      }).catch((error)=>{
        console.log('eror',error)
      })

   }
  },[isDataLoaded])
   const handleView =(id)=>{
    console.log(id ,'id')
    navigate(`/users/${id}`)

  }
  
  return (

    <div>
      
          <h1>Welcome to the amazon</h1>
          {/* <Link to='student'>Student Add</Link> <br/>
          <Link to='faculty'>Faculty Add</Link> */}

          { usersList && (
            <table>
            <thead>
              <th>title</th>
              
            </thead>
          <tbody>
            {
              usersList.map((data,index) => { return(
                <tr key={index} >
                  <td>{data.id}</td>
                  <td>{data.title} </td>

                  <td><button onClick={()=>handleView(data.id)}>view</button></td>
                </tr>
                
              )

              }
            )
            }
          </tbody>
          </table>
          )

          }
  </div>
  )
}
