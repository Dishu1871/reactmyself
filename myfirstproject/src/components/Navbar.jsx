import React from 'react'
// this is rule that we need to give function name in capital letter
// function name can be same as file name
const Navbar = () => {
  return (
    <div>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
