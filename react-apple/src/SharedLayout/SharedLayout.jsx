import React from 'react'
import './commonResources/css/styles.css';
import './commonResources/css/bootstrap.css';
import { Outlet } from 'react-router-dom'

import Header from './Header/Header';
import Footer from './Footer/Footer';

function SharedLayout() {
  return (
    <>
   <Header/>
   <outlet />
   <Footer/>
   </>
  )
}

