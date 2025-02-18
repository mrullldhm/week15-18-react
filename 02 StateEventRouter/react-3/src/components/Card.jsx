import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <div>
        <h1>Hello, {props.user.name}</h1>
        <img src={props.user.link} alt={props.user.name} />
    </div>
  )
}

// Defining the expected data type for the "user" prop in the Card component
Card.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
        active: PropTypes.bool
    })
}

export default Card
