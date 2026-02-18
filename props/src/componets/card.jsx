import React from 'react'

function Card(props) {

  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold text-gray-800'>{props.title}</h1>
        <p className='text-gray-600'>{props.description}</p>

      </div>
    </div>
  )
}

export default Card
