import React from 'react'
import { Link } from 'react-router-dom'

export default function Faculty() {
  return (
    <div>
      <h1>Welcome to faculty page</h1>
      <button><Link to ='/home'>Home</Link></button>
    </div>
  )
}
