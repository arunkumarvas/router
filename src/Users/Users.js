import React,{useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import {Card,CardGroup  } from 'react-bootstrap'

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
                <>
    <CardGroup key={index}>
      <Card>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </CardGroup>





                  <button onClick={()=>handleView(data.id)}>view</button>
              
                  </> 
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
