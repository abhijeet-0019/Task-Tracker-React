import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({title}) => {

  const onClick = () => {
    alert("hello")
  }

  return (
    <header>
      <h1>{title}</h1>
      <Button color= 'green' text='ADD' onClick = {onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker Default'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


//css in jsx
const headingStyles = {
  color: 'red',
  backgroundColor: 'black'
}

export default Header