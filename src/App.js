import React, { useState} from 'react';
import './App.css';
import About from './components/About/About';
import FooterContact from "./components/Contact/FooterContact";
import Honeycomb from "./components/Honeycomb/Honeycomb";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import Unfinished from "./components/UI/Unfinished/Unfinished";
import Contact from "./components/Contact/Contact.js";
import Tour from "./components/Tour/Tour";
import Reviews from "./components/Reviews/Reviews"


function App() {

    const [currentPage, handlePageChange] = useState('');


    const renderPage = () => {

        switch (currentPage) {
            case 'Reviews' :
                return <Reviews />

            case 'About Me' :
                return  <About />;

            case 'Services' :
                return <Services />

            case 'Contact' :
                return ''

            case 'Unfinished' :
                return <Unfinished/>

            case 'Tour' :
                return <Tour />

            default:
                return ''
        }
    }

        return (
            <>
                    <body>
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange}  />
                    <h1 className={`mainHeader text-dark ff-serif-bold `}>Bee Better Massage </h1>
                    <div className='hero'>
                    </div>
                    <Honeycomb  currentPage={currentPage} handlePageChange={handlePageChange} />

                    {renderPage(currentPage)}

                    {currentPage==='Contact' && <Contact/>}
                    {currentPage!=='Contact' && <FooterContact currentPage ={currentPage}/>}
                    </body>



        </>
    )
}
export default App;

