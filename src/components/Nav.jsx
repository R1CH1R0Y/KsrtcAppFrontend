import React from 'react'
import "./Nav.css";

const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="nav navbar-brand" href="#" className='head'><i><b>KSRTC App</b></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/a"><b>Add Bus</b></a>
        <a class="nav-link active" href="/sd"><b>Search Bus</b></a>
        <a class="nav-link active" href="/v"><b>Bus List</b></a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav