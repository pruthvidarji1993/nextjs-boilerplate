import Head from 'next/head';
import Navbar from '../NavigationBar/Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>Sample Next BoilerPlate</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;