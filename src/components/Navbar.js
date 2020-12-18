import React from 'react'

const Nav = (props) => {

    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Noticias disponibles <span className="badge bg-primary text-light">
                    {props.number}</span> </a>
            </div>
        </nav>  
    )
}

export default Nav