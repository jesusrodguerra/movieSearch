import React from 'react';
import { Link } from 'react-router-dom';

const ButtonBack = () => {
    return ( 
        <div>
            <Link to="/" className="button is-primary is-inverted">Go Back</Link>
        </div>
     );
}
 
export default ButtonBack;