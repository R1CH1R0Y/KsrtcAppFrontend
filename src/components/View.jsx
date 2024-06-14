import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './Nav';

const View = () => {
    const [stud, changeData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:8535/view").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Nav/>
            <div className='view'>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Bus List</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">BUS NAME</th>
                                            <th scope="col">ROUTE.</th>
                                            <th scope="col">BUS NO.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stud.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td>{value.bname}</td>
                                                    <td>{value.route}</td>
                                                    <td>{value.bno}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default View