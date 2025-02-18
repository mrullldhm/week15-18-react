import PropTypes from 'prop-types'

function Display(props) {
  return (
    <div>
        Counter: {props.displayNumber}
    </div>
  )
}

Display.propTypes = {
    displayNumber: PropTypes.number
}

export default Display
