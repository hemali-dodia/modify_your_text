import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";



export default function NavBar(props) {
  const handleToggleMode = () => {
    props.toggleMode();
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link to='/' className="navbar-brand">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link">{props.aboutText}</Link>
          </li>
          
        </ul>
        <div className={`custom-control custom-switch text-${props.textMode}`}>
          <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={props.textMode === 'dark'} onChange={handleToggleMode} />
          <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  textMode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
}

NavBar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'About'
}
