import React from 'react';

const Header = ({name, setName}) => {
    setName('Max');
    return (
        <header className="container">
            <div className="name">
                {/* <h1>{name} Zemmouri <span>Web Developer</span></h1> */}
                hello
            </div>
        </header>
    
    );
}

export default Header;
