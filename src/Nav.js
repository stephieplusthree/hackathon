import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: "white"
    };

    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Stephanie's Hackathon</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          
          <Link className="p-2 text-dark" to="/home">Home</Link>
          <Link className="p-2 text-dark" to="/firstApi">First Api</Link>
          <Link className="p-2 text-dark" to="/secondApi">Second Api</Link>
        </nav>
    
      </div>
      
        // <nav>
        //     <h3>Logo</h3>
        //     <ul className="nav-links">
        //         <Link style={navStyle} to="/home">
        //             <li>Home</li>
        //         </Link>
        //         <Link style={navStyle} to="/firstApi">
        //             <li>First API</li>
        //         </Link>
        //         <Link style={navStyle} to="/secondApi">
        //             <li>Second API</li>
        //         </Link>
        //     </ul>
        // </nav>
    );
}

export default Nav;
