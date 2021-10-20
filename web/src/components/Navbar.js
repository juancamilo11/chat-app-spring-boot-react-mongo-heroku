import React from 'react'
import { Link } from 'react-router-dom'
import favicon from '../img/favicon.ico'

export const PublicNavbar = () => (
  <nav>
    <section>
      <img src={favicon} alt="Icon" />
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
    </section>
  </nav>
 
)

export const PrivateNavbar = () => (
  <nav>
    <section>
      <img src={favicon} alt="icon" />
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
    </section>
  </nav>
)