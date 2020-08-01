import React from 'react';

import Header from './components/Header';
import BackgroundRadius from './components/BackgroundRadius';
import ContainerAbout from './components/ContainerAbout';
import ContainerDescription from './components/ContainerDescription'
import ContainerPortfolio from './components/ContainerPortfolio'

const Home: React.FC = () => {
    return (
        <>
            <BackgroundRadius />
            <Header />
            <ContainerAbout />
            <ContainerDescription />
            <ContainerPortfolio />
        </>
    );
}

export default Home;