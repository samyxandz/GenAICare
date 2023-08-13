import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Nav/Navbar.js';
import Footer from '../Footer/Footer.js';

const Layout = () => {
  return (
     <Fragment>
           <Navbar />
           <main>
                <Outlet />
           </main>
           <Footer />
     </Fragment>
  )
}

export default Layout;
