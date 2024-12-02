import React, {useState,useEffect} from 'react'
import {  useParams} from 'react-router-dom'
import {Button,Container, Card} from 'react-bootstrap'

export default function UserDetails() {
    const {id} =useParams('id')
    console.log(id)
    const [userData,setUserData] =useState({})
    const [isDataLoaded,setIsDataLoaded] =useState(false)

    useEffect(() =>{
        if(!isDataLoaded) {
            fetch(`https://fakestoreapi.com/products/${id}`).then((response) => response.json()).then((userData)=> 
            {
            setUserData(userData)
            setIsDataLoaded(true)
            console.log(userData)
            }).catch((error) =>{
                console.log(error,'error')
            })
        }

    },[isDataLoaded])

  return (
    <div>
        {
        (isDataLoaded &&  userData) &&( 
            <>
            <h1>{userData.title}</h1>
         <Container >
            <Card style={{ width: '18rem' }} className='bg-light' border='warning'>
      <Card.Img variant="top" src= {userData.image} />
      <Card.Body>
        <Card.Title>{userData.title}</Card.Title>
        <Card.Text>{userData.price}</Card.Text>
        <Card.Text>
            {userData.description}
          
        </Card.Text>
       <Button className='btn-primary'>buy now</Button> <Button href='/users' className='btn-danger'>back</Button>

      </Card.Body>        
    </Card>
    
    
</Container>
    
    

           
            </>
            
        )
        }
      
    </div>
  )
}
