import React from 'react'
import Navbar from '../components/Navbar';

const AdminLayout = ({ children }) => {
    return (
        <div id='adminPanelWrapper' className='h-screen'>
            {children}
        </div>
    )
}

export default AdminLayout;
