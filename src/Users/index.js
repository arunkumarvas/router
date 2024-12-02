import React from "react"; 
import Faculty from "./Faculty";
import Student from "./Student";
import Users from "./Users";
import UserDetails from '../Users/UserDetails'
import { Route,Routes } from "react-router-dom";
import NoPage from '../Layout/NoPage'

export default function Index() {
  return (
    <div>
        <Routes>
            <Route index  element ={<Users/>}/>
            <Route path='' >
        <Route path='student' element= {<Student/>}/>
        <Route path='faculty' element = {<Faculty/>}/>
        <Route path=':id' element ={<UserDetails/>}/>
        <Route path ='*' element = {<NoPage/>}/>
    </Route>
        </Routes>
      
    </div>
  )
}
