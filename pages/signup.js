import React from 'react'


function signup() {
   
    return (
        <>
            <form className='container my-5 mx-auto' method='POST' action="/api/signup" >

                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="nameInput" className="form-label">First Name *</label>
                        <input name="first" required={true} type="text" className="form-control" id="nameInput" />
                    </div>
                    <div className="mb-3 col">
                        <label htmlFor="nameInput" className="form-label">Last Name *</label>
                        <input name="last" required={true} type="text" className="form-control" id="nameInput" />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="nameInput" className="form-label">Username *</label>
                        <input name="username" required={true} type="text" className="form-control" id="usernameInput" />
                    </div>
                    <div className="mb-3 col">
                        <label htmlFor="nameInput" className="form-label">Password *</label>
                        <input name="password" required={true} type="password" className="form-control" id="passwordInput" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input name="mailid" type="email" className="form-control" id="mailIdInput" />
                    <div className="form-text">
                        We need your mail id for sharing latest information and for moderation.
                    </div>
                </div>
                <button type="submit" className='btn btn-success' > Submit</button>
            </form>
        </>
    )
}

export default signup