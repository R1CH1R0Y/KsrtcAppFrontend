import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [user, setData] = useState(
        {
            "name": "",
            "email": "",
            "mob": "",
            "gender": "",
            "pswd": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...user, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        if (user.pswd != user.cpswd) {
            alert("Passwords Do Not Match !!")
        } else {
            console.log(user)
            axios.post("http://localhost:8535/signup", user).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status === "success") {
                        alert("Successfully Added!")
                    }
                }
            ).catch(
                (error) => {
                    alert(error.message)
                }
            )
        }
    }

    return (
        <div className='signup'>
            <h1><b>User Sign Up</b></h1>
            <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Username :</label>
                                        <input type="text" className="form-control" name='name' value={user.name} onChange={inputHandler} placeholder='enter your username'/>
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">E-mail ID:</label>
                                        <input type="text" className="form-control" name='email' value={user.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Mobile :</label>
                                        <input type="text" className="form-control" name='mob' value={user.mob} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Gender :</label>
                                        <select id="" className="form-control" name='gender' value={user.gender} onChange={inputHandler}>
                                            <option value=""></option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Password :</label>
                                        <input type="password" className="form-control" name='pswd' value={user.pswd} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Confirm Password :</label>
                                        <input type="password" className="form-control" name='cpswd' value={user.cpswd} onChange={inputHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                    <br />
                    <br />
                    <b>Go Back <a href="/">Home</a></b>
                    <br /><br />
                </div>
            </div>
        </div>
    )
}

export default Signup