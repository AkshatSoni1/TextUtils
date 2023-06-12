import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    // let myStyle={
    //     backgroundColor:'#71b2fe'
    // }
    return (
        <nav className={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand ms-2" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutUs}</Link>
                        </li> 
                        {/* <li className={`nav-link active form-check form-switch text-${props.mode==='light'?'dark':'light'} nav-item`} style={{marginLeft:"2.5rem"}}>
                            <input className="form-check-input" onClick={props.setAppMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </li> */}
                    </ul>
                    <div className={`nav-link form-check form-switch text-${props.mode==='light'?'dark':'light'}`} style={{marginLeft:"2.5rem"}}>
                        <input className="form-check-input" onClick={props.setAppMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label me-2" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Text-Utils",
    aboutUs : "About our Text-Utils"
}