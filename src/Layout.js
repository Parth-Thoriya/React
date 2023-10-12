import React from 'react';
import { Outlet ,Link } from 'react-router-dom';
import "./index.css";
const Logo = () => {
    return (
      <div className='col-2'>
        <img src='https://darshan.ac.in/Content/media/DU_Logo.svg' className='img-fluid' alt='DU image here'/>
      </div>
    );
  }

  const Headerbar = () => {
    return (  
    <div className='col' id="menu">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="./student" className='nav-link active'>Student</Link>
                
              </li>
              <li class="nav-item">
                <Link to="/" className='nav-link active'>Faculty</Link>
                
              </li>
              {/* <li class="nav-item">
                <Link to="/Calculator" className='nav-link active'>Calculator</Link>
                
              </li>               */}
              <li class="nav-item">
                <Link to="/add/faculty" className='nav-link active'>Add Faculty</Link>
                
              </li>
              <li class="nav-item">
                <Link to="/add/student" className='nav-link active'>Add Student</Link>
                
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                 <Link to="/search" className="btn btn-outline-success" type="submit"> Search</Link> 
            </form>
          </div>
        </div>
      </nav>
    </div>
    );
  }

  const Banner = () =>{
    return (
      <div className='container'>
          <div className='row'>
          <div className='col-12'>
              <img src='https://darshan.ac.in/U01/Slider/Slide_3.jpg?V=2.1.4' className='img-fluid' alt='Image of DU'/>
          </div>
          </div>
      </div>
    
    );
  }

  const Maincontain = ()=>{
    return(
    <div className='col-9 maincontent'>
     <Outlet/>
    </div>
    );
  }

  
const Sidebar = ()=>{
    return(
    <div className='col m-2 Sidebar '>
      <div className="list-group">
    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
      The current link item
    </a>
    <a href="#menu" className="list-group-item list-group-item-action">Menu Bar</a>
    <a href="#" className="list-group-item list-group-item-action">A third link item</a>
    <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
    <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
  </div>
    </div>
    );
  }
  // tag name can be 'Main Body' but use camel case.
// class Mainbody extends React.Component{
//     render(){
      
//     }
// }
const Mainbody=() =>{
  return( 
    <div className='container mt-2'>
      <div className='row'>
        <Maincontain/>
        <Sidebar />
      </div>
    </div>
   );  
}
const Header = () =>{
    return (
      <div className='container'>
       <div className='row'>
         <Logo />
         <Headerbar />
       </div>
     </div>
    );
   }

const Layout = () =>{
    return(
        <>
        <Header/>
        <Mainbody/>
     </>
    );
}
export default Layout 