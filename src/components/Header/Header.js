import React from 'react';

const Header = () => {
    return (
        <header className="container m-auto my-0 px-4">
            <nav>
                <ul className="flex justify-around py-4">
                    <li>Products</li>
                    <li>User</li>
                    <li>Login</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;