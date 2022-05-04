import React, {Fragment, useState} from 'react';
import './App.css';
import About from './components/About/About';
import FooterContact from "./components/Contact/FooterContact";
import Honeycomb from "./components/Honeycomb/Honeycomb";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import Unfinished from "./components/UI/Unfinished/Unfinished";
import Contact from "./components/Contact/Contact.js";
import ResponsiveContentBookingButton from "./components/UI/Buttons/ResponsiveContentBookingButton";


function App() {

    const [currentPage, handlePageChange] = useState('');


    const renderPage = () => {

        switch (currentPage) {

            case 'About Me' :
                return  <About />;

            case 'Services' :
                return <Services />

            case 'Contact' :
                return ''

            case 'Unfinished' :
                return <Unfinished/>

            default:
                return ''
        }
    }


        return (

        <Fragment >
            <body>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}  />
            <h1 className={`mainHeader text-dark ff-serif-bold `}>Bee Better Massage </h1>
            <div className='hero'>
            </div>
            <Honeycomb  currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage(currentPage)}
            <ResponsiveContentBookingButton/>

            {currentPage==='Contact' && <Contact/>}
            {currentPage!=='Contact' && <FooterContact currentPage ={currentPage}/>}

            </body>
        </Fragment>
    )
}
export default App;

