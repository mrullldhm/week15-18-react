import { useState } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

const Counter = (props) => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="title">
        <p>My name is {props.name}</p>
        <p> COUNT: {count}</p>
        <button 
            onClick={handleClick}>Add Count
        </button>
    </div>
  )
}

Counter.propTypes = {
    name: PropTypes.string.isRequired
}

export default Counter
