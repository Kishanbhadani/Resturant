import React from 'react';

function Header(props) {
    return (
        <div>
            <div className="Cont-baner" style={{backgroundImage: 'url("img/'+props.img+'")'}}>
                <h2 className="Cont-baner-name">Welcome To Our Resturant</h2>
                <h3>Join With Community order food where Test is yours</h3>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}

export default Header;