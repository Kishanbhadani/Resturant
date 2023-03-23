import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
               <footer>
                    <a href="#" className="footer_a">Faqs</a>
                    <a href="#" className="footer_a">Terms & condition</a>
                    <a href="#" className="footer_a">Privacy policy</a>
                    <a href="#" className="footer_a">&copy;2020 Octant Food</a>
               </footer>    
            </div>
        );
    }
}

export default Footer;