import React from 'react';
import Ilustration from '../../../../assets/ilustration.svg';
import { Container, InstagramIcon, LinkdinIcon, GithubIcon } from './styles';

const Wellcome: React.FC = () => {
    return (
        <Container>
            <h1 className="wellcome">Bem Vindo!</h1>
            <h1 className="wellcomeDescription">
                Eu sou Bruno Alves
            </h1>


            <div className="containerImgIcon">
                <img src={Ilustration} alt="Ilustração" />

                <div className='Icons'>
                    <div className='icon'>

                        <a href="https://www.linkedin.com/in/bruno-santos-882173161/" target="_blank2" rel="noopener noreferrer">
                            <LinkdinIcon />
                        </a>
                        <div className='indicator'></div>
                    </div>
                    <div className='icon'>

                        <a href="https://www.instagram.com/nito_b.a/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                        <div className='indicator'></div>
                    </div>
                    <div className='icon'>

                        <a href="https://github.com/Nitoba/" target="_blank" rel="noopener noreferrer">
                            <GithubIcon />
                        </a>
                        <div className='indicator'></div>

                    </div>

                </div>
            </div>

            <p className="description">
                Desenvolvedor de aplicativos com Flutter
                e apaixonado por tecnologia
            </p>

            <button className="btnCurriculo">
                <a href='https://drive.google.com/file/d/15gl5FfoP1HGR6VmgZAYSbTRj7CIGIAzE/view?usp=sharing' target="_blank" rel="noopener noreferrer">Download CV</a>
            </button>


        </Container>
    );
}

export default Wellcome;