import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
      <div>
          <Link to="/register"></Link>
          <Link to="/login"></Link>
    </div>
  )
}

export default Navigation