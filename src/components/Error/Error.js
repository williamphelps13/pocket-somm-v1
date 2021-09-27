import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  
  return (
    <section>
      <h2>Page Note Found (404 Error)</h2>
      <Link to='/'>
        <button>Return to All Varietals</button>
      </Link>
    </section>
  )
}
           
export default Error