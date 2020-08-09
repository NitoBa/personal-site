import React from 'react';
import Header from './components/Header';
import BackgroundBlue from './components/BackgroundBlue';
import Wellcome from './components/Wellcome';
import ContainerPortfolio from './components/ContainerPortfolio';
import ContainerService from './components/ContainerService';
import ContainerAbout from './components/ContainerAbout';

// import { Container } from './styles';

const NewHome: React.FC = () => {
    return (
        <div className='App'>
            <Header />
            <BackgroundBlue />
            <div id="wellcome">

                <Wellcome />
            </div>
            <div id="about">

                <ContainerAbout />
            </div>
            <div id="portfolio">

                <ContainerPortfolio />
            </div>


            <ContainerService />
            <div id="service">
            </div>
        </div>
    );
}

export default NewHome;