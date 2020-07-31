import React from 'react';

import Header from './components/Header';
import BackgroundRadius from './components/BackgroundRadius';
import ContainerAbout from './components/ContainerAbout';


const Home: React.FC = () => {
    return (
        <div>
            <BackgroundRadius />
            <Header />
            <ContainerAbout />
        </div>
    );
}

export default Home;