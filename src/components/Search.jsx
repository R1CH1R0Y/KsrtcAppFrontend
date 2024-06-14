import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Nav';

const Search = () => {
    const [bus, changeData] = useState(
        {
            "bno": ""
        }
    )
    const [result, setData] = useState([])
    const eventHandler = (event) => {
        changeData({ ...bus, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(bus)
        axios.post("http://localhost:8535/search", bus).then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        )
    }
    const deletebus = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8535/remove", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status === "success") {
                    alert("successfully deleted")
                } else {
                    alert("error in deletion")
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }
    return (
        <div>
            <Nav/>
            <div className='search'>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Search Bus</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Bus No :</label>
                                <input type="text" className="form-control" name='bno' value={bus.bno} onChange={eventHandler} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-warning" onClick={readValue}>Search</button>
                    <br />
                    <br />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">BUS NAME</th>
                                <th scope="col">ROUTE</th>
                                <th scope="col">BUS NO.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map(
                                (value, index) => {
                                    return <tr>
                                        <td>{value.bname}</td>
                                        <td>{value.route}</td>
                                        <td>{value.bno}</td>
                                        <td><button className="btn btn-danger" onClick={() => { deletebus(value._id) }}>Delete</button></td>
                                    </tr>
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Search