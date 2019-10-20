import React from 'react';

const Header = ({titulo}) => (
    <nav>
        <div className="nav-wrapper light-blue darker-2">
            <a href="#!" className="brand-logo">{titulo}</a>
        </div>
    </nav>
);

export default Header;
