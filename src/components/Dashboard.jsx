import React from 'react'
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='dash'>
        <h1><b>Welcome</b></h1>
        <a href="/a">Add Bus</a>
        <br /><br />
        <a href="/sd">Search Bus</a>
        <br /><br />
        <a href="/v">Bus List</a>
    </div>
  )
}

export default Dashboard