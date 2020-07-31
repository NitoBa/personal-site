import React from 'react';

import { Container, SectionLeft, SectionRight, LinkdinIcon, InstagramIcon, GithubIcon } from './styles';
import Ilustration from '../../../../assets/ilustration.svg';


const ContainerAbout: React.FC = () => {
    return (
        <Container>

            <SectionLeft>
                <h1 className='wellcome'>
                    Bem Vindo!
            </h1>
                <h1>Eu sou Bruno Alves</h1>
                <p>
                    Desenvolvedor de aplicativos com Flutter e apaixonado por tecnologia
            </p>
                <button>
                    <span>Download CV</span>
                </button>

            </SectionLeft>
            <SectionRight>
                <img src={Ilustration} alt='ilustration' />
                <div className='Icons'>
                    <div className='icon'>
                        <LinkdinIcon />
                        <div className='indicator'></div>
                    </div>
                    <div className='icon'>
                        <InstagramIcon />
                        <div className='indicator'></div>
                    </div>
                    <div className='icon'>
                        <GithubIcon />
                        <div className='indicator'></div>

                    </div>

                </div>
            </SectionRight>
        </Container>


    );
}

export default ContainerAbout;