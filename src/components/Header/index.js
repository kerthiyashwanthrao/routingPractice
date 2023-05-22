// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="navBar">
    <li className="imgContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="logo"
      />
      <p className="logoName">Wave</p>
    </li>

    <li>
      <Link className="home" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="about" to="/about">
        About
      </Link>
    </li>
    <li>
      <Link className="contact" to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)
export default Header
