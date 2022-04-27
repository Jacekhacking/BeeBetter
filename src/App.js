import React, {Fragment, useState} from 'react';
import './App.css';
import About from './components/About/About';
import Bookings from "./components/Bookings/Bookings";
import FooterContact from "./components/Footer/FooterContact";
import Honeycomb from "./components/Honeycomb/Honeycomb";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminEditor from "./components/Admin/AdminEditor";
function App() {

    const [currentPage, handlePageChange] = useState('Home');


    const renderPage = () => {
        switch (currentPage) {
            case 'About Me' :
                return <About />;

            case 'Services' :
                return <Services />

            default:
                return <Honeycomb currentPage={currentPage} handlePageChange={handlePageChange}/>
        }
    }


    if (currentPage === 'About Me' ){
        console.log('about me if statement working')
    }


        return (

        <Fragment>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>

            <body>
            <h1 className={`mainHeader text-dark ff-serif-bold fs-800`}>Bee Better Massage </h1>
            <div className='hero'>
            </div>
            <Bookings/>

            {renderPage(currentPage)}
            <AdminLogin></AdminLogin>
            <AdminEditor/>

            <FooterContact/>

            </body>
        </Fragment>


    )
}

export default App;
