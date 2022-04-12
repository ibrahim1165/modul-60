import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=" text-center m-5 text-danger text-bold">
            <p>Page Not Found 404</p>
          <Nav.Link as={Link} to="/">Back to Home</Nav.Link>
        </div>
    );
};

export default NotFound;