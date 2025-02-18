import { useState } from 'react'
import PropTypes from 'prop-types'

const Counter = (props) => {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h4>My name is {props.name}</h4>
        <h4> COUNT: {count}</h4>
        <button 
            onClick={() => setCount(count + 1)}>Add +1
        </button>
    </div>
  )
}

Counter.propTypes = {
    name: PropTypes.string.isRequired
}

export default Counter
