import React, {Fragment, useState} from 'react';
import './App.css';
import About from './components/About/About';
import FooterContact from "./components/Footer/FooterContact";
import Honeycomb from "./components/Honeycomb/Honeycomb";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import Unfinished from "./components/UI/Unfinished/Unfinished";
function App() {

    const [currentPage, handlePageChange] = useState('');




    const renderPage = () => {

        switch (currentPage) {

            case 'About Me' :
                return  <About />;

            case 'Services' :
                return <Services />

            case 'Unfinished' :
                return <Unfinished/>

            default:
                return ''
        }
    }

    if (currentPage === 'About Me' ){
        console.log('about me if statement working')
    }

        return (

        <Fragment >
            <body>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}  />
            <h1 className={`mainHeader text-dark ff-serif-bold fs-800`}>Bee Better Massage </h1>
            <div className='hero'>
            </div>
            <Honeycomb currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage(currentPage)}

            <FooterContact/>

            </body>
        </Fragment>
    )
}
export default App;

