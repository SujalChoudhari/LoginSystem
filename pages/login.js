import React from 'react'

function login() {
    return (
        <>
            <form className='container my-5 mx-auto' method='POST' action="/api/login">
                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="nameInput" className="form-label">Username *</label>
                        <input name="mailid" required={true} type="text" className="form-control" id="usernameInput" />
                    </div>
                    <div className="mb-3 col">
                        <label htmlFor="nameInput" className="form-label">Password *</label>
                        <input name="password" required={true} type="password" className="form-control" id="passwordInput" />
                    </div>
                </div>
                <button type="submit" className='btn btn-success' > Submit</button>
            </form>
        </>
    )
}

export default login