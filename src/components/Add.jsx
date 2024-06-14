import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'



const Add = () => {
    const [bus, changeData] = useState(
        {
            "bname": "",
            "route": "",
            "bno": ""
        }
    )
    const eventHandler = (event) => {
        changeData({ ...bus, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(bus)
        axios.post("http://localhost:8535/add", bus).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully added")
                }
                else {
                    alert("failed")
                }
            }
        )
    }
    return (
        <div>
            <Nav/>
            <div className='add'>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Bus</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Bus Name :</label>
                                        <input type="text" className="form-control" name='bname' value={bus.bname} onChange={eventHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Route :</label>
                                        <input type="text" className="form-control" name='route' value={bus.route} onChange={eventHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    </div>
                                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Bus No. :</label>
                                        <input type="text" id="" className="form-control" name='bno' value={bus.bno} onChange={eventHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Add</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Add