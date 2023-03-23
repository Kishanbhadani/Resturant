import React from 'react';
import {Link} from "react-router-dom";

function navbar(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/about"> About us </Link> </li>
                    <li><Link to="/moreitem"> more item </Link> </li>
                    <li><Link to="/check"> Check now </Link> </li>
                    <li className='mlr-2 float-right' onClick={props.login}><Link to="/login"> {props.status ? "Logout":"Login"}  </Link></li>
                    <li className='float-right' onClick={props.registation}><Link to="/registation"> Registation  </Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default navbar;