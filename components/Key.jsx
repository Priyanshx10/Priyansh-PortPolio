import React from 'react'

const key = ({items}) => {
  return (
    <div> 
        <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul></div>
  )
}

export default key