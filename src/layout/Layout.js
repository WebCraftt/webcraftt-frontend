import React from 'react'
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="bg-white dark:bg-gray-900">
                {children}
            </div>
        </div>
    )
}

export default Layout;
