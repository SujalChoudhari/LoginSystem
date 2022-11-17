import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-4 py-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Tech Discussions</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/">Home</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link className='btn btn-dark me-2' href="/login">Login</Link>
                            <Link className="btn btn-success" href="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar